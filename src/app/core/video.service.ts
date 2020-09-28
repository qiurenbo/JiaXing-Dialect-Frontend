import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class VideoService {
  constructor(private http: HttpClient) {}
  getVideoById(id: string): Observable<any> {
    return <Observable<any>>(
      this.http.get(environment.api_url + `/videos/${id}`)
    );
  }

  getVideos(): Observable<any> {
    return <Observable<any>>this.http.get(environment.api_url + `/videos`);
  }
}
