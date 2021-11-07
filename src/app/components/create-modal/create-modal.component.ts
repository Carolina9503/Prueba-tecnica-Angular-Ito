import { Component,Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, Validators, FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent {
  form: FormGroup;
  @ViewChild('formRef') formRef: FormGroupDirective;

  constructor(
    public dialogRef: MatDialogRef<CreateModalComponent>,
     private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.form = formBuilder.group({
      correo: ['', [Validators.required, Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$')]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      activo: ['', [Validators.required]],
    });
  }
  
  submit() {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close(); 
  }
} 
