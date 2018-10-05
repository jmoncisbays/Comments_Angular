import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'
import { Comment } from '../../models/comment.model';

const url = environment.webapiUrl;
const headers = new HttpHeaders().set('Content-Type', 'application/json').set("crossDomain", "true");

@Injectable({
    providedIn: 'root'
})
export class WebApiService {
    constructor(private httpClient: HttpClient) { }

    comments_GetAll(): Observable<Comment[]> {
        return this.httpClient.get<Comment[]>(`${url}/api/comments`);
    }

    comments_Add(comment: Comment): Observable<string> {
        return this.httpClient.post(`${url}/api/comments`, comment, {
            headers: headers,
            responseType: 'text'
        });
    }
}
