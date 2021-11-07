import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateModalComponent } from './components/create-modal/create-modal.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { ViewModalComponent } from './components/view-modal/view-modal.component';

const routes: Routes = [
  {
    path:'table',
    component:UserTableComponent
  },
  {
    path:'view',
    component:ViewModalComponent
  },
  {
    path:'edit',
    component:EditModalComponent
  },
 
  {
    path:'create',
    component:CreateModalComponent
  },
{ path: '**', redirectTo: 'table' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
