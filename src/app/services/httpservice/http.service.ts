import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = environment.baseurl
  constructor(private http: HttpClient) { }

  postService(url: any, data: any, token: boolean = false, httpOptions: any) {   
    console.log(data)
    return this.http.post(this.baseurl + url, data, token && httpOptions)
  }


  getService(url: any, token: boolean = false, httpOptions: any) {   
    // console.log(data)
    return this.http.get(this.baseurl + url, token && httpOptions)
  }

  putService(url: any, data: any, token: boolean = false, httpOptions: any) {   
    console.log(data)
    return this.http.put(this.baseurl + url, data, token && httpOptions)
  }

  deleteService(url: any, data: any, token: boolean = false, httpOptions: any) {   
    console.log(data)
    return this.http.delete(this.baseurl + url, token && httpOptions)
  }
}
