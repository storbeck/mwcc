import React from "react";
import { connect } from "react-redux";
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core"
import {Phone, CalendarToday} from "@material-ui/icons";
import styled from "styled-components";
import { setTab } from "../actions/tabActions";
import { openForm } from "../actions/formActions";


const Actions = styled.div`
    display: flex;
    button {
        margin-right: 20px;
    }
`;

const mapStateToProps = (state) => ({
    active_tab: state.tab.active
})

class NavBar extends React.Component {

    setActiveTab = (event, value) => {
        this.props.dispatch(setTab(value));
    }

    render() {
        return (
            <div>
                <AppBar position="static" color="default" style={{backgroundColor: "white"}}>
                    {/* <Toolbar style={{backgroundColor: "#666", color: "white"}}>
                        <Actions>
                            <Button variant="outlined" color="inherit" size="small">
                                <Phone style={{marginRight: 10}} />
                                Call us at (614) 532-3026
                            </Button>
                            <Button variant="outlined" color="inherit" size="small">
                                <CalendarToday style={{marginRight: 10}} />
                                Schedule Free Inspection
                            </Button>
                        </Actions>
                    </Toolbar> */}
                    <Toolbar style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                        <div>
                            <img style={{float: "left", marginRight: 20}} alt="MWCC Logo" src="https://mayswilson.com/wp-content/uploads/2019/01/logo-1.png" />
                            <div style={{display: "flex", flexDirection: "column", paddingRight: 30}}>
                                <Typography variant="h6" color="inherit">
                                    Mays-Wilson Construction Company
                                </Typography>
                                <Typography variant="caption" color="inherit">
                                    Your Local Storm Damage Experts
                                </Typography>
                            </div>
                        </div>
                        {/* <Tabs
                            value={this.props.active_tab}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.setActiveTab}>
                            <Tab label="About Us" />
                            <Tab label="Why Us" />
                            <Tab label="Products" />
                            <Tab label="Contact" />
                        </Tabs> */}
                        <Actions>
                            <Button variant="outlined" color="inherit" size="small"
                                onClick={() => window.location='tel:6145323026'}>
                                <Phone style={{marginRight: 10}} />
                                Call us at (614) 532-3026
                            </Button>
                            <Button variant="outlined" color="inherit" size="small" onClick={() => this.props.dispatch(openForm())}>
                                <CalendarToday style={{marginRight: 10}} />
                                Schedule Free Inspection
                            </Button>
                            <Button  
                                onClick={() => {
                                    Object.assign(document.createElement('a'), {
                                        target: '_blank',
                                        href: 'https://www.facebook.com/MaysWilsonC/',
                                      }).click();
                                }}
                                variant="outlined" style={{minWidth: "auto", width: 50}} color="inherit" size="small">
                                <i className="fa fa-facebook"></i>
                            </Button>
                        </Actions>
                    </Toolbar>
                </AppBar>

            </div>
        )
    }
}

export default connect(mapStateToProps)(NavBar)
