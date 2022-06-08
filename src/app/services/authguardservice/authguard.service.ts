import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  login=[ 'sandipankanade08@gmail.com', 'Sandip@1234']
  constructor() { }
  gettoken(){
    return !!localStorage.getItem("token");
  }
}
