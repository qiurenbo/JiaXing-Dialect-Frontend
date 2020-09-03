import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any[]> {
    return <Observable<any[]>>(
      this.http.get(environment.api_url + "/characters")
    );
  }

  getCharacterById(id: string): Observable<any[]> {
    return <Observable<any[]>>(
      this.http.get(environment.api_url + `/characters/${id}`)
    );
  }
}
