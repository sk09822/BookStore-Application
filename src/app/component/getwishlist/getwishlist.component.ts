import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-getwishlist',
  templateUrl: './getwishlist.component.html',
  styleUrls: ['./getwishlist.component.scss']
})
export class GetwishlistComponent implements OnInit {

  wishlistitem:any;
  countlist:any;

  constructor(private books: BookService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getwishlist();
  }

   getwishlist(){
     this.books.userwishlist().subscribe((response:any)=>{
       console.log(response);
       this.wishlistitem=response.result
       this.wishlistitem.reverse()
       this.countlist=response.result.length
       
     })
   }

   removewishlistitem(book: any) {
    this.books.userremovewishlistitem(book.product_id._id).subscribe((response: any) => {
      console.log(response);


      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./'], {
        relativeTo:this.route
      })

    })
    
  }
}
