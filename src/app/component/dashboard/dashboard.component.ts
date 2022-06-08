import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';
import { DataService } from 'src/app/services/dataservice/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  
  badgecount: any; 
 

  constructor(private route: Router, private books: BookService, private dataservice: DataService) {
   

  }

  ngOnInit(): void {
    this.getcartcountforbadge();
    

  }
  bookstore() {
    this.route.navigateByUrl("/dashboard/getallbooks")
  }

  cart() {

    this.books.usergetcartlist().subscribe((response: any) => { 
      console.log(response.result);
    })
    this.route.navigateByUrl("/dashboard/getcart")
  }

  getcartcountforbadge() {  

    this.books.usergetcartlist().subscribe((response: any) => {
      console.log(response.result);
      this.badgecount = response.result.length
    })
  }


  wishlist() {
    this.route.navigateByUrl("/dashboard/getwishlist")
  }


  Logout() {
    
    this.route.navigateByUrl('/login')
  }

  searchBook(search: any) {  
    console.log(search);  
    this.dataservice.sendData(search) 
  }

}
