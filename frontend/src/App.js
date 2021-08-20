import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Typography, Button } from "@material-ui/core";
import { DropzoneArea } from 'material-ui-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import useStyles from "./styles";
import Header from "./components/Header/Header";
import Promises from './components/Promises/Promises';
import Footer from "./components/Footer/Footer";

function App() {
    const { heading, mainContainer, dropzone, uploadButton } = useStyles();
    const [fileArray, setFileArray] = useState([]);
    const url = "http://localhost:5000";

    useEffect(() => {
        console.log((fileArray));
    }, [fileArray]);

    async function uploadFiles() {
        const formData = new FormData();
        formData.append("file", fileArray[0]);
        const { data } = await axios.post(`${url}/upload`, formData);
        console.log(data);
    }

    return (
        <Container maxWidth={false} style={{ padding: 0 }}>
            <Header />
            <Container align="center" justify="center" className={mainContainer} maxWidth={false}>
                <Typography className={heading} variant="h4">Extract Data from PDF files for free!</Typography>
                <Typography variant="h6" style={{ fontWeight: 700, }}>Canspirit PDF Extractor – the best solution for conveniently extracting data from PDFs</Typography>
                <DropzoneArea
                    filesLimit={1}
                    maxFileSize={10240000}
                    dropzoneText={'Upload PDF here'}
                    dropzoneClass={dropzone}
                    showPreviewsInDropzone={true}
                    onChange={(fileObjs) => setFileArray(fileObjs)}
                    onDelete={(fileObj) => setFileArray([])}
                    onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
                />
                <Button
                    variant="contained"
                    size="large"
                    className={uploadButton}
                    type="submit"
                    onClick={uploadFiles}
                >
                    <CloudUploadIcon /> Upload</Button>
            </Container>
            <Promises />
            <Footer />
        </Container>
    );
}


export default App;
