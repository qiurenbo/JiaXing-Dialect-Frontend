import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class WordService {
  constructor(private http: HttpClient) {}

  getWords(): Observable<any[]> {
    return <Observable<any[]>>this.http.get(environment.api_url + "/words");
  }

  getWordsById(id: string): Observable<any[]> {
    return <Observable<any[]>>(
      this.http.get(environment.api_url + `/words/{$id}`)
    );
  }
}
