import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class SentenceService {
  constructor(private http: HttpClient) {}
  getSentences(start: number, limit: number): Observable<any[]> {
    return <Observable<any[]>>(
      this.http.get(
        environment.api_url + `/sentences?_start=${start}&_limit=${limit}`
      )
    );
  }

  getCount(): Observable<number> {
    return <Observable<number>>(
      this.http.get(environment.api_url + "/sentences/count")
    );
  }

  getSentenceById(id: string): Observable<any> {
    return <Observable<any>>(
      this.http.get(environment.api_url + `/sentences/${id}`)
    );
  }
}
