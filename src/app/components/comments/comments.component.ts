import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { CommentsService as CommentsRepository } from '../../services/repositories/comments.service';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    comments: Comment[] = [];
    model: Comment = new Comment();

    constructor(private commentsRepository: CommentsRepository) { }

    ngOnInit() {
        this.getComments();
    }

    submmitComment() {
        this.commentsRepository.add(this.model).subscribe(data => {
            this.getComments();
            this.model = new Comment();
        });
    }

    getComments() {
        this.commentsRepository.getAll().subscribe(data => this.comments = data);
    }
}
