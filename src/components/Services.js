import React, { Component } from "react";

import { Paper, Typography } from "@material-ui/core";

import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

import roofing_logo from "../assets/services/roofing.jpg";
import windows_logo from "../assets/services/windows.jpg";
import siding_logo from "../assets/services/siding.jpg";
import gutters_logo from "../assets/services/gutters.jpg";
import insulation_logo from "../assets/services/insulation.jpg";


const styles = {
    card: {
        maxWidth: 200
    },
    media: {
        height: 140,
    },
};

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    > div { 
        margin: 10px;
    }
`;

const CardWrapper = styled.div`
    display: flex;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    img {
        width: 210px !important;
        height: 140px;
        margin-right: 20px;
        display: block;
    }
`;

class Services extends Component {
    
    render() {
        const product_details = [
            { logo: roofing_logo, title: "Roofing", description: "With hundreds of products to choose from, we have a color and texture for any style. We specialize in repairing damaged shingles as well as entirely replacing interior and exterior components of roofs. With our extended selection, we grantee every customer will receive a picture-perfect, high-quality roof or a stunning and seamless repair.", link: "#" },
            { logo: windows_logo, title: "Windows", description: "Old windows can cause draftiness and high energy bills. We specialize in replacing windows for a beautiful appearance as well and a cost-efficient home improvement. With a variety styles and sizes available, our window experts can help homeowners navigate through options to best compliment their home and save money on heating and cooling annually.", link: "#" },
            { logo: siding_logo, title: "Siding", description: "Transform your home with a crisp, clean look. With a variety of products and sizes, our team can help you redesign the exterior of your home for with fresh, cost-effective siding and insulation.", link: "#" },
            { logo: gutters_logo, title: "Gutters", description: "Gutters are important in preventing erosion and basement flooding, as well as protecting siding and garden beds. Without properly installed or with using old, damaged gutters, you are at risk of causing permanent damage to the foundation and water damage to the exterior of your home. We offer high-quality, long-lasting gutters designed to protect by constantly moving water away your home. We have gutters available in multiple colors and sizes to suit all needs and styles.", link: "#" },
            { logo: insulation_logo, title: "Insulation", description: "Insulation is used to slow the rate of heat transfer in both hot and cold climates. With high-quality insulation, you can save money on energy bills while still enjoying a cool or warm home. ", link: "#" },
        ]

        const cards = product_details.map((product, idx) => (
                <CardWrapper key={idx}>
                    <img
                        src={product.logo}
                        title={product.title}
                        alt={product.title} />
                    <div style={{paddingTop: 10}}>
                        <Typography gutterBottom variant="h5" component="h2">{product.title}</Typography>
                        <Typography component="p">{product.description}</Typography>
                    </div>
                </CardWrapper>
        ));


        return (
            <Paper style={{padding: 50, boxShadow: "none", borderRadius: 0}}>
                <Typography variant="h4" style={{marginBottom: 20}}>Services</Typography>
            
                <Flex>
                    { cards } 
                </Flex>
            </Paper>
        )
    }
}

export default withStyles(styles)(Services);
