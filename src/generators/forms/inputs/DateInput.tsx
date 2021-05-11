import {TextValidator} from "react-material-ui-form-validator";
import React, {useEffect, useState} from "react";
import {getDateInputFormat} from "../../../utils/timeUtils";
import {DateModel} from "../../../resource-models/propertyModels/DateModel";

export interface DateInput{
    model: DateModel;
    onClick: (e: any, value: any)=>void;
    value: any;
    hasError:boolean;
    id?:string,
    name?:string,
    label?: string;
    errorMessage?:string;
    adornment?: any;
}


export default function ({model,name = model.id, onClick, value, label = model.label}:DateInput){
    const [localValue, setLocalvalue] = useState(getDateInputFormat());

    const localChange = (event:any) => {
        const target = event.target;
        let value = target.value;
        const name = target.id;
        onClick(name, value);


    }

    useEffect(()=>{
        if(value===undefined){
            const nwValue = getDateInputFormat();
            setLocalvalue(nwValue);
        }else{
            setLocalvalue(value);
        }

    },[value])


    return <TextValidator
        name={name}
        label={label}
        onChange={localChange}
        value={localValue}
        style={{width: "100%"}}
        type="date"
    />
}