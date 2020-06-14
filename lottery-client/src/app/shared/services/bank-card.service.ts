import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BankCardService {

  constructor(private httpClient: HttpClient) { }

  post_BankCard(bank: any) {
    return this.httpClient.post(`${environment.lotteryDomain}/api/BankCards`, bank);
  }

  get_Bank_by_userId(userId) {
    return this.httpClient.get(`${environment.lotteryDomain}/api/BankCards/get-cards-by-user/${userId}`);
  }

  delete_bank(id) {
    return this.httpClient.delete(`${environment.lotteryDomain}/api/BankCards/${id}`);
  }
}
