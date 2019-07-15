DOCKER := docker run -it --rm posters-galore-react

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Build the docker container
	docker build -t posters-galore-react .

start: ## Run the demo.
	$(DOCKER) yarn start
