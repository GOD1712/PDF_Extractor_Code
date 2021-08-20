import { makeStyles, withTheme } from "@material-ui/core";

const imgUrl = "https://www.transparenttextures.com/patterns/diamond-upholstery.png";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: "2.5rem",
        fontWeight: 700,
        margin: "20px 0",
    },
    mainContainer: {
        backgroundColor: "#138c7f",
        backgroundImage: `url(${imgUrl})`,
        color: "#fff",
        fontFamily: "Titillium Web, sans-serif",
        padding: "30px 24%",
        margin: 0,
        [theme.breakpoints.down("sm")]: {
            padding: "30px 10%",
        },
    },
    dropzone: {
        margin: "50px 0 20px",
        backgroundColor: "transparent",
        borderColor: "#fff",
    },
    uploadButton: {
        backgroundColor: "#fe7600",
        color: "#fff",
    },
}));

export default useStyles;