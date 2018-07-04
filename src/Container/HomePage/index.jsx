import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Background from 'Component/Background';
import DivContainer from 'Component/ContentContainer'
import styled from 'styled-components';
import LogoImg from "Component/Logo";
import FlipCard from "../../Component/FlipCard";

class HomePage extends Component {

    render() {


        return (
            <Fragment>
                <DivContainer>
                <LogoImg/>
                    <FlipCard>
                        test
                    </FlipCard>
                <Background/>
                </DivContainer>
            </Fragment>
        );
    }
}

HomePage.propTypes = {
    Background: PropTypes.func

};

export default HomePage;
