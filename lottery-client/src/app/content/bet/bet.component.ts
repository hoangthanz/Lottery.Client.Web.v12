import { Component, OnInit } from '@angular/core';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ComfirmComponent } from 'src/app/shared/components/comfirm/comfirm.component';
import { SynchronizeService } from 'src/app/shared/services/synchronize.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css'],
})
export class BetComponent extends BaseComponentService implements OnInit {
  methodTypeList;
  methodTypeNameSelected;

  methodSelected; // phương thức con

  codeSelected; // phương thức cha

  lottoResults = [
    {
      name: 'Miền Bắc',
      code: 'mien-bac',
      routerLink: '../sales-agent',
    },
    {
      name: 'Hồ Chí Minh',
      code: 'ho-chi-minh',
      routerLink: '',
    },
    {
      name: 'Đồng Tháp',
      code: 'dong-thap',
      routerLink: '',
    },
    {
      name: 'Cà Mau',
      code: 'ca-mau',
      routerLink: '',
    },
    {
      name: 'Bến Tre',
      code: 'ben-tre',
      routerLink: '',
    },
    {
      name: 'Vũng Tàu',
      code: 'vung-tau',
      routerLink: '',
    },
    {
      name: 'Bạc Liêu',
      code: 'bac-lieu',
      routerLink: '',
    },
    {
      name: 'Đồng Nai',
      code: 'dong-nai',
      routerLink: '',
    },
    {
      name: 'Cần Thơ',
      code: 'can-tho',
      routerLink: '',
    },
    {
      name: 'Sóc Trăng',
      code: 'soc-trang',
      routerLink: '',
    },
    {
      name: 'Tây Ninh',
      code: 'tay-ninh',
      routerLink: '',
    },
    {
      name: 'An Giang',
      code: 'an-giang',
      routerLink: '',
    },
    {
      name: 'Bình Thuận',
      code: 'binh-thuan',
      routerLink: '',
    },
    {
      name: 'Vĩnh Long',
      code: 'vinh-long',
      routerLink: '',
    },
    {
      name: 'Bình Dương',
      code: 'binh-duong',
      routerLink: '',
    },
    {
      name: 'Trà Vinh',
      code: 'tra-vinh',
      routerLink: '',
    },
    {
      name: 'Long An',
      code: 'long-an',
      routerLink: '',
    },
    {
      name: 'Bình Phước',
      code: 'binh-phuoc',
      routerLink: '',
    },
    {
      name: 'Hậu giang',
      code: 'hau-giang',
      routerLink: '',
    },
    {
      name: 'Tiền Giang',
      code: 'tien-giang',
      routerLink: '',
    },
    {
      name: 'Kiên Giang',
      code: 'kien-giang',
      routerLink: '',
    },
    {
      name: 'Đà Lạt',
      code: 'da-lat',
      routerLink: '',
    },
    {
      name: 'Thừa Thiên Huế',
      code: 'thua-thien-hue',
      routerLink: '',
    },
    {
      name: 'Phú Yên',
      code: 'phu-yen',
      routerLink: '',
    },
    {
      name: 'Đắc Lắc',
      code: 'dac-lac',
      routerLink: '',
    },
    {
      name: 'Quảng Nam',
      code: 'quang-nam',
      routerLink: '',
    },
    {
      name: 'Đà Nẵng',
      code: 'da-nang',
      routerLink: '',
    },
    {
      name: 'Khách Hòa',
      code: 'khach-hoa',
      routerLink: '',
    },
    {
      name: 'Bình Định',
      code: 'binh-dinh',
      routerLink: '',
    },
    {
      name: 'Quảng Trị',
      code: 'quang-tri',
      routerLink: '',
    },
    {
      name: 'Gia Lai',
      code: 'gia-lai',
      routerLink: '',
    },
    {
      name: 'Ninh Thuận',
      code: 'ninh-thuan',
      routerLink: '',
    },
    {
      name: 'Quảng Ngãi',
      code: 'quang-ngai',
      routerLink: '',
    },
    {
      name: 'Đắc Nông',
      code: 'dac-nong',
      routerLink: '',
    },
    {
      name: 'Kon Tum',
      code: 'kon-tum',
      routerLink: '',
    },
    {
      name: 'Đặc Biệt 6h25',
      code: 'dac-biet-625',
      routerLink: '',
    },
  ];

