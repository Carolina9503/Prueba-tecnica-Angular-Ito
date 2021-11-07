import { Component, Inject, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, Validators, FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  form: FormGroup;
  @ViewChild('formRef') formRef: FormGroupDirective;
 
  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.form = formBuilder.group({
      email: [data.email, [Validators.required, Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$')]],
      nombres: [data.nombres, [Validators.required]],
      apellidos: [data.apellidos, [Validators.required]],
      usuario: [data.usuario, [Validators.required]],
      activo:[data.activo],
    });
  }

  submit() {
    this.dialogRef.close(this.form.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
