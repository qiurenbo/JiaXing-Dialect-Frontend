import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class WordService {
  constructor(private http: HttpClient) {}

  getWords(start: number, limit: number, key = ""): Observable<any[]> {
    if (key === "") {
      return <Observable<any[]>>(
        this.http.get(
          environment.api_url + `/words?_start=${start}&_limit=${limit}`
        )
      );
    }

    return <Observable<any[]>>(
      this.http.get(
        environment.api_url +
          `/words?_start=${start}&_limit=${limit}&name_contains=${key}`
      )
    );
  }

  getCount(key = ""): Observable<number> {
    if (key === "") {
      return <Observable<number>>(
        this.http.get(environment.api_url + "/words/count")
      );
    }
    return <Observable<number>>(
      this.http.get(environment.api_url + `/words/count?name_contains=${key}`)
    );
  }

  getWordById(id: string): Observable<any> {
    return <Observable<any>>this.http.get(environment.api_url + `/words/${id}`);
  }
}
