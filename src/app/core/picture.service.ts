import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable()
export class PictureService {
  constructor(private http: HttpClient) {}

  getPictures(): any {
    return this.http.get(`${environment.api_url}/pictures`);
  }

  getPictureById(id: string): any {
    return this.http.get(`${environment.api_url}/pictures/${id}`);
  }
}
