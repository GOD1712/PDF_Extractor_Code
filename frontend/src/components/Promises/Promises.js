import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import useStyles from "./styles";

function Promises() {
    const { gridContainer, gridItem, icon, featureTitle } = useStyles();
    return (
        <Container align="center">
            <Grid container className={gridContainer} alignItems="center">
                <Grid item className={gridItem} md={4}>
                    <VerifiedUserOutlinedIcon className={icon} />
                    <Typography className={featureTitle} variant="h6">Safe and secure</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                </Grid>
                <Grid item className={gridItem} md={4}>
                    <QueryBuilderOutlinedIcon className={icon} />
                    <Typography className={featureTitle} variant="h6">Quick and easy</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                </Grid>
                <Grid item className={gridItem} md={4}>
                    <MonetizationOnOutlinedIcon className={icon} />
                    <Typography className={featureTitle} variant="h6">Free of Cost</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Promises;
