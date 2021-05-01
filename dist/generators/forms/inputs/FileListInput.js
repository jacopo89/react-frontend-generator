var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import CustomDeleteButton from "../../../rendering/components/buttons/CustomDeleteButton";
import { createArrayFromMap, createMapFromArray } from "../../../utils/mapUtils";
import { useDeleteFile } from "../../../redux/actions/verbs/deleteFile";
import ImageGrid from "../../../rendering/components/others/ImageGrid";
export default function FileListInput(_a) {
    var { files, resourceName, resourceId, multiple = false, onChange, id, partialSubmitHandler } = _a, rest = __rest(_a, ["files", "resourceName", "resourceId", "multiple", "onChange", "id", "partialSubmitHandler"]);
    const { remove } = useDeleteFile(resourceName);
    const creationTime = useRef(Date.now());
    const [uploadedLocalFiles, setUploadedLocalFiles] = useState([]);
    const [totalFiles, setTotalFiles] = useState([]);
    const [localFileListMap, setLocalFileListMap] = useState(new Map());
    useEffect(() => {
        if (files) {
            setTotalFiles(files);
            const formValueMap = createMapFromArray(files);
            setLocalFileListMap(new Map(formValueMap));
        }
    }, [files]);
    useEffect(() => {
        if (files) {
            setTotalFiles([...files, ...prepareImagesForRequest(uploadedLocalFiles)]);
        }
    }, [uploadedLocalFiles]);
    const prepareImagesForRequest = (uploadedFiles) => {
        if (!uploadedFiles.length)
            return [];
        const newDataFiles = [];
        uploadedFiles.forEach((file) => {
            const newFile = {
                base64: file.data,
                title: file.file.name,
                filename: file.file.name,
            };
            newDataFiles.push(newFile);
        });
        return newDataFiles;
    };
    const deleteForm = (key) => {
        const deleted = localFileListMap.delete(key);
        if (key < creationTime.current) {
            remove(resourceId, id, key);
            setLocalFileListMap(new Map(localFileListMap));
        }
        onChange(id, createArrayFromMap(localFileListMap));
    };
    const filesList = createArrayFromMap(localFileListMap).map((file, index) => {
        file.actionIcon = _jsx(CustomDeleteButton, { icon: true, onClick: () => deleteForm(file.id) }, void 0);
        return file;
    });
    const addFile = (files) => {
        setUploadedLocalFiles([...uploadedLocalFiles, ...files]);
    };
    const removeFile = (file, index) => {
        let files = [...uploadedLocalFiles];
        files.splice(index, 1);
        setUploadedLocalFiles(files);
    };
    const saveImages = () => {
        partialSubmitHandler({ [id]: totalFiles }).then(response => {
            onChange(id, response[id]);
            setUploadedLocalFiles([]);
        }).catch(e => console.log(e));
    };
    const imageGridList = _jsx(ImageGrid, { images: filesList, onChange: prepareImagesForRequest, filesLimit: 10, fileObjects: uploadedLocalFiles, onAdd: addFile, onDelete: removeFile, saveImages: saveImages }, void 0);
    return _jsx(Grid, Object.assign({ container: true }, { children: _jsx(Grid, Object.assign({ md: 12, xs: 12, item: true }, { children: imageGridList }), void 0) }), void 0);
}