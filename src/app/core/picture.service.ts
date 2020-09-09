import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PictureService {
  constructor(private http: HttpClient) {}

  getPictures(): any {
    return this.http.get("/pictures");
  }

  getPictureById(id: string): any {
    return this.http.get(`/pictures/${id}`);
  }
}
