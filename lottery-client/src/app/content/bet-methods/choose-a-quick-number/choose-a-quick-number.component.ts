import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SynchronizeService } from 'src/app/shared/services/synchronize.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-choose-a-quick-number',
  templateUrl: './choose-a-quick-number.component.html',
  styleUrls: ['./choose-a-quick-number.component.css'],
})
export class ChooseAQuickNumberComponent extends BaseComponentService
  implements OnInit, OnDestroy {
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

  changeMethodBetoSubscription: Subscription;

  fatherTypeSubscription: Subscription;

  childlottoTypeSubscription: Subscription;

  lottoRegion: string = '';
  fatherType: string = ''; // kiểu lô, đề, hay bao,..
  childlottoType: string = ''; // kiểu con

  types = [
    { name: '00 - 99', value: -1 },
    { name: '000 - 099', value: 0 },
    { name: '100 - 199', value: 1 },
    { name: '200 - 299', value: 2 },
    { name: '300 - 399', value: 3 },
    { name: '400 - 499', value: 4 },
    { name: '500 - 599', value: 5 },
    { name: '600 - 699', value: 6 },
    { name: '700 - 799', value: 7 },
    { name: '800 - 899', value: 8 },
    { name: '900 - 999', value: 9 },
  ];

  typeSelected = -1;

  SetOfNumberDigits;

  normalStype = 'background-color: #6C63FF; color: whitesmoke;';
  selectedStyle = 'background-color: #F44336; color: whitesmoke;';

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

  ngOnInit() {}

  ngOnDestroy() {
    this.changeMethodBetoSubscription?.unsubscribe();
    this.fatherTypeSubscription?.unsubscribe();
    this.childlottoTypeSubscription?.unsubscribe();
  }

  changeTypeDigits(type) {
    this.typeSelected = Number(type);
    if (this.typeSelected !== -1) {
      this.setThreeNumberArray(this.typeSelected);
    }
  }

  private onChangeMethodBetoListener() {
    this.changeMethodBetoSubscription = this.synchronizeService.changeMethodBetoListener
      .asObservable()
      .subscribe((isChanged: boolean) => {
        if (isChanged) {
        }
      });
  }

  private onfatherTypeListener() {
    this.fatherTypeSubscription = this.synchronizeService.fatherTypeListener
      .asObservable()
      .subscribe((codeSelected: any) => {
        if (codeSelected) {
          this.fatherType = codeSelected;
          this.openNumberDigitType();
        }
      });
  }

  private onchildlottoTypeListener() {
    this.childlottoTypeSubscription = this.synchronizeService.childlottoTypeListener
      .asObservable()
      .subscribe((methodSelected: any) => {
        if (methodSelected) {
          this.childlottoType = methodSelected;
          this.openNumberDigitType();
        }
      });
  }

  setTwoNumberArray() {
    this.SetOfNumberDigits = [];
    this.SetOfNumberDigits.push({
      style: 'background-color: #6C63FF; color: whitesmoke;',
      value: '00',
    });
    this.SetOfNumberDigits.push({
      style: 'background-color: #6C63FF; color: whitesmoke;',
      value: '01',
    });
    this.SetOfNumberDigits.push({
      style: 'background-color: #6C63FF; color: whitesmoke;',
      value: '02',
    });
    this.SetOfNumberDigits.push({
      style: 'background-color: #6C63FF; color: whitesmoke;',
      value: '03',
    });
    this.SetOfNumberDigits.push({
      style: 'background-color: #6C63FF; color: whitesmoke;',
      value: '04',
    });
    this.SetOfNumberDigits.push({
      style: 'background-color: #6C63FF; color: whitesmoke;',
      value: '05',
    });
    this.SetOfNumberDigits.push({
      style: 'background-color: #6C63FF; color: whitesmoke;',
      value: '06',
    });
    this.SetOfNumberDigits.push({
      style: 'background-color: #6C63FF; color: whitesmoke;',
      value: '07',
    });
    this.SetOfNumberDigits.push({
      style: 'background-color: #6C63FF; color: whitesmoke;',
      value: '08',
    });
    this.SetOfNumberDigits.push({
      style: 'background-color: #6C63FF; color: whitesmoke;',
      value: '09',
    });

    for (let index = 10; index <= 99; index++) {
      this.SetOfNumberDigits.push({
        style: 'background-color: #6C63FF; color: whitesmoke;',
        value: index.toString(),
      });
    }
  }

  setThreeNumberArray(type) {
    this.SetOfNumberDigits = [];
    if (-1 == type) {
      this.setTwoNumberArray();
    }
    if (0 == type) {
      for (let index = 0; index < 10; index++) {
        this.SetOfNumberDigits.push({
          style: 'background-color: #6C63FF; color: whitesmoke;',
          value: '00' + index.toString(),
        });
      }

      for (let index = 10; index < 100; index++) {
        this.SetOfNumberDigits.push({
          style: 'background-color: #6C63FF; color: whitesmoke;',
          value: '0' + index.toString(),
        });
      }
    }

    if (1 == type) {
      for (let index = 100; index < 200; index++) {
        this.SetOfNumberDigits.push({
          style: 'background-color: #6C63FF; color: whitesmoke;',
          value: index.toString(),
        });
      }
    }

    if (2 == type) {
      for (let index = 200; index < 300; index++) {
        this.SetOfNumberDigits.push({
          style: 'background-color: #6C63FF; color: whitesmoke;',
          value: index.toString(),
        });
      }
    }

    if (3 == type) {
      for (let index = 300; index < 400; index++) {
        this.SetOfNumberDigits.push({
          style: 'background-color: #6C63FF; color: whitesmoke;',
          value: index.toString(),
        });
      }
    }

    if (4 == type) {
      for (let index = 400; index < 500; index++) {
        this.SetOfNumberDigits.push({
          style: 'background-color: #6C63FF; color: whitesmoke;',
          value: index.toString(),
        });
      }
    }

    if (5 == type) {
      for (let index = 500; index < 600; index++) {
        this.SetOfNumberDigits.push({
          style: 'background-color: #6C63FF; color: whitesmoke;',
          value: index.toString(),
        });
      }
    }

    if (6 == type) {
      for (let index = 600; index < 700; index++) {
        this.SetOfNumberDigits.push({
          style: 'background-color: #6C63FF; color: whitesmoke;',
          value: index.toString(),
        });
      }
    }

    if (7 == type) {
      for (let index = 700; index < 800; index++) {
        this.SetOfNumberDigits.push({
          style: 'background-color: #6C63FF; color: whitesmoke;',
          value: index.toString(),
        });
      }
    }

    if (8 == type) {
      for (let index = 800; index < 900; index++) {
        this.SetOfNumberDigits.push({
          style: 'background-color: #6C63FF; color: whitesmoke;',
          value: index.toString(),
        });
      }
    }

    if (9 == type) {
      for (let index = 900; index < 1000; index++) {
        this.SetOfNumberDigits.push({
          style: 'background-color: #6C63FF; color: whitesmoke;',
          value: index.toString(),
        });
      }
    }
  }

  changeTowDigits() {}

  changeThreeDigits() {}

  openNumberDigitType() {
    if ('danh-de' == this.fatherType) {
      this.types = [{ name: '00 - 99', value: -1 }];
      this.typeSelected = -1;
    }

    if ('bao-lo' == this.fatherType) {
      if (this.lottos[0].types[3].code.toString() == this.childlottoType) {
        this.types = [
          { name: '000 - 099', value: 0 },
          { name: '100 - 199', value: 1 },
          { name: '200 - 299', value: 2 },
          { name: '300 - 399', value: 3 },
          { name: '400 - 499', value: 4 },
          { name: '500 - 599', value: 5 },
          { name: '600 - 699', value: 6 },
          { name: '700 - 799', value: 7 },
          { name: '800 - 899', value: 8 },
          { name: '900 - 999', value: 9 },
        ];
        this.typeSelected = 0;
      } else {
        this.types = [{ name: '00 - 99', value: -1 }];
        this.typeSelected = -1;
      }
    }

    if ('3-cang-dac-biet' == this.fatherType) {
      this.types = [
        { name: '000 - 099', value: 0 },
        { name: '100 - 199', value: 1 },
        { name: '200 - 299', value: 2 },
        { name: '300 - 399', value: 3 },
        { name: '400 - 499', value: 4 },
        { name: '500 - 599', value: 5 },
        { name: '600 - 699', value: 6 },
        { name: '700 - 799', value: 7 },
        { name: '800 - 899', value: 8 },
        { name: '900 - 999', value: 9 },
      ];
      this.typeSelected = 0;
    }

    if (
      'lo-xien' == this.fatherType ||
      'lo-truot-xien-truot' == this.fatherType
    ) {
      this.types = [{ name: '00 - 99', value: -1 }];
      this.typeSelected = -1;
    }

    if ('dau-duoi' == this.fatherType) {
      this.types = [{ name: '00 - 99', value: -1 }];
      this.typeSelected = -1;
    }

    this.setThreeNumberArray(this.typeSelected);
  }

  chooseNumber(value, index) {
    this.SetOfNumberDigits[index].style =
      this.SetOfNumberDigits[index].style == this.normalStype
        ? this.selectedStyle
        : this.normalStype;
  }
}
