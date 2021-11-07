import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.scss']
})
export class ViewModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  close(): void {
    this.dialogRef.close();
  }
}
