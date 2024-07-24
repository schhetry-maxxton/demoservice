import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  coins= [
    {id: 1, name: 'Rajesh', designation: 'Manager', location: 'Mumbai'},
    {id: 2, name: 'Amit', designation: 'Engineer', location: 'Delhi'},
    {id: 3, name: 'Ranjit', designation: 'Director', location: 'Pune'},
    {id: 4, name: 'Neha', designation: 'Developer', location: 'Bangalore'},
    {id: 5, name: 'Anjisha', designation: 'Operation Specialist', location: 'Chennai'}
  ];

  constructor() { }
  getMyItems()
  {
    return this.coins;
  }
}
