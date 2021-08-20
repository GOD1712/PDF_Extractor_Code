import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        color: "#000000",
        flexGrow: 1,
    },
    toolbar: {
        padding: "0 10%",
        backgroundColor: "#fff",
        color: "#000",
        [theme.breakpoints.down("sm")]: {
            padding: "0 3%",
        },
    },
    title: {
        flexGrow: 1,
        [theme.breakpoints.down("xs")]: {
            marginRight: "7%",
        },
    },
    docsNo: {
        fontWeight: "bold",
        [theme.breakpoints.down("xs")]: {
            marginRight: "2%",
        },
    },
}));