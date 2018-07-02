import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Col, Dropdown, Icon, Menu, message, Row } from "antd";
import "js/LandingPage/LandingPage.css";
import flagEng from "media/United-Kingdom-Flag.png";
import flagDe from "media/de_DE.png";
import MediaQuery from "react-responsive";
import { Trans, translate } from "react-i18next";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { is_clickedLog } from "Redux/actions/clickActions";


class HeaderLand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "home",
            visible: false,
            flagsLang: flagEng,
            accType: null,
        };
    }

    render() {
        return ('');
    }
}

HeaderLand.propTypes = {
    fetchAccountType: PropTypes.func.isRequired,
    is_clickedLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    api: state.api,
    click: state.clickEv
});

export default withRouter(
    connect(mapStateToProps, {
        is_clickedLog,
    })(translate("translations")(HeaderLand))
);
