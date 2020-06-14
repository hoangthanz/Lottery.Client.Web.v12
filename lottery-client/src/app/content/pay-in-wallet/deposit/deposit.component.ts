import { Component, OnInit } from '@angular/core';
import { BaseComponentService } from '../../../shared/components/base-components/base-component.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { BankCardService } from '../../../shared/services/bank-card.service';
import { TransactionsService } from '../../../shared/services/Transactions.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent extends BaseComponentService implements OnInit {

  user = null;
  bank = null;
  isShow = false;
  ownerBanks = null;
  isBank = false;

  coin = '0';

  public infor_deposit = {
    transactionType: 0,
    billStatus: 0,
    status: 1,
    coin: 0,
    content: null,
    userId: null,
    bankCardId: null,
  };

  constructor(
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
    private bankCardService: BankCardService,
    private transactionsService: TransactionsService,

  ) {
    super(toastr, router, currencyPipe, datePipe);
  }

  ngOnInit() {
    this.get_User();
    this.getAll_BankAdmin();
  }

  show_deposit() {
    this.isShow = true;
    this.coin = '0';
    this.isBank = false;

  }

  // Set userId
  get_User() {
    this.user = this.ConvertStringToObject(localStorage.getItem('tokenPayload'));
    this.infor_deposit.userId = this.user.Id;
    let wallet = this.ConvertStringToObject(this.user.Wallet);
    this.infor_deposit.content = "Gom_Su_" + wallet.WalletId;


  }

  getAll_BankAdmin() {
    this.bankCardService.getAll_OwnerBank().subscribe(result => {
      this.ownerBanks = result;
    }, error => {
      this.ShowResponseMessage(error);
    });
  }

  changeBank(bank: any) {
    this.infor_deposit.bankCardId = bank.id;
    this.bank = bank;
    this.isBank = true;
  }


  tranformMoney(value: string) {
    if (value) {
      this.coin = this.ConvertToMoney(value);
    }

  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  submit() {
    this.infor_deposit.coin = this.ConvertToNumber(this.coin);
    console.log(this.infor_deposit);
    if (this.infor_deposit.coin >= 200000) {
      this.transactionsService.post_deposit(this.infor_deposit).subscribe((response) => {
        this.ShowSuccessMessage('Thành công');
        this.isShow = false;
      }, (error) => {
        this.ShowResponseMessage(error);
      });
    }
    else {
      this.ShowWarningMessage('Số tiền phải lớn hơn 200.000 VNĐ');
    }
  }

  cancel() {
    this.isShow = false;
  }

}

