import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/Signup';
import { ServiceEndpoints } from 'src/app/models/ServiceEndpoints';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { Token } from 'src/app/models/Token';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  roles:string[]|any
  registerUser:Signup|any
  registerForm: FormGroup | any;
  constructor(
    private router:Router,
    private _service:HttpserviceService,
    private _interaction:InteractionService
  ) {
    this.registerForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]),
      name:new FormControl('',[Validators.required]),
      role: new FormControl('',[Validators.required])
    });
   }

   onSubmit(){
   
    if(!this.registerForm.valid){
      return;
    }
    this.registerUser=this.registerForm.value;
    this._service.POST(ServiceEndpoints.REGISTER,false,this.registerUser)
    .subscribe(
      (result:Token) =>{
         localStorage.setItem("token",result.token);
         localStorage.setItem("refreshToken",result.refreshToken);
         localStorage.setItem("role",result.role);
         this._interaction.onlogin();
         this.router.navigate(['/search'])
      }
    )
    
  }


  ngOnInit(): void {
    this._service.get(ServiceEndpoints.GET_ROLES)
    .subscribe((res:string[]) =>{
      console.log(res);
      this.roles=res;
    })
    console.log(this.roles);
  }

}
