import { Webcams } from './webcams';
import { WebcamFactory } from './webcam-factory';
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

  private response!: any;
  private webcams!: Array<Webcams>;

  constructor(private http: HttpClient) {}

  getAll() {
    this.http.get(this.URL).subscribe((data) => {
      this.response = data;
      this.webcams = WebcamFactory.fromObject(this.response.Items);

      console.log(this.webcams);
    });
    return this.webcams;
  }
}
