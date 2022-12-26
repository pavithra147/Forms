import { Component } from '@angular/core';
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
   userDetails = new User("Pavi","abc@gmail.com",8987349329);
}
