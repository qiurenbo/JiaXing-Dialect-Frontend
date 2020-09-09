import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RelatedContentService {
  constructor(private http: HttpClient) {}

  getRelatedParagraph(id: string): any {
    return this.http.get(`/infos/${id}`);
  }

  getRelatedParagraphList(): any {
    return this.http.get(`/infos/list`);
  }
}
