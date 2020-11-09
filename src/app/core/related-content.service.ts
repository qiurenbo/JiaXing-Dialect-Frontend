import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable()
export class RelatedContentService {
  constructor(private http: HttpClient) {}

  getRelatedParagraph(id: string): any {
    return this.http.get(`${environment.api_url}/infos/${id}`);
  }

  getRelatedParagraphList(): any {
    return this.http.get(`${environment.api_url}/infos/list`);
  }
}
