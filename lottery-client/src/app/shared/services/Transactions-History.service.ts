import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransactionsHistoryService {

    constructor(private httpClient: HttpClient) { }

    get_transactionsHistory_by_condition(condition) {
        return this.httpClient.post(
          `${environment.lotteryDomain}/api/TransactionHistories/condition`,condition);
      }

}
