import { Component, OnInit } from '@angular/core';
import { RestService } from "../../services/rest.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  selectedImageFile :File;
  constructor(private restService: RestService, private router: Router) { }

  ngOnInit(): void {
  }

  onPostClick(commentInput: HTMLTextAreaElement, titleInput: HTMLTextAreaElement, photoSelector: HTMLImageElement) {

    console.log("creating post ");
    console.log(commentInput);
    console.log(this.onPhotoSelected);
    console.log(photoSelector);
    console.log(titleInput);
    // const postTitle = "Crime Report" + new Date();
    this.restService.createPost(titleInput.value, commentInput.value, photoSelector).subscribe(
      (res: any) => {
        console.log("Success", res.data.id);
        //this.router.navigate(["posts/" + res.data.id]);
        this.router.navigate(["crime-feed/"]);
      },
      (err) => {
        console.error("Failed to create post", err);
      }
    );

  }

  onPhotoSelected(photoSelector: HTMLInputElement) {
    this.selectedImageFile = photoSelector.files[0];
    if(!this.selectedImageFile) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedImageFile);
    fileReader.addEventListener(
      "loadend",
      ev => {
        let readableString = fileReader.result.toString();
        let postPreviewImage = <HTMLImageElement>document.getElementById("post-preview-image")
        postPreviewImage.src = readableString;
      }
    );
  }
}
