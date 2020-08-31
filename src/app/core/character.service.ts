import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any[]> {
    return <Observable<any[]>>(
      this.http.get(environment.api_url + "/characters")
    );
  }

  getCharactersById(id: string): Observable<any[]> {
    return <Observable<any[]>>(
      this.http.get(environment.api_url + `/characters/{$id}`)
    );
  }
}
