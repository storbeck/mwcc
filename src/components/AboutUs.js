import React, { Component } from "react";

import { Paper, Typography, Link } from "@material-ui/core";
import placeholder from "../assets/placeholder-face-big.png"
import styled from "styled-components";

const Flex = styled.div`
    display: flex;
    margin-top: 40px;
    img {
        border-radius: 50%;
        width: 100px !mportant;
        height: 100px;
        margin-right: 30px;
    }
`;

class AboutUs extends Component {
    render() {
        return (
            <Paper style={{padding: 50, boxShadow: "none", borderRadius: 0}}>
                <Typography variant="h4" style={{marginBottom: 20}}>About Us</Typography>
                <Typography variant="body1" style={{display: "block", marginBottom: 10}}>
                    We are a family-owned and operated company and it is our goal to provide our customers with
                    outstanding service and quality products. We operate with family and home in mind, knowing a
                    house is not just a house, but a home where love and family grows. It is our dedication to care
                    for our customers’ homes as if they were our own.
                </Typography>
                <Typography variant="body1" style={{display: "block", marginBottom: 10}}>
                    Mays-Wilson Construction Company is a general contracting company that specializes in home improvement projects including roofing, siding, gutters, and remodeling. We’ve served the central Ohio area for a combined 25 years and it is our goal to provide every homeowner with the best possible service and products. Our values include integrity, quality, and customer focus and with these values, we ensure that each and every homeowner and home is treated with deserved respect and diligence.
                </Typography>

                <Flex>
                    <img src={placeholder} alt="Chad Mays"></img>
                    <div>
                        <Typography variant="h6">Chad Mays</Typography>
                        <Typography variant="body1" style={{display: "block", marginBottom: 10}}>
                            Chad has over 20 years of experience in interior and exterior home improvement and remolding. Born and raised in Columbus, Ohio, he has the utmost love for his community and desires to improve it one house at a time. “It is my goal to assist each and every homeowner with maintaining a safe and beautiful home.”
                        </Typography>
                        <Typography variant="body1" style={{display: "block"}}><Link href="mailto:chad.mwcc@gmail.com">Chad.mwcc@gmail.com</Link></Typography>
                    </div>
                </Flex>

                <Flex>
                    <img src={placeholder} alt="Mitch Wilson"></img>
                    <div>
                        <Typography variant="h6" style={{marginTop: 10}}>Mitch Wilson</Typography>
                        <Typography variant="body1" style={{display: "block", marginBottom: 10}}>
                            Mitch has 5 years of experience in home repair and remodeling and 10 years of experience in manufacturing. Also born and raised in Columbus, Mitch has always appreciated the beauty and diversity that Columbus holds. Like Chad, Mitch exudes honesty and integrity and shares the goal to “improve Columbus and its homes and provide a safer and more beautiful community.”
                        </Typography>
                        <Typography variant="body1" style={{display: "block"}}><Link href="mailto:mitch.mwcc@gmail.com">Mitch.mwcc@gmail.com</Link></Typography>
                    </div>
                </Flex>
            </Paper>
        )
    }
}

export default AboutUs;
