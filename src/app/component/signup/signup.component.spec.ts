import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      declarations: [SignupComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require valid email', () => {
    component.signupForm.setValue({
      fullName:"",
      email: "",
      password:"",
      mobileNo:""
    });
    expect(component.signupForm.valid).toEqual(false);

  })

  it('should be valid if form value is valid', () => {
    component.signupForm.setValue({
      fullName:"Sandipan Kanade",
      email: "sandipankanade08@gmail.com",
      password:"Sandip@1234",
      mobileNo:"9822726196"

    });
    expect(component.signupForm.valid).toEqual(true);
  })
 it('should mark email is invalid when it has no value',()=>{
   const ctrl = component.signupForm.get('email');

   ctrl?.setValue(null);
   fixture.detectChanges();

   expect(ctrl?.invalid).toBeTruthy();
 }); 

 it('should mark email as valid when it has value ',()=>{
   const ctrl = component.signupForm.get('email');

   ctrl?.setValue('test');
   fixture.detectChanges();

   expect(ctrl?.valid).toBeTruthy();
 })






  
});

