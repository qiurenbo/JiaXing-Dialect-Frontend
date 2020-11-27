import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
@Injectable()
export class PictureService {
  constructor(private http: HttpClient) {}

  getPictures(start: number, limit: number): Observable<any[]> {
    return <Observable<any[]>>(
      this.http.get(
        environment.api_url + `/pictures?_start=${start}&_limit=${limit}`
      )
    );
  }

  getCount(): Observable<number> {
    return <Observable<number>>(
      this.http.get(`${environment.api_url}/pictures/count`)
    );
  }

  getPictureById(id: string): any {
    return this.http.get(`${environment.api_url}/pictures/${id}`);
  }
}
