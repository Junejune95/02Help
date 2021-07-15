import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { CommonService } from "@core/services/common.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public submitted: boolean;
  private subscription: Subscription;
  public isLoading:boolean=false;

  constructor(private formBuilder: FormBuilder, private _route: Router, private _service: CommonService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      phoneNumber: ["", [Validators.required]],
      name: ["", [Validators.required,]],

    }
    );
  }

  get f() { return this.loginForm.controls }

  onSubmit() {
    this.submitted = true
    if (this.loginForm.invalid) return;
    else {
      console.log("fine anyway");
      this.isLoading=true;
      let user = {
        "name": this.loginForm.value.name, 
        "phone":this.loginForm.value.phoneNumber,
      };
      this.subscription = this._service.onLogin(user)
        .subscribe((res:any) => {
          this._route.navigateByUrl("O2Help/home");
          console.log(res.token)
          localStorage.setItem("token",res.token)
          this.isLoading=false;
        })

    }
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}
