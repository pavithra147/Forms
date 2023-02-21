import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CustomServiceService } from './custom-service.service';

@Directive({
  selector: '[appDirectivesmatchPassword]',
  providers:[{provide:NG_VALIDATORS, useExisting:DirectivesmatchPasswordDirective, multi:true}]
})
export class DirectivesmatchPasswordDirective implements Validator{
@Input('appDirectivesmatchPassword') matchPassword:string[]=[]
  constructor(private customService:CustomServiceService) { }

  validate(formGroup:FormGroup): ValidationErrors |null {
    return this.customService.MatchPassword(this.matchPassword[0],this.matchPassword[1]) (formGroup);
    
  }

}
