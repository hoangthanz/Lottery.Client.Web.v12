import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery-main',
  templateUrl: './lottery-main.component.html',
  styleUrls: ['./lottery-main.component.css'],
})
export class LotteryMainComponent implements OnInit {
  slides = [
    {
      image: 'assets/svg/undraw_Savings_dwkw.svg',
    },
    {
      image: 'assets/svg/undraw_Connecting_Teams_8ntu.svg',
    },
    {
      image: 'assets/svg/undraw_Savings_dwkw.svg',
    },
    {
      image: 'assets/svg/undraw_wallet_aym5.svg',
    },
  ];
  constructor() {}

  ngOnInit() {}

  xxx(){
    console.log('xx');
    alert('xx');
  }
}
