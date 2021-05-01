import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from 'react-router-dom';
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { useGetResourceModel } from "../../resource-models/modelsRegistry";
import { useGetOne } from "../../redux/actions/verbs/get_one";
import { ShowContent } from "../fields/ShowContent";
export function Show() {
    const { urlResourceName, id } = useParams();
    const initialValue = useRef({});
    const resourceModel = useGetResourceModel(urlResourceName);
    const { model, resourceName, showPage } = resourceModel;
    const [record, setRecord] = useState(initialValue.current);
    const { data: downloadedRecord, getOne } = useGetOne();
    const dispatch = useDispatch();
    const goToEdit = () => dispatch(push(`/${resourceName}/${id}/edit`));
    const [genericShowRender, setGenericShowRender] = useState(_jsx("div", {}, void 0));
    useEffect(() => {
        getOne(resourceName, id);
    }, [resourceName, id]);
    useEffect(() => {
        if (downloadedRecord !== undefined) {
            setRecord(downloadedRecord);
        }
    }, [downloadedRecord]);
    const showFormProps = useMemo(() => {
        return {
            model: model,
            resourceName: resourceName,
            record: record
        };
    }, [model, record, resourceName]);
    useEffect(() => {
        if (record !== initialValue.current) {
            if (showPage) {
                setGenericShowRender(React.cloneElement(showPage, showFormProps));
            }
            else {
                setGenericShowRender(_jsx(Grid, Object.assign({ container: true, spacing: 2 }, { children: _jsx(ShowContent, { record: record, resourceName: resourceName, model: model }, void 0) }), void 0));
            }
        }
    }, [record]);
    return genericShowRender;
}