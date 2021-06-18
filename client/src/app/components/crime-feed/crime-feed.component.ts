import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostComponent } from '../create-post/create-post.component';

@Component({
  selector: 'app-crime-feed',
  templateUrl: './crime-feed.component.html',
  styleUrls: ['./crime-feed.component.css']
})
export class CrimeFeedComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreatePostClick(){

    this.dialog.open(CreatePostComponent);


  }

}
