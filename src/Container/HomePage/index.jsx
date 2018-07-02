import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Background from "Component/Background";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Background/>
            </Fragment>
        );
    }
}

HomePage.propTypes = {
    Background:PropTypes.func

};

export default HomePage;
