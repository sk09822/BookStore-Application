import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';

import { DataService } from 'src/app/services/dataservice/data.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  book: any;

  BookList: any[] = [];

  countbooks: any;
  totalLength: any;
  page: number = 1;

  bookid: any;
  searchword: any;
  cartbooks: any;
  cartBooksIdList: any[] = [];

  constructor(private books: BookService, private activatedroute: ActivatedRoute, private route: Router, private dataservice: DataService) { }

  ngOnInit(): void {
    this.dataservice.receivedData.subscribe((response: any) => {
      console.log(response)

      this.searchword = response;
      console.log(this.searchword);




    });

    this.bookid = this.activatedroute.snapshot.paramMap.get("bookId");
    console.log(this.bookid);

    this.getcartlist();
    this.getallbooks();




  }

  getallbooks() {

    this.books.usergetallbooks().subscribe((response: any) => {
      console.log(response.result);
      this.BookList = response.result;
      



      this.BookList.forEach((element: any) => {
        console.log(element._id);

        console.log(this.cartBooksIdList.indexOf(element._id));

        if (this.cartBooksIdList.indexOf(element._id) >= 0) {
          element.isAddedToCart = true;
        }
      });
    });
  }
  getcartlist() {

    this.books.usergetcartlist().subscribe((response: any) => {
      console.log(response);

      this.cartbooks = response.result;
      response.result.forEach((element: any) => {
        this.cartBooksIdList.push(element["product_id"]._id)
      })
    })


  }


  quickview(book: any) {

    localStorage.setItem('bookId', book._id);
    this.route.navigateByUrl('/dashboard/quickview/' + book._id)


  }


  addtocart(book: any) {
    this.books.useraddtobag(book._id).subscribe((response: any) => {
      console.log(response);

      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate(['./'], {
        relativeTo: this.activatedroute
      })

    })

  }
  addtowishlist(book: any) {
    this.books.useraddtowishlist(book._id).subscribe((response: any) => {
      console.log(response);


      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate(['./'], {
        relativeTo: this.activatedroute
      })
    })

  }






  lowtohigh() {
    this.BookList = this.BookList.sort((low: any, high: any) => low.price - high.price);
  }
  hightolow() {
    this.BookList = this.BookList.sort((low: any, high: any) => high.price - low.price);
  }
  newestarrivals() {
    this.BookList.reverse();
  }
}

