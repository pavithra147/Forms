import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  //two-way data binding
  //from model to template form
   //To create instance for constructor of class user (model)
   userDetails = new User("","abc@gmail.com",8987349329,'default');
Email: any;

   onSubmit(userForm: NgForm){ 
    console.log(userForm.value);
   }
   categories=['Male','Female','Others'];
   categoryHasError=true;
   validateCategory(value:any){
    if (value=='default'){
      this.categoryHasError=true;
 }
 else{
  this.categoryHasError=false;
 }

   }
   
}
