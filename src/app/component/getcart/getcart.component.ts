import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {
  book: any; 
  cartcount: any;
  cartbooks: any; 
  orderlist: any = []; 
 
  step = 0;
  customerForm!: FormGroup;
  submitted = false;
 

  
  disabled: boolean = true;

  constructor(private books: BookService, private formbuilder: FormBuilder, private user: UserService,  private route:ActivatedRoute,private router: Router) {

  }

  ngOnInit(): void {
    this.getcartlist();
    this.customerForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],

    })
  }

  getcartlist() {
    this.books.usergetcartlist().subscribe((response: any) => {
      console.log(response);
      this.cartcount = response.result.length
      this.cartbooks = response.result;

     

    
    })
  }

  
 



  removecartitem(book: any) {
    this.books.userremovecartitem(book._id).subscribe((response: any) => {
      console.log(response);

      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./'], {
        relativeTo:this.route
      })

    })
    this.getcartlist();
  }

  onSubmit() {
    this.submitted = true;


    if (this.customerForm.valid) {
      console.log(this.customerForm.value);

      let reqData = {
        addressType: "Home",
        fullAddress: this.customerForm.value.address,
        city: this.customerForm.value.city,
        state: this.customerForm.value.state,

      }
      this.user.useraddress(reqData).subscribe((response: any) => {
        console.log(response);

      })
    }
    else {
      console.log("Please fill the form");
    }

  }

  ordersummary() {

     {

      this.cartbooks.forEach((element: any) => {  
        console.log(element);
        this.orderlist.push({     
          "product_id": element.product_id._id,  
          "product_name": element.product_id.bookName,
          "product_quantity": element.product_id.quantityToBuy,
          "product_price": element.product_id.price
        })
      });
      let data = {
        "orders": this.orderlist
      }

      this.books.usercheckout(data).subscribe((response: any) => {
        console.log(response);


      })
      this.router.navigateByUrl("/dashboard/orderplacedsuccessfully")
    }
  }


  setStep(index: number) {
    this.step = index;
  }
  
  nextStep() {
    this.step++;
  }
  

}
