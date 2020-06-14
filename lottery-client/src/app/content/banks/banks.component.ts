import { ComfirmComponent } from './../../shared/components/comfirm/comfirm.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBankComponent } from './add-bank/add-bank.component';
import { BankCardService } from '../../shared/services/bank-card.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseComponentService } from '../../shared/components/base-components/base-component.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent extends BaseComponentService implements OnInit {

  public innerWidth: any;
  banks = [];
  constructor(
    private dialog: MatDialog,
    private bankCardService: BankCardService,
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
  ) {super(toastr, router, currencyPipe, datePipe); }

  ngOnInit() {
    this.getAll_bank();
  }

  getAll_bank(){
    let user = this.ConvertStringToObject(localStorage.getItem('tokenPayload'));
    console.log(user.Id)
    this.bankCardService.get_Bank_by_userId(user.Id).subscribe((result: any[]) => {
      if (result) {
        this.banks = result;
      }
    }, error => {
    });
  }

  add_bank()
  {
    this.dialog.open(AddBankComponent, {
      width: this.innerWidth < 768 ? "100vw" : "80vw",
      height: this.innerWidth < 768 ? "90vh" : "80vh",
    })
    .afterClosed()
    .subscribe((result) => {});
  }

  openDelete_BankDialog(id)
  {
    this.dialog
      .open(ComfirmComponent, {
        data: {
          message: 'Xác nhận xóa TK ngân hàng này',
          matTooltip: 'Xác nhận xóa TK ngân hàng này',
          matTooltipPosition: 'below',
          subMessage: 'Chú ý: kiểm tra lại thông tin tài khoản TK khi thực hiện'
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.bankCardService.delete_bank(id).subscribe(result => {
            this.ShowSuccessMessage('Xóa tài khoản ngân hàng thành công');
            this.getAll_bank();
          }, error => {
            this.ShowResponseMessage(error);
          });
        }
      });
  }
}
