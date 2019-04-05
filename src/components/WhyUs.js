import React, { Component } from "react";

import { Paper, Typography } from "@material-ui/core";

class WhyUs extends Component {
    render() {
        return (
            <Paper style={{padding: 50, boxShadow: "none", borderRadius: 0}}>
                <Typography variant="h4" style={{marginBottom: 20}}>Why Us</Typography>
                <Typography variant="body1" style={{display: "block", marginBottom: 10}}>
                    Columbus is a beautiful and diverse city. We would love nothing more than to serve the hard-working people of 
                    Columbus by aiding in home improvement projects across central Ohio. It is our goal to make Columbus more safe, 
                    affordable, and beautiful. With our dedication to our values of integrity, quality, and customer focus, we will provide 
                    each and every homeowner with a remodel, renovation, or repair, but most important, a home to be proud of.
                </Typography>
                <Typography variant="body1" style={{display: "block", marginBottom: 10}}>
                    We realize how difficult it can be when your home is affected by hail, storms, and wind. Our goal is to make 
                    it as easy as possible for you to obtain the utmost in timely and quality repairs. <strong>24/7 emergency repair consultations and services.</strong>
                </Typography>
            </Paper>
        )
    }
}

export default WhyUs;
