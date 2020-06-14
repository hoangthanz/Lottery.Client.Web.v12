import { UserService } from './../../../shared/services/user/user.service';
import { BaseComponentService } from './../../../shared/components/base-components/base-component.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { BankCardService } from '../../../shared/services/bank-card.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent extends BaseComponentService implements OnInit {

  public bankForm: FormGroup;
  public banks = [];
  public select_Bank = null;

  constructor(
    private userService: UserService,
    private bankCardService: BankCardService,
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
    public dialogRef: MatDialogRef<AddBankComponent>
  ) {
    super(toastr, router, currencyPipe, datePipe);
  }

  ngOnInit() {
    this.initializeForm();
    this.getAll_Banks();
  }

  initializeForm() {
    this.bankForm = new FormGroup({
      select_bankName: new FormControl(null, [Validators.required]),
      bankName: new FormControl(null, [Validators.required]),
      bankBranch: new FormControl(null, [Validators.required]),
      fullNameOwner: new FormControl(null, [Validators.required]),
      bankAccountNumber: new FormControl(null, [Validators.required]),
      confirmBankAccountNumber: new FormControl(null, [Validators.required]),
      transactionPassword: new FormControl(null, [Validators.required])
    });
  }

  submit() {

    let user = this.ConvertStringToObject(localStorage.getItem('tokenPayload'));
    let bank = this.bankForm.value;
    bank.userId = user.Id;

    if (this.bankForm.valid) {
      this.bankCardService.post_BankCard(bank).subscribe(result => {
        this.ShowSuccessMessage('Thêm tài khoản ngân hàng thành công');
        this.dialogRef.close(true);
      }, error => {
        this.ShowResponseMessage(error);
      });
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  
  public getAll_Banks() {
    this.banks = [
      {
        name: 'Vietcombank',
        value: 1
      },
      {
        name: 'Techcombank',
        value: 2
      },
      {
        name: 'Viettinbank',
        value: 3
      },
      {
        name: 'Á Châu (ACB)',
        value: 4
      },
      {
        name: 'Agribank',
        value: 5
      },
      {
        name: 'BIDV',
        value: 6
      },
      {
        name: 'Đông Á',
        value: 7
      },
      {
        name: 'Eximbank',
        value: 8
      },
      {
        name: 'Saocombank',
        value: 9
      },
      {
        name: 'VIB',
        value: 10
      },
      {
        name: 'VPBank',
        value: 12
      },
      {
        name: 'SHB',
        value: 13
      },
      {
        name: 'Ngân Hàng Khác',
        value: 0
      },
    ];
  }


  changeBank(bank: any) {
    this.select_Bank = bank.value;
    this.bankForm.controls['bankName'].setValue('');
    if (bank.value != 0) {
      this.bankForm.controls['bankName'].setValue(bank.name);
    }
  }

}
