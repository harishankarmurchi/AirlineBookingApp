import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/Login';
import { ServiceEndpoints } from 'src/app/models/ServiceEndpoints';
import { Token } from 'src/app/models/Token';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData:Login|any
  loginForm: FormGroup | any;
  title = 'material-login';
  constructor(
    private router:Router,
    private _service:HttpserviceService
  ) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
   }

   onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    this.loginData=this.loginForm.value;
    this._service.POST(ServiceEndpoints.LOG_IN,false,this.loginData)
    .subscribe(
      (result:Token) =>{
         localStorage.setItem("token",result.token);
         localStorage.setItem("refreshToken",result.refreshToken);
         this.router.navigate(['/search'])
      }
    )
    
  }

  ngOnInit(): void {
  }

}
