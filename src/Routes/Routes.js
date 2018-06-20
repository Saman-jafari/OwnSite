import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import { Token_Remove } from "Redux/actions/ApiRestActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//router Component
export class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "home",
            email: "",
            isLogin: false,
            isFirstTime: false,
            TokenFromServerLogin: "",
            FirstTimeRedirect: false,
            nowTime: undefined
        };
    }
    render() {
        return (
            <div>

            </div>
        );
    }

}

Routes.propTypes = {
    fetchAccountType: PropTypes.func.isRequired,
    fetchMember: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    api: state.api
});
export default withRouter(
    connect(mapStateToProps, { Token_Remove })(Routes)
);
