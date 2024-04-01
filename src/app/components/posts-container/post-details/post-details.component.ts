import { Component } from '@angular/core';
import {IPost} from "../../../interfaces/post.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../services/post.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
post:IPost

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private postService:PostService
  ) {
  this.activatedRoute.params.subscribe(({id}) => {
    this.post = this.router.getCurrentNavigation()?.extras.state as IPost

    if(!this.post){
      this.postService.getById(id).subscribe(value => this.post = value)
    }
  })
  }

}
