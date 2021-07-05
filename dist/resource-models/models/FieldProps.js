export class FieldProps {
    constructor({ model, record, formValue, setFormValue, lockedFormValue, errors, submitHandler, partialSubmitHandler, referencesMap, refreshReferencesMap, refresh }) {
        this.model = model;
        this.record = record;
        this.formValue = formValue;
        this.setFormValue = setFormValue;
        this.lockedFormValue = lockedFormValue;
        this.errors = errors;
        this.submitHandler = submitHandler;
        this.partialSubmitHandler = partialSubmitHandler;
        this.referencesMap = referencesMap;
        this.refreshReferencesMap = refreshReferencesMap;
        this.refresh = refresh;
    }
}
