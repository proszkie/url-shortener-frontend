import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectToDesiredSiteComponent } from './redirect-to-desired-site/redirect-to-desired-site.component';
import { ShortenUrlCardComponent } from './shorten-url-card/shorten-url-card.component'


const routes: Routes = [
		  {path:'', component: ShortenUrlCardComponent },
		  {path:':shortenedUrlPath', component: RedirectToDesiredSiteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
