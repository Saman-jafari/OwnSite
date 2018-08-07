import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import resume from "media/Resume-0-min.jpg";
import photography from "media/Photo-min.jpg";
import Cinematography from "media/Cinema-03-min.jpg";
import Audio from "media/audio-4-min.jpg";
import Contact from "media/contact-05-min.jpg";
import { Link } from "react-router-dom";

const CardsDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
`;
const CartImage = styled.img`
    width: 200px;
    height: 100%;
`;
const DivimgCard = styled(Link)`
    display: flex;
    position: relative;
    justify-content: space-around;
    width: 20%;
    padding: 20px;
`;
const DivInside = styled.a`
    display: flex;
    justify-content: center;
`;
const Pofcards = styled.p`
    position: absolute;
    top: 4rem;
    color: #fff;
    font-size: 2.5rem;
`;

const Cards = () => {
    return (
        <CardsDiv>
            <DivInside>
                <DivimgCard to="/Resume">
                    <Pofcards>Resume</Pofcards>
                    <CartImage href="/Resume" src={resume} alt="" />
                </DivimgCard>
                <DivimgCard to="/Photography">
                    <Pofcards>Photography</Pofcards>
                    <CartImage href="/photography" src={photography} alt="" />
                </DivimgCard>
                <DivimgCard to="/Cinematography">
                    <Pofcards>Cinematography</Pofcards>
                    <CartImage href="/Cinematography" src={Cinematography} alt="" />
                </DivimgCard>
                <DivimgCard to="/Audio">
                    <Pofcards>Audio</Pofcards>
                    <CartImage href="/Audio" src={Audio} alt="" />
                </DivimgCard>
                <DivimgCard to="/Contact">
                    <Pofcards>Contact</Pofcards>
                    <CartImage href="/Contact" src={Contact} alt="" />
                </DivimgCard>
            </DivInside>
        </CardsDiv>
    );
};

Cards.propTypes = {};

export default Cards;
