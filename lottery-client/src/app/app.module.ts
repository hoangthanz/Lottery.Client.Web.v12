import { ChooseAQuickNumberComponent } from './content/bet-methods/choose-a-quick-number/choose-a-quick-number.component';
import { DepositHistoryComponent } from './content/pay-in-wallet/deposit-history/deposit-history.component';
import { EditBankComponent } from './content/banks/edit-bank/edit-bank.component';
import { AddBankComponent } from './content/banks/add-bank/add-bank.component';
import { BanksComponent } from './content/banks/banks.component';
import { PayInWalletComponent } from './content/pay-in-wallet/pay-in-wallet.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ToastrModule, ToastNoAnimationModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import {
  CommonModule,
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCheckboxModule,
  MAT_CHECKBOX_CLICK_ACTION,
} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ChartsModule } from 'ng2-charts';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxPrintModule } from 'ngx-print';
import { NgxPermissionsModule } from 'ngx-permissions';
import {
  MatRippleModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { LoginComponent } from './content/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginService } from './shared/services/login.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './shared/services/interceptor.service';
import { BaseComponentService } from './shared/components/base-components/base-component.service';
import { RulesComponent } from './content/static-components/rules/rules.component';
import { UserService } from './shared/services/user/user.service';
import { AccountManageComponent } from './content/account-manage/account-manage.component';
import { PersonalInformationComponent } from './content/personal-information/personal-information.component';
import { ChangePasswordComponent } from './content/personal-information/child-components/change-password/change-password.component';
import { OtherInformationComponent } from './content/personal-information/child-components/other-information/other-information.component';
import { PhoneComponent } from './content/personal-information/child-components/phone/phone.component';
import { MessageChatComponent } from './content/message-chat/message-chat.component';
import { WithdrawWalletComponent } from './content/withdraw-wallet/withdraw-wallet.component';
import { LotteryMainComponent } from './content/lottery-main/lottery-main.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { RegisterComponent } from './content/register/register.component';
import { SalesAgentComponent } from './content/sales-agent/sales-agent.component';
import { LottoResultComponent } from './content/lotto-result/lotto-result.component';
import { AseanLottoService } from './shared/services/asean-lotto/asean-lotto.service';
import { RegisterSubordinateMemberComponent } from './content/sales-agent/child-components/register-subordinate-member/register-subordinate-member.component';
import { RefLinkAccountComponent } from './content/ref-link-account/ref-link-account.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { BetComponent } from './content/bet/bet.component';
import { ComfirmComponent } from './shared/components/comfirm/comfirm.component';
import {
  MatBottomSheetModule,
  MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
} from '@angular/material/bottom-sheet';
import { ChooseTheNumberComponent } from './content/bet-methods/choose-the-number/choose-the-number.component';
import { EnterTheNumberComponent } from './content/bet-methods/enter-the-number/enter-the-number.component';
import { BankCardService } from './shared/services/bank-card.service';
import { WalletService } from './shared/services/user/wallet.service';
import { SignalRService } from './shared/services/signal-r.service';
import { DepositComponent } from './content/pay-in-wallet/deposit/deposit.component';
import { TransactionsService } from './shared/services/Transactions.service';
import { TransactionsHistoryService } from './shared/services/Transactions-History.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RulesComponent,
    AccountManageComponent,
    PersonalInformationComponent,
    ChangePasswordComponent,
    OtherInformationComponent,
    PhoneComponent,
    MessageChatComponent,
    PayInWalletComponent,
    WithdrawWalletComponent,
    LotteryMainComponent,
    RegisterComponent,
    SalesAgentComponent,
    LottoResultComponent,
    RegisterSubordinateMemberComponent,
    RefLinkAccountComponent,
    BetComponent,
    ComfirmComponent,
    ChooseAQuickNumberComponent,
    ChooseTheNumberComponent,
    EnterTheNumberComponent,
    BanksComponent,
    AddBankComponent,
    EditBankComponent,
    DepositComponent,
    DepositHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ToastNoAnimationModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [],
        blacklistedRoutes: [],
        skipWhenExpired: true,
      },
    }),
    CommonModule,
    FormsModule,
    BlockUIModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatDialogModule,
    MatButtonModule,

    MatCheckboxModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatListModule,
    ChartsModule,
    MatSortModule,
    MatButtonToggleModule,
    MatMenuModule,
    NgScrollbarModule,
    MatToolbarModule,
    MatSidenavModule,
    NgMaterialMultilevelMenuModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    NgxPrintModule,

    NgxPermissionsModule.forChild(),
    MatRippleModule,
    MatExpansionModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatBadgeModule,

    HttpClientModule,
    MatCarouselModule.forRoot(),
    ClipboardModule,
    MatBottomSheetModule,
  ],
  providers: [
    { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    {
      provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: false },
    },
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    BaseComponentService,
    LoginService,
    AuthGuardService,
    BankCardService,
    TransactionsService,
    TransactionsHistoryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    UserService,
    AseanLottoService,
    WalletService,
    SignalRService,
  ],
  entryComponents: [ComfirmComponent, AddBankComponent, EditBankComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
