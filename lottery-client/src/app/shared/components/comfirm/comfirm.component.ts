import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-comfirm',
  templateUrl: './comfirm.component.html',
  styleUrls: ['./comfirm.component.css'],
})
export class ComfirmComponent implements OnInit {
  message = '';

  subMessage = null;

  matTooltip = '';

  matTooltipPosition = 'below';

  colorAccess = 'accent';

  colorCancel = 'white';

  constructor(
    @Inject(MAT_DIALOG_DATA) private messageBlock: any,
    private dialogRef: MatDialogRef<ComfirmComponent>,
    public dialog: MatDialog
  ) {
    this.initializeMessages();
  }

  ngOnInit() {}

  initializeMessages() {
    this.message = this.messageBlock.message;
    this.matTooltip = this.messageBlock.matTooltip;
    this.matTooltipPosition = this.messageBlock.matTooltipPosition;
    this.subMessage = this.messageBlock?.subMessage;
  }
}
