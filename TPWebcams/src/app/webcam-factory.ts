import { Webcams } from './webcams';

export class WebcamFactory {
  static fromObject(rawStation: any): Webcams {
    return new Webcams(
      rawStation.id,
      rawStation.streamurl,
      rawStation.webcamurl
    );
  }
}
