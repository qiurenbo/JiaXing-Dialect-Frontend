import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class SongService {
  constructor(private http: HttpClient) {}

  getSongs(): Observable<any[]> {
    return <Observable<any[]>>this.http.get(environment.api_url + "/songs");
  }

  getSongById(id: string): Observable<any> {
    return <Observable<any>>this.http.get(environment.api_url + `/songs/${id}`);
  }
}
