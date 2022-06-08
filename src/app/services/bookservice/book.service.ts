import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token")  
  }


  usergetallbooks() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('get/book', true, header)
  }

  useraddtobag(productID: any) { 

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    
      })
    }
    return this.httpService.postService('add_cart_item/' + productID, {}, true, header)
  }

  useraddtowishlist(productID: any) {  
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('add_wish_list/' + productID, {}, true, header)
  }

  usergetcartlist() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService('get_cart_items', true, header)
  }

  userupdatequantity(productID: any, req: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    
      })
    }
    return this.httpService.putService('cart_item_quantity/' + productID, req, true, header)
  }

  userremovecartitem(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token   
      })
    }
    return this.httpService.deleteService('remove_cart_item/' + productID, {}, true, header)
  }

  usercheckout(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('add/order/', data, true, header)
  }

  userwishlist() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService('get_wishlist_items', true, header)
  }

  userremovewishlistitem(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token   
      })
    }
    return this.httpService.deleteService('remove_wishlist_item/' + productID, {}, true, header)
  }

  useraddfeedback(productID: any, data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    
      })
    }
    return this.httpService.postService('add/feedback/' + productID, data, true, header)
  }

  usergetfeedback(productID: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService('get/feedback/' + productID, true, header)
  }

 

  

 
}
