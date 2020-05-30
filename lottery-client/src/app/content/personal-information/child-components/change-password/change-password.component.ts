import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent extends BaseComponentService
  implements OnInit {
  passwordForm: FormGroup;
  paymentPasswordForm: FormGroup;

  constructor(
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
    private userService: UserService
  ) {
    super(toastr, router, currencyPipe, datePipe);
    this.initializePasswordForm();
    this.initializePaymentPasswordForm();
  }

  ngOnInit() {}

  initializePasswordForm() {
    this.passwordForm = new FormGroup({
      password: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required]),
      confirmNewPassword: new FormControl(null, [Validators.required]),
    });
  }

  initializePaymentPasswordForm() {
    this.paymentPasswordForm = new FormGroup({
      paymentPassword: new FormControl(null, [Validators.required]),
      newPaymentPassword: new FormControl(null, [Validators.required]),
      confirmNewPaymentPassword: new FormControl(null, [Validators.required]),
    });
  }

  updatePassword() {
    if (this.passwordForm.valid) {
      const tokenPayload = this.ConvertStringToObject(
        localStorage.getItem('tokenPayload')
      );
      const changePassword = this.passwordForm.value;
      this.userService
        .changePassword(tokenPayload.id, changePassword)
        .subscribe(
          (response) => {
            this.ShowSuccessMessage('Thay đổi mật khẩu thành công!');
          },
          (error) => {
            this.ShowWarningMessage(error.message);
          }
        );
    }
  }
}
