import { HomeComponent } from './home/home.component';
import { PostCenterComponent } from './post-center/post-center.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PwDetailsComponent } from './pw-details/pw-details.component';
import { AboutComponent } from './about/about.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'video', component: VideosComponent },
  {path: 'posts', component: PostCenterComponent},
  {path: 'workDetails', component: PwDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
