import React, { Component } from "react";

import { Paper, Typography, Card, CardActionArea, CardContent, CardMedia } from "@material-ui/core";

import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

import certainteed_logo from "../assets/logos/certainteed.jpg";
import iko_logo from "../assets/logos/iko.png";
import gaf_logo from "../assets/logos/gaf.jpg";
import owenscorning_logo from "../assets/logos/owenscorning.svg";
import simonton_logo from "../assets/logos/simonton.jpg";
import qualityedge_logo from "../assets/logos/qualityedge.png";


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

class Products extends Component {
    
    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
    }

    open(href) {
        Object.assign(document.createElement('a'), {
            target: '_blank',
            href,
          }).click();
    }

    render() {

        const { classes } = this.props;

        const product_details = [
            { logo: certainteed_logo, title: "CertainTeed", description: "Preferred siding manufacturer", link: "https://www.certainteed.com/" },
            { logo: iko_logo, title: "IKO", description: "Preferred single manufacturer", link: "https://www.iko.com/na/" },
            { logo: gaf_logo, title: "GAF", description: "Preferred single manufacturer", link: "https://www.gaf.com/en-us" },
            { logo: owenscorning_logo, title: "OwensCorning", description: "Preferred insulation manufacturer", link: "https://www.owenscorning.com/" },
            { logo: simonton_logo, title: "Simonton", description: "Preferred window manufacturer", link: "https://www.simonton.com/" },
            { logo: qualityedge_logo, title: "Quality Edge", description: "Preferred gutter and sheet metal flashing manufacturer", link: "https://www.qualityedge.com/" },
        ]

        const cards = product_details.map((product, idx) => (
            <Card className={classes.card} key={idx}>
                <CardActionArea onClick={() => this.open(product.link)}>
                    <CardMedia
                        className={classes.media}
                        style={{backgroundColor: "white"}}
                        image={product.logo}
                        title={product.title} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{product.title}</Typography>
                        <Typography component="p">{product.description}</Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                    <Button size="small" color="primary">Learn More</Button>
                </CardActions> */}
            </Card>
        ));


        return (
            <Paper style={{padding: 50, boxShadow: "none", borderRadius: 0}}>
                <Typography variant="h4" style={{marginBottom: 20}}>Products</Typography>
                <Typography variant="body1" style={{display: "block", marginBottom: 10}}>
                Provided here are links to preferred manufacturers. We have samples of all of our products and invite you 
                to search around these websites to learn more about various products, materials, and colors available. We 
                are happy to work with any product of your choice if you are not satisfied with the products listed below. 
                If you are interested in seeing physical samples of our preferred manufacturers’ products, please contact us.
                </Typography>
                <Flex>
                    { cards } 
                </Flex>
            </Paper>
        )
    }
}

export default withStyles(styles)(Products);
