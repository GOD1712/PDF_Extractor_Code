import React from 'react';
import { Container, Typography, Grid } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import useStyles from "./styles";

function Footer() {
    const { mainFooter, icon } = useStyles();
    return (
        <Container align="center" className={mainFooter} maxWidth={false}>
            <Grid container style={{ padding: "0 8%" }}>
                <Grid item xs={6} align="left">
                    <Typography variant="body1">Copyright © 2020 Canspirit, Inc. | All Rights Reserved.</Typography>
                </Grid>
                <Grid item xs={6} align="right">
                    <FacebookIcon className={icon} />
                    <TwitterIcon className={icon} />
                    <YouTubeIcon className={icon} />
                    <LinkedInIcon className={icon} />
                    <EmailIcon className={icon} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer;
