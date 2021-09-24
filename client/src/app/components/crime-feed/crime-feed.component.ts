import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostComponent } from '../create-post/create-post.component';
import { RestService } from "../../services/rest.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-crime-feed',
  templateUrl: './crime-feed.component.html',
  styleUrls: ['./crime-feed.component.css']
})
export class CrimeFeedComponent implements OnInit {

  public crimes = [];

  constructor(private restService: RestService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.restService.getAllPosts().subscribe((res: any) => {
      console.log({ crimes: res.data });
      this.crimes = res.data;
    });
  }

  onCreatePostClick(){

    this.dialog.open(CreatePostComponent);

    this.restService.getAllPosts().subscribe((res: any) => {
      console.log({ crimes: res.data });
      this.crimes = res.data;
    });


  }


}
