import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces/post-interfaces";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
@Input()
postDetails: IPost
}
