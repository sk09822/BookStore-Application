import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/services/authguardservice/authguard.service';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  submitted = false;
  users= '1'
  
  

  constructor(private formbuilder: FormBuilder, private user: UserService, private route: Router,private authService:AuthguardService) { }

  ngOnInit(): void {
    localStorage.setItem('SeesionUser',this.users) 
    

    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
     

    })
    
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      let payload = {   

        email: this.loginForm.value.email,   
        password: this.loginForm.value.password

       

      }

     
        this.user.userlogin(payload).subscribe((response: any) => {    
          console.log(response)

          

          localStorage.setItem('token', response.result.accessToken); 

          

          

          this.route.navigateByUrl("/dashboard")  
          
        
        })

        
 
        
      } 
      
          
      }
      
    } 


