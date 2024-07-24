import { Component, OnInit } from '@angular/core';
import { AxiosServiceService } from '../axios-service.service';
import { IUser } from '../IUser';


@Component({
  selector: 'app-axios',
  templateUrl: './axios.component.html',
  styleUrl: './axios.component.css'
})
export class AxiosComponent {
  
    constructor(private axiosServiceService:AxiosServiceService){}
  userList : IUser[]=[];
  ngOnInit(){
    this.axiosServiceService.getFullData()
    .then(response => {
      this.userList = response.data;})
      .catch(error => {
        console.log(error);
      });
  }
}


