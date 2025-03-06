import { Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { AdminComponent } from './Components/admin/admin.component';

export const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
];
