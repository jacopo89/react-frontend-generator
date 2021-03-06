import React, { DetailedReactHTMLElement } from "react";
import { FormValue } from "../formvalue/FormValue";
import { SinglePropertyModel } from "../propertyModels/SinglePropertyModel";
import { EmbeddedMultipleSetInputFieldProps, EmbeddedSingleSetInputFieldProps, SingleSetInputFieldProps } from "./SetInputFieldProps";
import { Record } from "../Record";
import { EmbeddedMultipleModel } from "../propertyModels/EmbeddedMultipleModel";
import { PropertyModelInputInterface, PropertyModelInputProps } from "./PropertyModelInputProps";
import { EmbeddedSingleModel } from "../propertyModels/EmbeddedSingleModel";
/**
 * INPUT PROPS
 */
export interface InputPropsInterface extends PropertyModelInputInterface {
    form?: React.DetailedReactHTMLElement<any, any>;
    inputElement?: DetailedReactHTMLElement<any, any>;
    refresh: () => void;
    showLabel?: boolean;
}
export declare class InputProps extends PropertyModelInputProps {
    form?: React.DetailedReactHTMLElement<any, any>;
    inputElement?: DetailedReactHTMLElement<any, any>;
    refresh: () => void;
    constructor(props: InputPropsInterface);
}
/**
 *  SINGLE INPUT PROPS
 */
export interface SingleInputPropsInterface extends InputPropsInterface {
    inputHandler: (vars: any) => void;
    value: any;
    label: string;
    formValue: FormValue;
}
export declare class SingleInputProps extends InputProps {
    formValue: FormValue;
    model: SinglePropertyModel;
    constructor(props: SingleInputPropsInterface);
    handleForSet(): SingleSetInputFieldProps;
}
/**
 * EMBEDDED SINGLE INPUT PROPS
 */
export interface EmbeddedSingleInputPropsInterface extends InputPropsInterface {
    formValue: FormValue;
    model: EmbeddedSingleModel;
}
export declare class EmbeddedSingleInputProps extends InputProps {
    formValue: FormValue;
    record: Record | undefined;
    model: EmbeddedSingleModel;
    constructor(props: EmbeddedSingleInputPropsInterface);
    handleForSet(): EmbeddedSingleSetInputFieldProps;
}
/**
 * EMBEDDED MULTIPLE INPUT PROPS
 *
 * */
export interface EmbeddedMultipleInputPropsInterface extends InputPropsInterface {
    formValue: FormValue;
    record: Map<number, Record>;
    model: EmbeddedMultipleModel;
}
export declare class EmbeddedMultipleInputProps extends InputProps {
    formValue: FormValue;
    record: Map<number, Record>;
    model: EmbeddedMultipleModel;
    constructor(props: EmbeddedMultipleInputPropsInterface);
    handleForSet(): EmbeddedMultipleSetInputFieldProps;
}
