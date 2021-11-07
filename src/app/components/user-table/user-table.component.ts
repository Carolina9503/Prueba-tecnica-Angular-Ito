import {AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ViewModalComponent } from '../view-modal/view-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { CreateModalComponent } from '../create-modal/create-modal.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements AfterViewInit {

  displayedColumns: string[] = ['userName', 'email', 'name', 'lastName', 'isActive', 'actions'];
  dataSource = new MatTableDataSource<Usuario>(users);

  emailFilter: string;
  usuarioFilter: string;
  nombresFilter: string;
  apellidosFilter: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {
    
    
  }
  viewUser (row: any) {
    
    let dialogRef = this.dialog.open(ViewModalComponent, {
      data: {
        nombres: row.name,
        apellidos: row.lastName,
        email: row.email,
        usuario: row.userName,
        activo: row.isActive,
      }
    });
  }

  editUser (row: any) {
    let dialogRef = this.dialog.open(EditModalComponent, {
      data: {
        nombres: row.name,
        apellidos: row.lastName,
        email: row.email,
        usuario: row.userName,
        activo: row.isActive,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        row.userName = result.usuario
        row.email = result.email
        row.name = result.nombres
        row.lastName = result.apellidos
        row.isActive = result.activo
      }
    });
  }
  createUser () {
    let dialogRef = this.dialog.open(CreateModalComponent, {data:{}});
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        users.push({
          userName: result.usuario,
          email: result.correo,
          name: result.nombres,
          lastName: result.apellidos,
          isActive:result.activo
        });
        this.dataSource = new MatTableDataSource<Usuario>(users);
      }
    });
  }

  filterUsers() {

    this.emailFilter = this.emailFilter?.trim();
    this.usuarioFilter = this.usuarioFilter?.trim();
    this.nombresFilter = this.nombresFilter?.trim();
    this.apellidosFilter = this.apellidosFilter?.trim();
    
    if (this.emailFilter || this.usuarioFilter || this.nombresFilter || this.apellidosFilter) {
      let usersTemp: Usuario[] = [];

      if (this.emailFilter) {
        usersTemp = users.filter(user => user.email == this.emailFilter)
      }
      if (this.usuarioFilter) {
        if (usersTemp.length > 0 ) {
          usersTemp = usersTemp.filter(user => user.userName == this.usuarioFilter)
        }else{
          usersTemp = users.filter(user => user.userName == this.usuarioFilter)
        }
      }
      if (this.nombresFilter) {
        if (usersTemp.length > 0 ) {
          usersTemp = usersTemp.filter(user => user.name == this.nombresFilter)
        }else{
          usersTemp = users.filter(user => user.name == this.nombresFilter)
        }
      }
      if (this.apellidosFilter) {
        if (usersTemp.length > 0 ) {
          usersTemp = usersTemp.filter(user => user.lastName == this.apellidosFilter)
        }else{
          usersTemp = users.filter(user => user.lastName == this.apellidosFilter)
        }
      }
      this.dataSource = new MatTableDataSource<Usuario>(usersTemp);      
    }else{
      this.dataSource = new MatTableDataSource<Usuario>(users);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface Usuario {
  userName: string;
  email:string;
  name: string;
  lastName: string;
  isActive: boolean;    
}

  let users: Usuario[] = [
  {userName: 'diego.gomez', email: 'diego.gomez@gmail.com', name: 'diego', lastName: 'gomez',isActive:true},
  {userName: 'leidy.gamboa', email: 'leidy.gamboa@gmail.com', name: 'leidy', lastName: 'gamboa',isActive:true},
  {userName: 'mau.daza', email: 'mau.daza@gmail.com', name: 'mau', lastName: 'daza',isActive:true},
  {userName: 'andres.silva', email: 'andres.silva@gmail.com', name: 'andres', lastName: 'silva',isActive:true},
  {userName: 'pedro.lopez', email: 'pedro.lopez@gmail.com', name: 'pedro', lastName: 'lopez',isActive:true},
  {userName: 'laura.perez', email: 'laura.perez@gmail.com', name: 'laura', lastName: 'perez',isActive:false},
  {userName: 'maye.lucas', email: 'maye.lucas@gmail.com', name: 'maye', lastName: 'lucas',isActive:true},
];
