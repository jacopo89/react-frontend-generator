/// <reference types="react" />
import { SinglePropertyInputFields, SinglePropertyModel } from "./SinglePropertyModel";
export declare class TextareaModel extends SinglePropertyModel {
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): any;
    getOutputField(props: any): React.ReactElement<any, any> | null;
}
