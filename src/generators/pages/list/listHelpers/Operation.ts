import React from "react";

interface OperationProps{
    color:string;
    text:string;
    icon?:React.DetailedReactHTMLElement<any, any>;
    onClick: (arg: any)=> void
    visibility?: (arg: any)=> boolean,
    requiresConfirmation?: boolean
}

export class Operation{
    color:string;
    text:string;
    icon?:React.DetailedReactHTMLElement<any, any>;
    onClick: (arg: any)=> void
    visibility: (arg: any)=> boolean
    requiresConfirmation: boolean

    constructor({color, text, icon,onClick, visibility = (arg)=> true, requiresConfirmation = false }:OperationProps) {
        this.color = color;
        this.text = text;
        this.icon = icon;
        this.onClick = onClick;
        this.visibility = visibility;
        this.requiresConfirmation = requiresConfirmation;
    }
}