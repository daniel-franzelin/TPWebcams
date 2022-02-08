import { Webcams } from './webcams';

export class WebcamFactory {
  static fromObject(rawStation: Array<any>): Webcams[] {
    let ret: Array<Webcams> = [];
    //console.log(rawStation);
    for (let station of rawStation)
      ret.push(
        new Webcams(
          station.Id,
          station.Streamurl,
          station.Webcamurl,
          station.GpsInfo.Altitude,
          station.GpsInfo.Latitude,
          station.GpsInfo.Longitude
        )
      );

    return ret;
  }
}
