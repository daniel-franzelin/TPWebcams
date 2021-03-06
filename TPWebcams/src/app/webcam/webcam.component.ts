import { CamServiceService } from '../../shared/cam-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss'],
})
export class WebcamComponent implements OnInit {
  constructor(private cs: CamServiceService) {}

  ngOnInit(): void {
    this.cs.getAll();
  }
}
