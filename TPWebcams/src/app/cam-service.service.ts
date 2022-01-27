import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CamServiceService {
  private URL = 'https://tourism.api.opendatahub.bz.it/v1/WebcamInfo';
  private testurl =
    'https://api.tourism.testingmachine.eu/v1/WebcamInfo?pagenumber=2&fields=Id,Streamurl,Webcamurl&removenullvalues=false';

  constructor(private http: HttpClient) {}

  getAll() {
    let a = this.http.get(this.testurl).subscribe((data) => console.log(data));
    /*console.log(a);*/
  }
}
