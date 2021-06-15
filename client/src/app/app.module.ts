import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
