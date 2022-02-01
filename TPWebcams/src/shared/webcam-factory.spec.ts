import { WebcamFactory } from './webcam-factory';

describe('WebcamFactory', () => {
  it('should create an instance', () => {
    expect(new WebcamFactory()).toBeTruthy();
  });
});
