import { SinglePropertyModel } from "./SinglePropertyModel";
import React from "react";
import { InputOnChangeHandler } from "../PropertyModel";
import { SingleSetInputFieldProps } from "../models/SetInputFieldProps";
export declare class SingleFileModel extends SinglePropertyModel {
    setInputField(props: SingleSetInputFieldProps): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: InputOnChangeHandler): any;
    setOutputField(props: any): React.ReactElement<any, any> | null;
    getRecord(jsonValue: any): any;
}
