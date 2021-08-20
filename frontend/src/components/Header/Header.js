import React from 'react';
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import useStyles from "./styles";
import canspiritLogo from "../../images/canspiritLogo.jpeg";

function Header() {
    const { root, toolbar, title, docsNo } = useStyles();
    return (
        <div className={root}>
            <AppBar position="static">
                <Toolbar className={toolbar}>
                    <div className={title}>
                        <img src={canspiritLogo} alt="Canspirit Logo" />
                    </div>
                    <Typography className={docsNo} variant="h5" component="p">20,000 &nbsp;</Typography>
                    <Typography variant="h6" component="p" color="inherit">Documents Read</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
