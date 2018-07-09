import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import resume from "media/Resume-0-min.jpg";
import photography from "media/Photo-min.jpg";
import Cinematography from "media/Cinema-03-min.jpg";
import Audio from "media/audio-4-min.jpg";
import Contact from "media/contact-05-min.jpg";

const Cards = () => {
    const flip = () => console.log('return');
    const CardsDiv = styled.div `
display: flex;
justify-content: center;
margin: auto;
`;
    const CartImage = styled.img`
    width: 200px;
    height: 100%;

 
`;
    const DivimgCard = styled.div `
display: flex;
position: relative;
justify-content: space-around;
width: 20%;
padding: 20px;

`;
    const DivInside = styled.div`
display: flex;
justify-content: center;

`;
    //@todo Create a flip card
    return (
        <CardsDiv>
            <DivInside>
            <DivimgCard>
                <CartImage src={resume} alt=""/>
            </DivimgCard>
            <DivimgCard>
                <CartImage src={photography} alt=""/>
            </DivimgCard>
            <DivimgCard>
                <CartImage src={Cinematography} alt=""/>

            </DivimgCard>
            <DivimgCard>
                <CartImage src={Audio} alt=""/>

            </DivimgCard>
            <DivimgCard>
                <CartImage src={Contact} alt=""/>

            </DivimgCard>
            </DivInside>
        </CardsDiv>
    );
};

Cards.propTypes = {

};

export default Cards;
