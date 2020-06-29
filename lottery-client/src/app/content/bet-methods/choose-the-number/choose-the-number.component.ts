import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SynchronizeService } from 'src/app/shared/services/synchronize.service';

@Component({
  selector: 'app-choose-the-number',
  templateUrl: './choose-the-number.component.html',
  styleUrls: ['./choose-the-number.component.css'],
})
export class ChooseTheNumberComponent extends BaseComponentService
  implements OnInit, OnDestroy {
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

  lottoRegion: string = '';
  fatherType: string = ''; // kiểu lô, đề, hay bao,..
  childlottoType: string = ''; // kiểu con

  thousandsNumbers = [
    {
      value: 0,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 1,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 2,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 3,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 4,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 5,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 6,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 7,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 8,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 9,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
  ];

  hundredsNumbers = [
    {
      value: 0,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 1,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 2,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 3,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 4,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 5,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 6,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 7,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 8,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 9,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
  ];

  tensNumbers = [
    {
      value: 0,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 1,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 2,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 3,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 4,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 5,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 6,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 7,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 8,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 9,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
  ];

  onesNumbers = [
    {
      value: 0,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 1,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 2,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 3,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 4,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 5,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 6,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 7,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 8,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
    {
      value: 9,
      style: 'background-color: #6C63FF; color: whitesmoke;',
    },
  ];

  normalStype = 'background-color: #6C63FF; color: whitesmoke;';
  selectedStyle = 'background-color: #F44336; color: whitesmoke;';

  isOpenThousandsNumbers = false;
  isOpenHundredsNumbers = false;
  isOpenTensNumber = false;
  isOpenOnesNumber = false;

  changeMethodBetoSubscription: Subscription;

  fatherTypeSubscription: Subscription;

  childlottoTypeSubscription: Subscription;

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
    this.onfatherTypeListener();
    this.onchildlottoTypeListener();
  }
  ngOnDestroy() {
    this.changeMethodBetoSubscription?.unsubscribe();
    this.fatherTypeSubscription?.unsubscribe();
    this.childlottoTypeSubscription?.unsubscribe();
  }

  ngOnInit() {
    this.checkOpenValueInRow();
    this.onChangeMethodBetoListener();
  }

  // type là hàng, value là giá trị truyền vào
  chooseNumber(type, value) {
    if (type == 0) {
      this.thousandsNumbers[value].style =
        this.thousandsNumbers[value].style == this.normalStype
          ? this.selectedStyle
          : this.normalStype;
    }

    if (type == 1) {
      this.hundredsNumbers[value].style =
        this.hundredsNumbers[value].style == this.normalStype
          ? this.selectedStyle
          : this.normalStype;
    }

    if (type == 2) {
      this.tensNumbers[value].style =
        this.tensNumbers[value].style == this.normalStype
          ? this.selectedStyle
          : this.normalStype;
    }

    if (type == 3) {
      this.onesNumbers[value].style =
        this.onesNumbers[value].style == this.normalStype
          ? this.selectedStyle
          : this.normalStype;
    }
  }

  // unitType là hàng, numberType: kiểu chẵn, lẻ, tài xỉu...
  selectNumber(unitType: any, numberType) {
    console.log(this.fatherType);
    console.log(this.childlottoType);
    if (unitType == 0) {
      this.thousandsNumbers.forEach((item, index) => {
        item.style = this.normalStype;
      });

      switch (numberType) {
        case 0:
          this.thousandsNumbers.forEach((item, index) => {
            item.style = this.selectedStyle;
          });
          break;
        case 1:
          this.thousandsNumbers[5].style = this.selectedStyle;
          this.thousandsNumbers[6].style = this.selectedStyle;
          this.thousandsNumbers[7].style = this.selectedStyle;
          this.thousandsNumbers[8].style = this.selectedStyle;
          this.thousandsNumbers[9].style = this.selectedStyle;
          break;
        case 2:
          this.thousandsNumbers[0].style = this.selectedStyle;
          this.thousandsNumbers[1].style = this.selectedStyle;
          this.thousandsNumbers[2].style = this.selectedStyle;
          this.thousandsNumbers[3].style = this.selectedStyle;
          this.thousandsNumbers[4].style = this.selectedStyle;
          break;
        case 3:
          this.thousandsNumbers[1].style = this.selectedStyle;
          this.thousandsNumbers[3].style = this.selectedStyle;
          this.thousandsNumbers[5].style = this.selectedStyle;
          this.thousandsNumbers[7].style = this.selectedStyle;
          this.thousandsNumbers[9].style = this.selectedStyle;
          break;
        case 4:
          this.thousandsNumbers[0].style = this.selectedStyle;
          this.thousandsNumbers[2].style = this.selectedStyle;
          this.thousandsNumbers[4].style = this.selectedStyle;
          this.thousandsNumbers[6].style = this.selectedStyle;
          this.thousandsNumbers[8].style = this.selectedStyle;
          break;
        case 5:
          this.thousandsNumbers.forEach((item, index) => {
            item.style = this.normalStype;
          });
          break;
        default:
          break;
      }
    }

    if (unitType == 1) {
      this.hundredsNumbers.forEach((item, index) => {
        item.style = this.normalStype;
      });
      switch (numberType) {
        case 0:
          this.hundredsNumbers.forEach((item, index) => {
            item.style = this.selectedStyle;
          });
          break;
        case 1:
          this.hundredsNumbers[5].style = this.selectedStyle;
          this.hundredsNumbers[6].style = this.selectedStyle;
          this.hundredsNumbers[7].style = this.selectedStyle;
          this.hundredsNumbers[8].style = this.selectedStyle;
          this.hundredsNumbers[9].style = this.selectedStyle;
          break;
        case 2:
          this.hundredsNumbers[0].style = this.selectedStyle;
          this.hundredsNumbers[1].style = this.selectedStyle;
          this.hundredsNumbers[2].style = this.selectedStyle;
          this.hundredsNumbers[3].style = this.selectedStyle;
          this.hundredsNumbers[4].style = this.selectedStyle;
          break;
        case 3:
          this.hundredsNumbers[1].style = this.selectedStyle;
          this.hundredsNumbers[3].style = this.selectedStyle;
          this.hundredsNumbers[5].style = this.selectedStyle;
          this.hundredsNumbers[7].style = this.selectedStyle;
          this.hundredsNumbers[9].style = this.selectedStyle;
          break;
        case 4:
          this.hundredsNumbers[0].style = this.selectedStyle;
          this.hundredsNumbers[2].style = this.selectedStyle;
          this.hundredsNumbers[4].style = this.selectedStyle;
          this.hundredsNumbers[6].style = this.selectedStyle;
          this.hundredsNumbers[8].style = this.selectedStyle;
          break;
        case 5:
          this.hundredsNumbers.forEach((item, index) => {
            item.style = this.normalStype;
          });
          break;
        default:
          break;
      }
    }

    if (unitType == 2) {
      this.tensNumbers.forEach((item, index) => {
        item.style = this.normalStype;
      });
      switch (numberType) {
        case 0:
          this.tensNumbers.forEach((item, index) => {
            item.style = this.selectedStyle;
          });
          break;
        case 1:
          this.tensNumbers[5].style = this.selectedStyle;
          this.tensNumbers[6].style = this.selectedStyle;
          this.tensNumbers[7].style = this.selectedStyle;
          this.tensNumbers[8].style = this.selectedStyle;
          this.tensNumbers[9].style = this.selectedStyle;
          break;
        case 2:
          this.tensNumbers[0].style = this.selectedStyle;
          this.tensNumbers[1].style = this.selectedStyle;
          this.tensNumbers[2].style = this.selectedStyle;
          this.tensNumbers[3].style = this.selectedStyle;
          this.tensNumbers[4].style = this.selectedStyle;
          break;
        case 3:
          this.tensNumbers[1].style = this.selectedStyle;
          this.tensNumbers[3].style = this.selectedStyle;
          this.tensNumbers[5].style = this.selectedStyle;
          this.tensNumbers[7].style = this.selectedStyle;
          this.tensNumbers[9].style = this.selectedStyle;
          break;
        case 4:
          this.tensNumbers[0].style = this.selectedStyle;
          this.tensNumbers[2].style = this.selectedStyle;
          this.tensNumbers[4].style = this.selectedStyle;
          this.tensNumbers[6].style = this.selectedStyle;
          this.tensNumbers[8].style = this.selectedStyle;
          break;
        case 5:
          this.tensNumbers.forEach((item, index) => {
            item.style = this.normalStype;
          });
          break;
        default:
          break;
      }
    }

    if (unitType == 3) {
      this.onesNumbers.forEach((item, index) => {
        item.style = this.normalStype;
      });
      switch (numberType) {
        case 0:
          this.onesNumbers.forEach((item, index) => {
            item.style = this.selectedStyle;
          });
          break;
        case 1:
          this.onesNumbers[5].style = this.selectedStyle;
          this.onesNumbers[6].style = this.selectedStyle;
          this.onesNumbers[7].style = this.selectedStyle;
          this.onesNumbers[8].style = this.selectedStyle;
          this.onesNumbers[9].style = this.selectedStyle;
          break;
        case 2:
          this.onesNumbers[0].style = this.selectedStyle;
          this.onesNumbers[1].style = this.selectedStyle;
          this.onesNumbers[2].style = this.selectedStyle;
          this.onesNumbers[3].style = this.selectedStyle;
          this.onesNumbers[4].style = this.selectedStyle;
          break;
        case 3:
          this.onesNumbers[1].style = this.selectedStyle;
          this.onesNumbers[3].style = this.selectedStyle;
          this.onesNumbers[5].style = this.selectedStyle;
          this.onesNumbers[7].style = this.selectedStyle;
          this.onesNumbers[9].style = this.selectedStyle;
          break;
        case 4:
          this.onesNumbers[0].style = this.selectedStyle;
          this.onesNumbers[2].style = this.selectedStyle;
          this.onesNumbers[4].style = this.selectedStyle;
          this.onesNumbers[6].style = this.selectedStyle;
          this.onesNumbers[8].style = this.selectedStyle;
          break;
        case 5:
          this.onesNumbers.forEach((item, index) => {
            item.style = this.normalStype;
          });
          break;
        default:
          break;
      }
    }
  }

  private onChangeMethodBetoListener() {
    this.changeMethodBetoSubscription = this.synchronizeService.changeMethodBetoListener
      .asObservable()
      .subscribe((isChanged: boolean) => {
        if (isChanged) {
          this.checkOpenValueInRow();
        }
      });
  }

  private onfatherTypeListener() {
    this.fatherTypeSubscription = this.synchronizeService.fatherTypeListener
      .asObservable()
      .subscribe((codeSelected: any) => {
        if (codeSelected) {
          this.fatherType = codeSelected;
          this.checkOpenValueInRow();
        }
      });
  }

  private onchildlottoTypeListener() {
    this.childlottoTypeSubscription = this.synchronizeService.childlottoTypeListener
      .asObservable()
      .subscribe((methodSelected: any) => {
        if (methodSelected) {
          this.childlottoType = methodSelected;
          this.checkOpenValueInRow();
        }
      });
  }

  checkOpenValueInRow() {
    this.initializeValue();
    this.isOpenTensNumber = false;
    this.isOpenOnesNumber = false;

    this.isOpenThousandsNumbers = false;
    this.isOpenHundredsNumbers = false;

    if ('danh-de' == this.fatherType) {
      this.isOpenTensNumber = true;
      this.isOpenOnesNumber = true;

      this.isOpenThousandsNumbers = false;
      this.isOpenHundredsNumbers = false;
    }

    if ('bao-lo' == this.fatherType) {
      this.isOpenTensNumber = true;
      this.isOpenOnesNumber = true;

      if (this.lottos[0].types[3].code.toString() == this.childlottoType) {
        this.isOpenHundredsNumbers = true;
      }

      if (this.lottos[0].types[4].code.toString() == this.childlottoType) {
        this.isOpenThousandsNumbers = true;
      }
    }

    if ('3-cang-dac-biet' == this.fatherType) {
      this.isOpenTensNumber = true;
      this.isOpenOnesNumber = true;
      this.isOpenHundredsNumbers = true;
      this.isOpenThousandsNumbers = false;
    }

    if ('4-cang-dac-biet' == this.fatherType) {
      this.isOpenTensNumber = true;
      this.isOpenOnesNumber = true;
      this.isOpenHundredsNumbers = true;
      this.isOpenThousandsNumbers = true;
    }

    if (
      'lo-xien' == this.fatherType ||
      'lo-truot-xien-truot' == this.fatherType
    ) {
      this.isOpenTensNumber = true;
      this.isOpenOnesNumber = true;
      this.isOpenHundredsNumbers = false;
      this.isOpenThousandsNumbers = false;
    }

    if ('dau-duoi' == this.fatherType) {
      this.isOpenTensNumber = false;
      this.isOpenOnesNumber = true;
      this.isOpenHundredsNumbers = false;
      this.isOpenThousandsNumbers = false;
    }
  }

  initializeValue() {
    this.thousandsNumbers = [
      {
        value: 0,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 1,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 2,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 3,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 4,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 5,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 6,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 7,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 8,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 9,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
    ];

    this.hundredsNumbers = [
      {
        value: 0,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 1,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 2,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 3,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 4,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 5,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 6,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 7,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 8,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 9,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
    ];

    this.tensNumbers = [
      {
        value: 0,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 1,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 2,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 3,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 4,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 5,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 6,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 7,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 8,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 9,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
    ];

    this.onesNumbers = [
      {
        value: 0,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 1,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 2,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 3,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 4,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 5,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 6,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 7,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 8,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
      {
        value: 9,
        style: 'background-color: #6C63FF; color: whitesmoke;',
      },
    ];
  }
}
