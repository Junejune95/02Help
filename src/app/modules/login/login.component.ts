import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted:boolean;

  constructor(private formBuilder: FormBuilder,private _route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      phoneNumber: ["", [Validators.required]],
      name: ["", [Validators.required,]],
      
    }
    );
  }

get f() { return this.loginForm.controls }

  onSubmit(){
    this.submitted = true
    if (this.loginForm.invalid) return;
    else {
      console.log("fine anyway");
            this._route.navigateByUrl("O2Help/home");
    }
  }

}
