import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable()
export class ResearchService {
  constructor(private http: HttpClient) {}

  getResearch(id: string): any {
    return this.http.get(`${environment.api_url}/researches/${id}`);
  }

  getResearches(): any {
    return this.http.get(`${environment.api_url}/researches`);
  }
}
