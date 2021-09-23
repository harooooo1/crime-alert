import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard } from './services/authentication.guard';
import { GameContainerComponent } from './components/game-container/game-container.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { CrimeFeedComponent } from './components/crime-feed/crime-feed.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ AuthenticationGuard ] },
  { path: 'crime-feed', component: CrimeFeedComponent, canActivate: [ AuthenticationGuard ] },
  { path: 'posts', component: CreatePostComponent, canActivate: [ AuthenticationGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'games', component: GamesListComponent, canActivate: [ AuthenticationGuard ] },
  { path: 'games/:id', component: GameContainerComponent, canActivate: [ AuthenticationGuard ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
