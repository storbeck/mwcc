import React, { Component } from "react";
import video_src from "../assets/home.mp4";
import styled from "styled-components";
import { Typography, Button} from "@material-ui/core";
import { openForm } from "../actions/formActions";
import { connect } from "react-redux";

const Wrapper = styled.div`
    width: 100%;
    height: 600px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;

    button {
        margin-top: 50px;
    }
`;

const VideoWrapper = styled.div`
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: -1000;
    filter: brightness(70%) blur(5px);
`;

const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-70%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1000;
`;

const Tagline = styled.div`
    color: white;
`;

const mapStateToProps = (state) => ({

})

class CoverConnect extends Component {
    componentDidMount() {
        let video = document.getElementById("cover_video");

        video.play();
    }
    render() {
        return (
            <Wrapper>
                <VideoWrapper>
                    <Video id="cover_video" autoplay loop muted>
                        <source src={video_src} type="video/mp4" />
                    </Video>
                </VideoWrapper>
                <Tagline>
                    <Typography variant="display2" color="inherit" paragraph={true}>Mays-Wilson Construction Company</Typography>
                    <Typography variant="subtitle1" color="inherit">
                    We are a family-owned and operated company and it is our goal to provide our customers with<br />
                    outstanding service and quality products. We operate with family and home in mind, knowing a<br/>
                    house is not just a house, but a home where love and family grows. It is our dedication to care<br/>
                    for our customers’ homes as if they were our own.<br/>
                    </Typography>
                </Tagline>
                <Button size="large" variant="outlined" color="inherit" onClick={() => this.props.dispatch(openForm())}>Schedule a Free Inspection</Button>
            </Wrapper>
        )
    }
}

const Cover = connect(mapStateToProps)(CoverConnect);
export default Cover;
