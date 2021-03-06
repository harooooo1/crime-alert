import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class RestService {
  private apiEndpoint = "http://localhost:8080/";

  constructor(private http: HttpClient, private authService: AuthService) { }


  register(fname, lname, eemail, username, password) {
    return this.http.post(this.apiEndpoint + "register", {
      fname: fname,
      lname: lname,
      eemail: eemail,
      username: username,
      password: password,
      
    }, 
    
  /*  {
      headers: { "x-auth-token": this.authService.getToken() },
    } */
    
    );
  }

  getAllPosts() {
    return this.http.get(this.apiEndpoint + "posts", {
      headers: { "x-auth-token": this.authService.getToken() },
    });
  }

  getPostById(id) {
    return this.http.get(this.apiEndpoint + "posts/" + id, {
      headers: { "x-auth-token": this.authService.getToken() },
    });
  }

  createPost(info) {
    return this.http.post(this.apiEndpoint + "posts", {
      info: info
      //image: image
    }, {
      headers: { "x-auth-token": this.authService.getToken() },
    });
  }

  editPost(info) {

    return this.http.post(this.apiEndpoint + "posts", {
      info: info
      //image: image
    }, {
      headers: { "x-auth-token": this.authService.getToken() },
    });


  }

  getAllGames() {
    return this.http.get(this.apiEndpoint + "games", {
      headers: { "x-auth-token": this.authService.getToken() },
    });
  }

  getGameById(id) {
    return this.http.get(this.apiEndpoint + "games/" + id, {
      headers: { "x-auth-token": this.authService.getToken() },
    });
  }

  createGame(title) {
    return this.http.post(this.apiEndpoint + "games", {
      title: title,
    }, {
      headers: { "x-auth-token": this.authService.getToken() },
    });
  }
  startGameWithId(id) {
    return this.http.post(this.apiEndpoint + "games/" + id + "/start", null, {
      headers: { "x-auth-token": this.authService.getToken() },
    });
  }

  joinGameWithId(id) {
    return this.http.post(this.apiEndpoint + "games/" + id + "/join", null, {
      headers: { "x-auth-token": this.authService.getToken() },
    });
  }

  leaveGameWithId(id) {
    return this.http.post(this.apiEndpoint + "games/" + id + "/leave", null, {
      headers: { "x-auth-token": this.authService.getToken() },
    });
  }

  revealCard(gameId, cardIndex) {
    return this.http.post(
      this.apiEndpoint + "games/" + gameId + "/reveal-card",
      {
        card: cardIndex,
      },
      {
        headers: { "x-auth-token": this.authService.getToken() },
      }
    );
  }





}
