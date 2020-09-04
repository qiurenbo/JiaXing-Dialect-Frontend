import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
const client_id = "jq44qmDfD2FvVk4XpLNH2M84";
const client_secret = "Lp9Zpo0PzZT9rUoTSmB3WUExsjnoGj0Z";
@Injectable()
export class ASRService {
  private token: string = null;

  constructor(private http: HttpClient) {}

  private auth(): Observable<any> {
    return this.http.post(
      `/token?grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
      {}
    );
  }

  asr(audio: any): Observable<any> {
    if (!this.token) {
      return this.auth().pipe(
        switchMap((resp: any) => {
          this.token = resp.access_token;
          console.log("token" + this.token);
          return this.post(audio);
        })
      );
    } else {
      return this.post(audio);
    }
  }

  private post(audio: any) {
    const headers = new HttpHeaders({ "Content-Type": "audio/wav;rate=16000" });
    return this.http.post(
      `/asr?dev_pid=80001&cuid=97618999-8bd6-4c9f-bba6-bc6d052b4191&token=${this.token}`,
      audio,
      { headers }
    );
  }
}
