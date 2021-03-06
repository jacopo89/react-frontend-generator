var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SubmissionError } from 'redux-form';
import { fetch } from '../dataAccess';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FEEDBACK_MESSAGE } from "../app/actions";
export function genericError(message) {
    return { type: FEEDBACK_MESSAGE, message: message, severity: "error" };
}
export function genericSuccess() {
    return { type: FEEDBACK_MESSAGE, message: "Edit Success", severity: "success" };
}
export function loadingMessage(resource, loading) {
    return { type: 'PATCH_LOADING', resource: resource, loading: loading };
}
export function success(resource, created) {
    return { type: 'PATCH_SUCCESS', resource: resource, created: created };
}
export function useEdit() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const edit = (resource, id, values, sendDispatch = true) => __awaiter(this, void 0, void 0, function* () {
        setErrors({});
        setLoading(true);
        return fetch(`/api/${resource}/${id}`, { method: 'PATCH', body: JSON.stringify(values) })
            .then(response => {
            if (sendDispatch)
                dispatch(loadingMessage(resource, false));
            setLoading(false);
            return response.json();
        })
            .then(retrieved => {
            setData(retrieved);
            if (sendDispatch)
                dispatch(genericSuccess());
            return retrieved;
        })
            .catch(e => {
            setLoading(false);
            if (e instanceof SubmissionError) {
                if (sendDispatch)
                    dispatch(genericError(e.message));
                setErrors(e.errors);
            }
            else {
                if (sendDispatch)
                    dispatch(genericError(e.message));
            }
            throw new Error(e.message);
        });
    });
    return { data, edit, errors, loading };
}
