import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomServiceService {

  constructor() { }

  MatchPassword(password:string,confirmPassword:string){
    return(formGroup:FormGroup)=>{
      const passwordControl=formGroup.controls[password];
      const confirmPasswordControl=formGroup.controls[confirmPassword];
      if (confirmPasswordControl.errors && !confirmPasswordControl.errors?.['passwordMismatch']) {
          return null;
        }
        let error: ValidationErrors | null;
      if(passwordControl.value !== confirmPasswordControl.value){
        error = {passwordMismatch: true };
      }
      else{
       error=null;
      }
     
      confirmPasswordControl.setErrors(error);
      return error;
  }
}
}
