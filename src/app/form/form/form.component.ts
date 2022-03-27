import { Component} from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { confirmPassword } from '../passwordConfirmation';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  isSubmited:boolean=false;
  constructor() { }

  /*ngOnInit(): void {
  }*/
  signUpForm=new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.minLength(7)]),
    lastname:new FormControl("",[Validators.required,Validators.minLength(7)]),
    email:new FormControl("",[Validators.required,Validators.minLength(10),Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(10)]),
    passwordConfirmation:new FormControl("", [Validators.required])
  },{validators:[confirmPassword()]})
  get firstname(){
    return this.signUpForm.get('firstname')
  }
  get lastname(){
    return this.signUpForm.get('lastname')
  }
  get email(){
    return this.signUpForm.get('email')
  }
  get password(){
    return this.signUpForm.get('password')
  }
  get passwordConfirmation(){
    return this.signUpForm.get('passwordConfirmation')
  }
  onSubmit=()=>{
    this.isSubmited=true;
  }
}
