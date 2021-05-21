import React from "react";
import {Link} from "@material-ui/core";

export default function ReferenceShow({propertyModel,propertyRecord}:any){
    const id = propertyRecord.getPropertyRecordValue("id");
    const value = propertyRecord.getPropertyRecordValue(propertyModel.optionText);
    return propertyRecord ? <Link color="secondary" href={`/${propertyModel.resourceName}/${id}/show`}>{value}</Link> :<></>
}