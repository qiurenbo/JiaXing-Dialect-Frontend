import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class WordService {
  constructor(private http: HttpClient) {}

  getWords() {
    return this.http.get(environment.api_url + "words");
  }
}