  lottos = [
    {
      name: 'Bao lô',
      code: 'bao-lo',
      types: [
        {
          name: 'Lô 2 số',
          code: 0,
        },
        {
          name: 'Lô 2 số đầu',
          code: 1,
        },
        {
          name: 'Lô 2 số 1K',
          code: 2,
        },
        {
          name: 'Lô 3 số',
          code: 3,
        },
        {
          name: 'Lô 4 số',
          code: 4,
        },
      ],
    },
    {
      name: 'Lô xiên',
      code: 'lo-xien',
      types: [
        {
          name: 'Xiên 2',
          code: 0,
        },
        {
          name: 'Xiên 3',
          code: 1,
        },
        {
          name: 'Xiên 4',
          code: 2,
        },
      ],
    },
    {
      name: 'Đánh đề',
      code: 'danh-de',
      types: [
        {
          name: 'Đề đặc biệt',
          code: 0,
        },
        {
          name: 'Đề đầu đặc biệt',
          code: 1,
        },
        {
          name: 'Đề giải 7',
          code: 2,
        },
        {
          name: 'Đề giải nhất',
          code: 3,
        },
        {
          name: 'Đề đầu',
          code: 4,
        },
        {
          name: 'Đề đuôi',
          code: 5,
        },
      ],
    },
    {
      name: 'Đầu đuôi',
      code: 'dau-duoi',
      types: [
        {
          name: 'Đầu',
          code: 0,
        },
        {
          name: 'Đuôi',
          code: 1,
        },
      ],
    },
    {
      name: '3 Càng',
      code: '3-cang-dac-biet',
      types: [
        {
          name: '3 Càng đặc biệt',
          code: 0,
        },
      ],
    },
    {
      name: '4 Càng',
      code: '4-cang-dac-biet',
      types: [
        {
          name: '4 Càng đặc biệt',
          code: 0,
        },
      ],
    },
    {
      name: 'Lô trượt - Xiên trượt',
      code: 'lo-truot-xien-truot',
      types: [
        {
          name: 'Trượt xiên 4',
          code: 3,
        },
        {
          name: 'Trượt xiên 8',
          code: 4,
        },
        {
          name: 'Trượt xiên 10',
          code: 5,
        },
      ],
    },
  ];

  lottoTypeSelected;

  constructor(
    private loginService: LoginService,
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
    private dialog: MatDialog,
    private synchronizeService: SynchronizeService
  ) {
    super(toastr, router, currencyPipe, datePipe);
  }

  ngOnInit() {
    const code = localStorage.getItem('bet_code');

    this.lottoTypeSelected = this.lottoResults.filter((item, index) => {
      return item.code == code;
    })[0];

    this.methodTypeList = this.lottos[0].types;
    this.methodTypeNameSelected = this.lottos[0].name;
    this.methodSelected = this.methodTypeList[0].code;

    this.changeMethodBeto();
  }

  submitBet() {
    this.dialog
      .open(ComfirmComponent, {
        data: {
          message: 'Xác nhận đặt cược',
          matTooltip: 'Xác nhận đặt cược trong phiên này',
          matTooltipPosition: 'below',
          subMessage: 'Chú ý: Kiểm tra kĩ bộ số đã chọn khi thực hiện',
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
        }
      });
  }

  ChooseFatherType(code) {
    this.methodTypeList = this.lottos.filter((item, index) => {
      return item.code == code;
    })[0].types;
    this.codeSelected = code;

    this.methodTypeNameSelected = this.lottos.filter((item, index) => {
      return item.code == code;
    })[0].name;

    this.methodSelected = this.methodTypeList[0].code;

    this.changeMethodBeto();
  }

  // đóng mở chọn nhanh với những loại cược k có
  isOpenChooseQuickNumber(codeSelected, methodSelected) {
    if (
      ('bao-lo' == codeSelected && methodSelected == 4) ||
      '4-cang-dac-biet' == codeSelected ||
      'dau-duoi' == codeSelected
    ) {
      return true;
    }
    return false;
  }

  // đóng mở chọn số với những loại cược k có
  isOpenChooseNumber(codeSelected, methodSelected) {
    if ('lo-xien' == codeSelected || 'lo-truot-xien-truot' == codeSelected) {
      return true;
    }
    return false;
  }

  isOpenEnterNumber(codeSelected, methodSelected) {
    if ('dau-duoi' == codeSelected) {
      return true;
    }
    return false;
  }

  changeMethodBeto() {
    this.synchronizeService.childlottoTypeListener.next(this.methodSelected);
    this.synchronizeService.fatherTypeListener.next(this.codeSelected);
    this.synchronizeService.changeMethodBetoListener.next(true);
  }
}
