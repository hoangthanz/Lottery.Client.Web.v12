import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;
  
  walletTargetListener = new BehaviorSubject(null);


  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.lotteryDomain}/accountHub`)
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Đã kết nối được với máy chủ thời gian thực'))
      .catch((err) =>
        console.log(
          'Lỗi! trong quá trình kết nối với máy chủ thời gian thực: ' + err
        )
      );
  };

  public addTransferWalletDataListener = () => {
    this.hubConnection.on('changeMoneyInWallet', (data) => {
      console.log(data);
      this.walletTargetListener.next(data);
    });
  };
}
