import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {
  MatToolbarModule, 
  MatFormFieldModule,
  MatInputModule,
  MatGridTile,
  MatGridListModule,
} from '@angular/material';

import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { DetailsComponent } from './components/details/details.component';
import { GenreComponent } from './components/genre/genre.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeLoggedComponent } from './components/home-logged/home-logged.component';
import { HomeNotLoggedComponent } from './components/home-not-logged/home-not-logged.component';
import { LoginComponent } from './components/login/login.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { RegistrationComponent} from './components/registration/registration.component';
import { SongComponent } from './components/song/song.component';

import { AuthService } from './services/auth.service';
import { GenreService } from './services/genre.service';
import { PlaylistService } from './services/playlist.service';
import { MoodService } from './services/mood.service';
import { SongService } from './services/song.service';

const routes = [
  { path: 'registration', component: RegistrationComponent }, 
  { path: 'login', component: LoginComponent },
  { path: '**', component: RegistrationComponent },
  { path: "", component: HomeLoggedComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    AdminportalComponent,
    HomeLoggedComponent,
    HomeNotLoggedComponent,
    SongComponent,
    RegistrationComponent,
    MatGridTile,
    HeaderComponent,
    GenreComponent,
    DetailsComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes), 
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    AppRoutingModule,
    
  ],
  providers: [
  AuthService,
  GenreService,
  MoodService,
  PlaylistService,
  SongService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
