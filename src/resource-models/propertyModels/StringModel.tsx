import {StringInput} from "../../generators/forms/inputs/StringInput";
import {SinglePropertyModel} from "./SinglePropertyModel";
import StringShow from "../../generators/fields/outputs/StringShow";
import React from "react";
import {InputOnChangeHandler} from "../PropertyModel";
import {SingleSetInputFieldProps} from "../models/SetInputFieldProps";
import {PropertyFieldConfiguration} from "../configurations/PropertyFieldConfiguration";


export class StringModel extends SinglePropertyModel{

    setInputField(props: SingleSetInputFieldProps, configuration?:PropertyFieldConfiguration): React.ReactElement<any, any> | null {
        const {inputHandler} = props;
        const propsWithModel: StringInput = {...props, onClick:inputHandler}
        return StringInput(propsWithModel);
    }

    getInputOnChangeHandler({formValue, setFormValue}:InputOnChangeHandler){
        return (vars:any)=>{
            const target = vars.target;
            let value = target.value;
            const name = target.id;
            setFormValue( formValue.updateFormValue(name, value));
        }
    }

    setOutputField(props: SingleSetInputFieldProps, configuration?: PropertyFieldConfiguration ): React.ReactElement<any, any> | null {
        return <StringShow {...props} />
    }

    getRecord(jsonValue: any): any {
        return jsonValue
    }
}