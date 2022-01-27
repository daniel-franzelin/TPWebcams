import { WebcamComponent } from './webcam/webcam.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: StartseiteComponent, pathMatch: 'full' },
  { path: 'startseite', component: StartseiteComponent },
  { path: 'webcam', component: WebcamComponent },
  { path: 'aboutus', component: AboutUsComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
