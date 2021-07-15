import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameContainerComponent } from './components/game-container/game-container.component';
import { GameLobbyComponent } from './components/game-lobby/game-lobby.component';
import { GameComponent } from './components/game/game.component';

import { CrimeFeedComponent } from './components/crime-feed/crime-feed.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CrimeComponent } from './components/crime/crime.component';
import { CrimeReportComponent } from './components/crime-report/crime-report.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GamesListComponent,
    GameContainerComponent,
    GameLobbyComponent,
    GameComponent,
    CrimeFeedComponent,
    UserProfileComponent,
    CrimeComponent,
    CrimeReportComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
