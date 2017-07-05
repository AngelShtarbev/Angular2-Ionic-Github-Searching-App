import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Organisations } from '../pages/organisations/organisations';

@NgModule({
  declarations: [
    Organisations,
  ],
  imports: [
    IonicModule.forRoot(Organisations),
  ],
  exports: [
    Organisations
  ]
})
export class OrganisationsModule {}
