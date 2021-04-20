import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { tap, map, pluck, catchError } from "rxjs/operators";
import { blog } from "./blog";

@Injectable({
    providedIn: 'root'
})

export class BlogService {


    private blogs: blog[] = [];

   private rootUrl ="http://localhost:4200/data/blog.json";

   

    //DI for getting the HTTP Client
    constructor(private http: HttpClient) { }
    getBlogs(): blog[] {
        return this.blogs;
    }
    getBlog(id: number) {
        return this.http.get<blog[]>(this.rootUrl + 'api/adminBlog/' + id).pipe(
          catchError(this.handleError)
        );
      }

    getBlogViaREST(): Observable<blog[]> {

       return this.http.get<blog[]>(this.rootUrl).pipe(
            tap(data => console.log('Movies ' + JSON.stringify(data))),
            catchError(this.handleError)
        );

    
        
    }

    handleError(err: HttpErrorResponse) {
        let errormsg = '';
        if (err.error instanceof ErrorEvent) {
            errormsg = "An error occured " + err.error.message
        }
        else {
            errormsg = "Handling Error Server returned  " + err.status + err.statusText;
        }
        console.log(errormsg);
        return throwError(errormsg);
    }

    addBlog(data: any){
        return this.http.post(this.rootUrl, {...data,id:new Date().getTime().toString()});
      }

      getCurrentData(id: any){
        return this.http.get(`${this.rootUrl}/${id}`)
      }
      updateBlog(id: any,data: any){
        return this.http.put(`${this.rootUrl}/${id}`,data)
      }

}




