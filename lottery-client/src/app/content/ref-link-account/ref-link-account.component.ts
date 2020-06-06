import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { CommonConst } from 'src/app/shared/const/common-const';

@Component({
  selector: 'app-ref-link-account',
  templateUrl: './ref-link-account.component.html',
  styleUrls: ['./ref-link-account.component.css'],
})
export class RefLinkAccountComponent extends BaseComponentService
  implements OnInit {
  refLink = '';
  isCoppied = false;
  constructor(
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe
  ) {
    super(toastr, router, currencyPipe, datePipe);
  }

  ngOnInit() {
    const user = this.ConvertStringToObject(
      localStorage.getItem('tokenPayload')
    );

    CommonConst.currentUser = user;

    this.refLink = user.RefLink;
  }

  copyLink() {
    this.isCoppied = true;
  }
}
