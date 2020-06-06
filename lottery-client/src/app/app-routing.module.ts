import { MessageChatComponent } from './content/message-chat/message-chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './content/login/login.component';
import { RoleGuardService } from './shared/services/role-guard.service';
import { AccountManageComponent } from './content/account-manage/account-manage.component';
import { RulesComponent } from './content/static-components/rules/rules.component';
import { PersonalInformationComponent } from './content/personal-information/personal-information.component';
import { PayInWalletComponent } from './content/pay-in-wallet/pay-in-wallet.component';
import { WithdrawWalletComponent } from './content/withdraw-wallet/withdraw-wallet.component';
import { LotteryMainComponent } from './content/lottery-main/lottery-main.component';
import { RegisterComponent } from './content/register/register.component';
import { SalesAgentComponent } from './content/sales-agent/sales-agent.component';
import { LottoResultComponent } from './content/lotto-result/lotto-result.component';
import { RegisterSubordinateMemberComponent } from './content/sales-agent/child-components/register-subordinate-member/register-subordinate-member.component';
import { RefLinkAccountComponent } from './content/ref-link-account/ref-link-account.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'lottery',
    component: LayoutComponent,
    canActivate: [RoleGuardService],
    children: [
      { path: ' ', redirectTo: 'lottery-main' },
      { path: 'account', component: AccountManageComponent },
      { path: 'rule', component: RulesComponent },
      { path: 'personal-information', component: PersonalInformationComponent },
      { path: 'message-chat', component: MessageChatComponent },
      { path: 'pay-in-wallet', component: PayInWalletComponent },
      { path: 'withdraw-wallet', component: WithdrawWalletComponent },
      { path: 'lottery-main', component: LotteryMainComponent },
      {
        path: 'sales-agent',
        component: SalesAgentComponent,
      },
      {
        path: 'register-subordinate-member',
        component: RegisterSubordinateMemberComponent,
      },
      { path: 'lotto-result', component: LottoResultComponent },
      { path: 'ref-link', component: RefLinkAccountComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
