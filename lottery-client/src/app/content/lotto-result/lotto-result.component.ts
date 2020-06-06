import { Component, OnInit } from '@angular/core';
import { AseanLottoService } from 'src/app/shared/services/asean-lotto/asean-lotto.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lotto-result',
  templateUrl: './lotto-result.component.html',
  styleUrls: ['./lotto-result.component.css'],
})
export class LottoResultComponent implements OnInit {

  lottoResults = [
    {
      name: 'Miền Bắc',
      code: 'mien-bac',
      routerLink: '../sales-agent'
    },
    {
      name: 'Hồ Chí Minh',
      code: 'ho-chi-minh',
      routerLink: ''
    },
    {
      name: 'Đồng Tháp',
      code: 'dong-thap',
      routerLink: ''
    },
    {
      name: 'Cà Mau',
      code: 'ca-mau',
      routerLink: ''
    },
    {
      name: 'Bến Tre',
      code: 'ben-tre',
      routerLink: ''
    },
    {
      name: 'Vũng Tàu',
      code: 'vung-tau',
      routerLink: ''
    },
    {
      name: 'Bạc Liêu',
      code: 'bac-lieu',
      routerLink: ''
    },
    {
      name: 'Đồng Nai',
      code: 'dong-nai',
      routerLink: ''
    },
    {
      name: 'Cần Thơ',
      code: 'can-tho',
      routerLink: ''
    },
    {
      name: 'Sóc Trăng',
      code: 'soc-trang',
      routerLink: ''
    },
    {
      name: 'Tây Ninh',
      code: 'tay-ninh',
      routerLink: ''
    },
    {
      name: 'An Giang',
      code: 'an-giang',
      routerLink: ''
    },
    {
      name: 'Bình Thuận',
      code: 'binh-thuan',
      routerLink: ''
    },
    {
      name: 'Vĩnh Long',
      code: 'vinh-long',
      routerLink: ''
    },
    {
      name: 'Bình Dương',
      code: 'binh-duong',
      routerLink: ''
    },
    {
      name: 'Trà Vinh',
      code: 'tra-vinh',
      routerLink: ''
    },
    {
      name: 'Long An',
      code: 'long-an',
      routerLink: ''
    },
    {
      name: 'Bình Phước',
      code: 'binh-phuoc',
      routerLink: ''
    },
    {
      name: 'Hậu giang',
      code: 'hau-giang',
      routerLink: ''
    },
    {
      name: 'Tiền Giang',
      code: 'tien-giang',
      routerLink: ''
    },
    {
      name: 'Kiên Giang',
      code: 'kien-giang',
      routerLink: ''
    },
    {
      name: 'Đà Lạt',
      code: 'da-lat',
      routerLink: ''
    },
    {
      name: 'Thừa Thiên Huế',
      code: 'thua-thien-hue',
      routerLink: ''
    },
    {
      name: 'Phú Yên',
      code: 'phu-yen',
      routerLink: ''
    },
    {
      name: 'Đắc Lắc',
      code: 'dac-lac',
      routerLink: ''
    },
    {
      name: 'Quảng Nam',
      code: 'quang-nam',
      routerLink: ''
    },
    {
      name: 'Đà Nẵng',
      code: 'da-nang',
      routerLink: ''
    },
    {
      name: 'Khách Hòa',
      code: 'khach-hoa',
      routerLink: ''
    },
    {
      name: 'Bình Định',
      code: 'binh-dinh',
      routerLink: ''
    },
    {
      name: 'Quảng Trị',
      code: 'quang-tri',
      routerLink: ''
    },
    {
      name: 'Gia Lai',
      code: 'gia-lai',
      routerLink: ''
    },
    {
      name: 'Ninh Thuận',
      code: 'ninh-thuan',
      routerLink: ''
    },
    {
      name: 'Quảng Ngãi',
      code: 'quang-ngai',
      routerLink: ''
    },
    {
      name: 'Đắc Nông',
      code: 'dac-nong',
      routerLink: ''
    },
    {
      name: 'Kon Tum',
      code: 'kon-tum',
      routerLink: ''
    },
    {
      name: 'Đặc Biệt 6h25',
      code: 'dac-biet-625',
      routerLink: ''
    }
  ];

  url: string = 'https://aseanlotto.com/lotteries/Vietnam';
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
