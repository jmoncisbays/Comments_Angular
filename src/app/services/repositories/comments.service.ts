import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';
import { Comment } from '../../models/comment.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    constructor(private webApi: WebApiService) { }

    getAll(): Observable<Comment[]> {
        return this.webApi.comments_GetAll();
    }

    add(comment: Comment): Observable<string> {
        return this.webApi.comments_Add(comment);
    }

}
