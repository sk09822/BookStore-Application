import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {

    this.signupForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobileNo: ['', Validators.required],
     
    
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.valid) {
      console.log(this.signupForm.value);

      let payload = {   
        fullName: this.signupForm.value.fullName,
        email : this.signupForm.value.email,
        password: this.signupForm.value.password,
        phone : this.signupForm.value.mobileNo
        
      }
       
        this.user.userSignup(payload).subscribe((response: any) => {   
          console.log(response)
;

        })
      }
  }


}


