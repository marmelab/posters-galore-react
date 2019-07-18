import React, { createElement } from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources, Responsive } from 'react-admin';
import { withRouter } from 'react-router-dom';
import LabelIcon from '@material-ui/icons/Label';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { SEGMENT_LABEL } from '../customer/segments';

const styles = {
    menuItem: {
        textTransform: 'capitalize',
    },
};

const Menu = ({ classes, resources, onMenuClick, logout }) => (
    <div>
        {resources
            .filter(resource => resource.name !== 'categories')
            .map(resource => (
                <MenuItemLink
                    className={classes.menuItem}
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={(resource.options && resource.options.label) || resource.name}
                    leftIcon={resource.icon && createElement(resource.icon)}
                    onClick={onMenuClick}
                />
            ))}
        <MenuItemLink
            className={classes.menuItem}
            to="/segments"
            primaryText={SEGMENT_LABEL}
            leftIcon={<LabelIcon />}
            onClick={onMenuClick}
        />
        <Responsive small={logout} medium={null} />
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default compose(
    withStyles(styles),
    withRouter,
    connect(mapStateToProps),
)(Menu);
