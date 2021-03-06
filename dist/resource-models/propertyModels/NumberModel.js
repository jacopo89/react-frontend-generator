import { SinglePropertyModel } from "./SinglePropertyModel";
import NumberShow from "../../generators/fields/outputs/NumberShow";
import NumberInput from "../../generators/forms/inputs/NumberInput";
export class NumberModel extends SinglePropertyModel {
    setInputField(props) {
        return NumberInput(Object.assign(Object.assign({}, props), { onClick: props.inputHandler }));
    }
    getInputOnChangeHandler({ formValue, setFormValue }) {
        return (vars) => {
            const target = vars.target;
            let value = target.value;
            const name = target.name;
            console.log("formvalue in input", formValue);
            setFormValue(formValue.updateFormValue(name, parseInt(value)));
        };
    }
    setOutputField(props) {
        return NumberShow(props);
    }
    getRecord(jsonValue) {
        return jsonValue;
    }
}
