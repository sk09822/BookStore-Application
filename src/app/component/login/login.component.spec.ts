import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthguardService } from 'src/app/services/authguardservice/authguard.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;            
  let fixture: ComponentFixture<LoginComponent>;

  let authServiceSpy = jasmine.createSpyObj(' AuthguardService ',['login']);
  authServiceSpy.login.and.returnValue(of());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ LoginComponent ],
      providers:[

         {
           provide: AuthguardService ,useValue:authServiceSpy
         }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should allow user to login', () =>{
    const formData ={
      "email":"sandipankanade08@gmail.com",
      "password":"Sandip@1234"

    };
    component.loginForm.setValue(formData);
    component.onSubmit();

    expect(authServiceSpy.login).not.toHaveBeenCalledWith(formData.email, formData.password);
    
  })

  


  it('should not allow user to log in',()=>{
    const formData = {
      "email": "invalid",
      "password":"Sandip@1234"

    };

    component.loginForm.setValue(formData);
    component.onSubmit();


    expect(component.loginForm.invalid).toEqual(false);
    expect(authServiceSpy.login).toHaveBeenCalledTimes(0);      
  })

  it('should login form is valid',()=>{
    component.loginForm.get('email')?.setValue('sandipankanade08@gmail.com');
    component.loginForm.get('password')?.setValue('Sandip@1234');

    expect(component.loginForm.valid).toBeTruthy();

  })


  it('should render form with email and password inputs', () => {
    const element = fixture.nativeElement;

    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('#email')).toBeTruthy();
    expect(element.querySelector('#password')).toBeTruthy();
    expect(element.querySelector('button')).toBeTruthy();
  });

  it('should return model invalid when form is empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  
});
