import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class RelatedContentService {
  constructor(private http: HttpClient) {}

  getRelatedParagraph(id: string): any {
    return this.http.get(environment.api_url + `/infos/${id}`);
  }

  getRealtedParagraphList(): any {
    return this.http.get(environment.api_url + `/infos/list`);
  }
}
