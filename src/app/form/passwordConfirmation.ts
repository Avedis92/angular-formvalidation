import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";

export function confirmPassword():ValidatorFn{
    return (formGroup:AbstractControl):ValidationErrors|null=>{
        const control=formGroup.get('passwordConfirmation');
        const matchingControl=formGroup.get('password');

        if(control?.value!==matchingControl?.value){
            control?.setErrors({passwordMatch:true})
            return {passwordMatch:true}
        }
        else {
            control?.setErrors(null)
            return null;
    }
}
    
}