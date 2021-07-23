import React, { useState, useEffect } from "react";

import axios from 'axios'

export default function UploadFiles({parentCallback}) {
    const [previewFile, setPreviewFile] = useState()
    const [file, setFile] = useState()

    const fileSelectHandler = (e) => {
        const selectedFile = e.target.files[0]
        const reader = new FileReader()
        reader.onload = () => {
            if(reader.readyState === 2) {
                setPreviewFile(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
        fileHandler(selectedFile)
    }

    const fileHandler = (selectedFile) => {
        const formData = new FormData()
        // formData.append("name", selectedFile.name);
        formData.append("file", selectedFile);
        console.log(selectedFile)
        setFile(selectedFile)
    }

    useEffect(() => {   
        parentCallback(file)
    }, [file]);

    return (
        <div>
            <div className="img-preview-container">
                <img src={previewFile} id="img" alt="" />
            </div>
            <input type="file" name="bukti-transfer" id="input-files" accept="image/*" onChange={(e) => fileSelectHandler(e)} />
            <div className="label-input-files mb-5">
                <label htmlFor="input-files" className="img-upload">{ previewFile ? "Ganti Foto" : "Tambah Foto"}</label>
            </div>
        </div>
    )
}