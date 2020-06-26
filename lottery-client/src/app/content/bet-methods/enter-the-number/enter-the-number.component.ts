import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';

@Component({
  selector: 'app-enter-the-number',
  templateUrl: './enter-the-number.component.html',
  styleUrls: ['./enter-the-number.component.css'],
})
export class EnterTheNumberComponent extends BaseComponentService
  implements OnInit {
  @Input() lottoRegion: string = '';
  @Input() fatherType: string = ''; // kiểu lô, đề, hay bao,..
  @Input() childlottoType: string = ''; // kiểu con

  titleEnum = {
    chuSoDau_2: 'Đánh 2 chữ số đầu trong các giải',
    chuSoCuoi_2: 'Đánh 2 chữ số cuối trong các giải',
    chuSoDau_3: 'Đánh 3 chữ số đầu trong các giải',
    chuSoCuoi_3: 'Đánh 3 chữ số cuối trong các giải',
    chuSoDau_4: 'Đánh 4 chữ số đầu trong các giải',
    chuSoCuoi_4: 'Đánh 4 chữ số cuối trong các giải',
  };

  title = 'Đánh 2 chữ số cuối trong giải đặc biệt';

  tutorialLabel = 'Nhập số đặt cược';
  tutorialText =
    'Cách chơi: \nGiữa mỗi lần cược phân cách bởi dấu ; hoặc dấu , hoặc khoảng trắng';

  constructor(
    private loginService: LoginService,
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
    private dialog: MatDialog
  ) {
    super(toastr, router, currencyPipe, datePipe);
  }

  ngOnInit() {
    this.updateAllText();
  }

  updateAllText() {
    switch (this.fatherType) {
      case 'bao-lo':
        if ('0' == this.childlottoType || '2' == this.childlottoType) {
          this.title = this.titleEnum.chuSoCuoi_2;
        }
        if ('3' == this.childlottoType) {
          this.title = this.titleEnum.chuSoCuoi_3;
        }

        if ('4' == this.childlottoType) {
          this.title = this.titleEnum.chuSoCuoi_4;
        }

        break;
      case 'lo-xien':
        this.title = this.titleEnum.chuSoCuoi_2;
        break;
      case 'danh-de':
        if ('1' == this.childlottoType) {
          this.title = this.titleEnum.chuSoDau_2;
        } else {
          this.title = this.titleEnum.chuSoCuoi_2;
        }
        break;
      case 'dau-duoi':
        break;
      case '3-cang-dac-biet':
        this.title = this.titleEnum.chuSoCuoi_3;
        break;
      case '4-cang-dac-biet':
        this.title = this.titleEnum.chuSoCuoi_4;
        break;
      case 'lo-truot-xien-truot':
        this.title = this.titleEnum.chuSoCuoi_2;
        break;

      default:
        break;
    }
  }
}
