import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransactionsService {

  constructor(private httpClient: HttpClient) { }

  post_deposit(trans: any) {
    return this.httpClient.post(`${environment.lotteryDomain}/api/Transactions`, trans);
  }

  get_transactions_by_condition(condition) {
    return this.httpClient.post(
      `${environment.lotteryDomain}/api/Transactions/condition`,
      condition
    );
  }
}
