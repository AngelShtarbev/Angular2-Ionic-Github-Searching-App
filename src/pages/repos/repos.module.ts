import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Repos } from '../pages/repos/repos';

@NgModule({
  declarations: [
    Repos,
  ],
  imports: [
    IonicModule.forRoot(Repos),
  ],
  exports: [
    Repos
  ]
})
export class ReposModule {}
