import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  bookdata: any;

  bookid: any;  

  feedbackArray: any;
  feedback: any;
  value: any;

  
 

  constructor(private books: BookService, private activatedroute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {

  

    this.bookid = this.activatedroute.snapshot.paramMap.get("bookId"); 
    console.log(this.bookid);

    this.getbook();
    this.getfeedback();
  }
  getbook() {

    this.books.usergetallbooks().subscribe((response: any) => {  
      response.result.forEach((element: any) => {  

        if (element._id == this.bookid) {  
          this.bookdata = element;  
        }

      });

    });
  }



  

  addtocart() {
    
    this.books.useraddtobag(this.bookid).subscribe((response: any) => {
      console.log(response);

    })
    this.route.navigateByUrl('/dashboard/getcart')
  }




  addtowishlist() {
    this.books.useraddtowishlist(this.bookid).subscribe((response: any) => {
      console.log(response);

    })
    this.route.navigateByUrl('/dashboard/getwishlist')
  }





  addfeedback() {
    let req = {
      comment: this.feedback,
      rating: this.value
    }
    this.books.useraddfeedback(this.bookid, req).subscribe((response: any) => {
      console.log(response);

    })

  }





  getfeedback() {
    this.books.usergetfeedback(this.bookid).subscribe((response: any) => {
      console.log(response.result);
      this.feedbackArray = response.result;
      this.feedbackArray.reverse();

    })

  }






  getShortName(fullName: any) {
    return fullName.split(' ').map((n: any) => n[0]).join('');
  }

  

 
}
