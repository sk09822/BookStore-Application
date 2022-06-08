import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { QuickviewComponent } from './quickview.component';


describe('QuickviewComponent', () => {
  let component: QuickviewComponent;
  let fixture: ComponentFixture<QuickviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ QuickviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
