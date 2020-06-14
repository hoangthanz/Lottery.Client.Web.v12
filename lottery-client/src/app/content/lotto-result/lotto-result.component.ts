import { Component, OnInit } from '@angular/core';
import { AseanLottoService } from 'src/app/shared/services/asean-lotto/asean-lotto.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lotto-result',
  templateUrl: './lotto-result.component.html',
  styleUrls: ['./lotto-result.component.css'],
})
export class LottoResultComponent implements OnInit {

 
  url: string = 'https://aseanlotto.com/lotteries/Vietnam';
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
