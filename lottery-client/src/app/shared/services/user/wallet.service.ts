import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  constructor(private httpClient: HttpClient) {}

  getWalletByUser(userId: string) {
    return this.httpClient.get(
      `${environment.lotteryDomain}/api/Wallets/user/${userId}`
    );
  }
}
