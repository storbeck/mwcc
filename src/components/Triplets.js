import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import storm_icon from "../assets/icons8-storm-512.png";
import inspection_icon from "../assets/icons8-worker-64.png";
import insurance_icon from "../assets/icons8-knowledge-sharing-64.png";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    * {
        margin: 20px 60px;
        text-align: center;
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
`;

class Triplets extends Component {
    render() {
        return (
            <Wrapper>
                <Card>
                    <img src={storm_icon} alt="Storm Damage Icon" style={{width: 64}} />
                    <Typography variant="title" paragraph={true}>Storm Damage</Typography>
                </Card>
                <Card>
                    <img src={inspection_icon} alt="Free Inspection Icon" style={{width: 64}} />
                    <Typography variant="title" paragraph={true}>Free Inspection</Typography>
                </Card>
                <Card>
                    <img src={insurance_icon} alt="Insurance Claim Icon" style={{width: 64}} />
                    <Typography variant="title" paragraph={true}>Insurance Claim</Typography>
                </Card>
            </Wrapper>
        )
    }
}

export default Triplets;