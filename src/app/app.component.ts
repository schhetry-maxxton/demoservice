import { Component, OnInit } from '@angular/core';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'demoService';
  coins: any[] = [];
  constructor(private cryptoservice: CryptoService)
  {
    this.coins = cryptoservice.getMyItems();
  }
}
