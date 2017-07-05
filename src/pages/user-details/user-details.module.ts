import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UserDetails } from './user-details';

@NgModule({
  declarations: [
    UserDetails,
  ],
  imports: [
    IonicModule.forRoot(UserDetails),
  ],
  exports: [
    UserDetails
  ]
})
export class UserDetailsModule {}
