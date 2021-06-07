import {SinglePropertyInputFields, SinglePropertyModel} from "./SinglePropertyModel";
import {EnumInput, getAutocompleteValuePosition} from "../../generators/forms/inputs/EnumInput";
import SingleEnumShow from "../../generators/fields/outputs/SingleEnumShow";
import {InputOnChangeHandler} from "../PropertyModel";
import {Record} from "../Record";
import ChipGenerator from "../../generators/fields/outputs/chips/chipGenerator";
import React from "react";

interface EnumSingleInputFields extends SinglePropertyInputFields{
    options:any,
}

export class EnumSingleModel extends SinglePropertyModel{
    colorMap;
    constructor(id:string, other:any) {
        super(id, other);
        this.options = other.options;
        this.colorMap = other.colorMap;

    }

    setInputField(props: EnumSingleInputFields): React.ReactElement<any, any> | null {
        const {formValue, setFormValue, errors, value} = props;
        const valuePositionInOptions = (value!==undefined) ? getAutocompleteValuePosition(value, this.options) : -1;
        const propsWithModel = {...props, model:this, inheritedValue:valuePositionInOptions, onChange:this.getInputOnChangeHandler({formValue, setFormValue})}
        return EnumInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}: InputOnChangeHandler): (vars: any) => void {
        return (vars:any) =>{
            const [name, value] = vars;
            setFormValue( formValue.updateFormValue(name, value));
        }
    }

    setOutputField(props: any) {
        const {propertyRecord} = props
        return <ChipGenerator propertyModel={this} propertyRecord={propertyRecord} colorMap={this.colorMap}/>
    }

    getRecord(jsonValue: any): any {
        return Record.createFromJsonNoModel(jsonValue)
    }
}