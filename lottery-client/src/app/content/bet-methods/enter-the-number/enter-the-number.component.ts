import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enter-the-number',
  templateUrl: './enter-the-number.component.html',
  styleUrls: ['./enter-the-number.component.css'],
})
export class EnterTheNumberComponent implements OnInit {
  @Input() lottoRegion: string = '';
  @Input() fatherType: string = ''; // kiểu lô, đề, hay bao,..
  @Input() childlottoType: string = ''; // kiểu con

  title = 'Đánh 2 chữ số cuối trong giải đặc biệt';

  tutorialLabel = 'Nhập số đặt cược';
  tutorialText = 'Cách chơi: \nGiữa mỗi lần cược phân cách bởi dấu ; hoặc dấu , hoặc khoảng trắng';

  constructor() {}

  ngOnInit() {}
}
