import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPost} from "../../interfaces/post-interfaces";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input()
  post: IPost;

  @Output()
  lift = new EventEmitter<IPost>()

  getDetails():void {
    this.lift.emit(this.post)
  }
}
