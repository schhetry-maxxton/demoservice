import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosServiceService {

  constructor(private http:HttpClient) { }
  getFullData(){
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(
      res => res);
  }
}




