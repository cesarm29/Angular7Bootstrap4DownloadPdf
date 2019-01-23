
//libs
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { PdfComponent } from './pdf/pdf.component';


//const routes
const routes: Routes = [
  {
    //route to pdf 
    path: '',
    component: PdfComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
