import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostCenterComponent } from './post-center/post-center.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ConfComponent } from './conf/conf.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { PreworkComponent } from './prework/prework.component';
import { PreattendeesComponent } from './preattendees/preattendees.component';
import { PwDetailsComponent } from './pw-details/pw-details.component';
import { AboutComponent } from './about/about.component';
import { AgendaComponent } from './agenda/agenda.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostCenterComponent,
    PostListComponent,
    PostDetailComponent,
    FooterComponent,
    HeaderComponent,
    ConfComponent,
    SpeakersComponent,
    PreworkComponent,
    PreattendeesComponent,
    PwDetailsComponent,
    AboutComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
