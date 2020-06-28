import { TransactionsService } from './../../../shared/services/Transactions.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BaseComponentService } from '../../../shared/components/base-components/base-component.service';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TransactionsHistoryService } from '../../../shared/services/Transactions-History.service';

@Component({
  selector: 'app-withdraw-history',
  templateUrl: './withdraw-history.component.html',
  styleUrls: ['./withdraw-history.component.css']
})
export class WithdrawHistoryComponent extends BaseComponentService implements OnInit {

  displayed_Columns_Process: string[] = ["position", "dateCreated", "coin"];
  data_Source_Process = new MatTableDataSource<any>();
  public orders_Process;

  displayed_Columns_History: string[] = ["position", "dateCreated", "coin", "billStatus"];
  data_Source_History = new MatTableDataSource<any>();
  public orders_History;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private transactionsService: TransactionsService,
    private transactionsHistoryService: TransactionsHistoryService,
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
  ) { 
    super(toastr, router, currencyPipe, datePipe);
  }

  ngOnInit() {
    this.getAll_orders_withdraw_pending();
    this.getAll_orders_withdraw_History();
  }

    // GET DATA         transactionType:       - 0 : Nạp         3 : Rút         4: Nạp và Rút
    getAll_orders_withdraw_pending() {
      let user = this.ConvertStringToObject(localStorage.getItem('tokenPayload'));
      const condition = {
        transactionType: 3,
        billStatus: 0,
        userId: user.Id,
      };
      this.transactionsService.get_transactions_by_condition(condition).subscribe(
        (response) => {
          if (response) {
            this.orders_Process = response;
            this.set_dataSource_Process(this.orders_Process);
          }
        },
        (error) => { }
      );
    }
    set_dataSource_Process(orders) {
      this.data_Source_Process = new MatTableDataSource(orders);
      this.data_Source_Process.paginator = this.paginator;
    }
  
        // GET DATA         transactionType History:       - 0 : Nạp         3 : Rút         4: Nạp và Rút
    getAll_orders_withdraw_History() {
          let user = this.ConvertStringToObject(localStorage.getItem('tokenPayload'));
          const condition = {
            transactionType: 3,
            billStatus: 3,
            userId: user.Id,
          };
          this.transactionsHistoryService.get_transactionsHistory_by_condition(condition).subscribe(
            (response) => {
              if (response) {
                this.orders_History = response;
                this.set_dataSource_History(this.orders_History);
              }
            },
            (error) => { }
          );
        }
        set_dataSource_History(orders) {
          this.data_Source_History = new MatTableDataSource(orders);
          this.data_Source_History.paginator = this.paginator;
        }
}
