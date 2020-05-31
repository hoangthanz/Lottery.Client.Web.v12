import { Component, OnInit } from '@angular/core';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { UserService } from 'src/app/shared/services/user/user.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-other-information',
  templateUrl: './other-information.component.html',
  styleUrls: ['./other-information.component.css'],
})
export class OtherInformationComponent extends BaseComponentService
  implements OnInit {
  otherInformationdForm: FormGroup;

  constructor(
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
    private userService: UserService
  ) {
    super(toastr, router, currencyPipe, datePipe);
  }

  ngOnInit() {}

  initializePasswordForm() {
    this.otherInformationdForm = new FormGroup({
      nickName: new FormControl(null, [Validators.required]),
    });
  }

  updateInformation() {}
}
