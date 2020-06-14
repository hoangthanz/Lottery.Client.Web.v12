import { Component, OnInit } from '@angular/core';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ComfirmComponent } from 'src/app/shared/components/comfirm/comfirm.component';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css'],
})
export class BetComponent extends BaseComponentService implements OnInit {




  typeSelected;

  codeSelected;


  lottos = [
    {
      name: 'Bao lô',
      code: 'bao-lo',
      types: [
        {
          name : 'Lô 2 số',
          code: 0
        },
        {
          name : 'Lô 2 số đầu',
          code: 1
        },
        {
          name : 'Lô 2 số 1K',
          code: 2
        },
        {
          name : 'Lô 3 số',
          code: 3
        },
        {
          name : 'Lô 4 số',
          code: 4
        },
      ]
    },
    {
      name: 'Lô xiên',
      code: 'lo-xien',
      types: [
        {
          name : 'Xiên 2',
          code: 0
        },
        {
          name : 'Xiên 3',
          code: 1
        },
        {
          name : 'Xiên 4',
          code: 2
        },
      ]
    },
    {
      name: 'Đánh đề',
      code: 'danh-de',
      types: [
        {
          name : 'Đề đặc biệt',
          code: 0
        },
        {
          name : 'Đề đầu đặc biệt',
          code: 1
        },
        {
          name : 'Đề giải 7',
          code: 2
        },
        {
          name : 'Đề giải nhất',
          code: 3
        }
      ]
    },
    {
      name: 'Đầu đuôi',
      code: 'dau-duoi',
      types: [
        {
          name : 'Đầu',
          code: 0
        },
        {
          name : 'Đuôi',
          code: 1
        }
      ]
    },
    {
      name: '3 Càng',
      code: '3-cang-dac-biet',
      types: [
        {
          name : '3 Càng đặc biệt',
          code: 0
        }
      ]
    },
    {
      name: '4 Càng',
      code: '4-cang-dac-biet',
      types: [
        {
          name : '4 Càng đặc biệt',
          code: 1
        }
      ]
    },
    {
      name: 'Lô trượt - Xiên trượt',
      code: 'lo-truot-xien-truot',
      types: [
        {
          name : 'Trượt xiên 4',
          code: 3
        },
        {
          name : 'Trượt xiên 8',
          code: 4
        },  {
          name : 'Trượt xiên 10',
          code: 5
        }

      ]
    }
  ];


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

  ngOnInit() {}

  submitBet() {
    this.dialog
      .open(ComfirmComponent, {
        data: {
          message: 'Xác nhận đặt cược',
          matTooltip: 'Xác nhận đặt cược trong phiên này',
          matTooltipPosition: 'below',
          subMessage: 'Chú ý: Kiểm tra kĩ bộ số đã chọn khi thực hiện'
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
        }
      });
  }
}
