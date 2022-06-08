import { HttpClientModule } from '@angular/common/http';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchbookPipe } from '../pipe/searchbook.pipe';
import { GetallbooksComponent } from './getallbooks.component';

describe('GetallbooksComponent', () => {
  let component: GetallbooksComponent;
  let fixture: ComponentFixture<GetallbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule,NgxPaginationModule ],

      declarations: [ GetallbooksComponent,SearchbookPipe ],
      providers:[]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
