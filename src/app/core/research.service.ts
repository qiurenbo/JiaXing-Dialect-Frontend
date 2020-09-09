import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ResearchService {
  constructor(private http: HttpClient) {}

  getResearch(id: string): any {
    return this.http.get(`/researches/${id}`);
  }

  getResearches(): any {
    return this.http.get(`/researches`);
  }
}
