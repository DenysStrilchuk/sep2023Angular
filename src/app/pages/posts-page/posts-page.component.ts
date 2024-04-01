import { Component } from '@angular/core';
import {PostsComponent} from "../../components/posts-container/posts/posts.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [
    PostsComponent,
    RouterOutlet
  ],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {

}
