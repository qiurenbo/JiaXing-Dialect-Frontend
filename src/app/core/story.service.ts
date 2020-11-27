import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class StoryService {
  constructor(private http: HttpClient) {}

  getStories(): Observable<any[]> {
    return <Observable<any[]>>this.http.get(environment.api_url + "/stories");
  }

  getStoryById(id: string): Observable<any> {
    return <Observable<any>>(
      this.http.get(environment.api_url + `/stories/${id}`)
    );
  }
}
