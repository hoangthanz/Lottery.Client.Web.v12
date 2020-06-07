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
