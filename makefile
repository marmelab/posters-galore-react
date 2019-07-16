export UID = $(shell id -u)
export GID = $(shell id -g)

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Build the docker container
	docker-compose run --rm app yarn

start: ## Run the demo.
	docker-compose up

stop: ## Stop the demo.
	docker-compose down

test: ## Run the tests.
	docker-compose run --rm app yarn test

cypress-run:
	CYPRESS_CACHE_FOLDER=.cache/cypress yarn test:e2e:setup
	CYPRESS_CACHE_FOLDER=.cache/cypress yarn test:e2e

cypress-open:
	CYPRESS_CACHE_FOLDER=.cache/cypress yarn test:e2e:setup
	CYPRESS_CACHE_FOLDER=.cache/cypress yarn test:e2e:open
