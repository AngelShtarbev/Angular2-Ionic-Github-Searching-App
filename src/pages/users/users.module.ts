import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Users } from '../pages/users/users';

@NgModule({
  declarations: [
    Users,
  ],
  imports: [
    IonicModule.forRoot(Users),
  ],
  exports: [
    Users
  ]
})
export class UsersModule {}
