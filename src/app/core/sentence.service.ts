import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class SentenceService {
  constructor(private http: HttpClient) {}
  getSentences(): Observable<any[]> {
    return <Observable<any[]>>this.http.get(environment.api_url + "/sentences");
  }

  getSentenceById(id: string): Observable<any> {
    return <Observable<any>>(
      this.http.get(environment.api_url + `/sentences/${id}`)
    );
  }
}
