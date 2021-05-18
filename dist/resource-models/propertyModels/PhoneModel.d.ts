/// <reference types="react" />
import { SinglePropertyInputFields, SinglePropertyModel } from "./SinglePropertyModel";
export declare class PhoneModel extends SinglePropertyModel {
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): any;
    setOutputField(props: any): React.ReactElement<any, any> | null;
}
