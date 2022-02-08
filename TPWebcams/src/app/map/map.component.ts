import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { CamServiceService } from 'src/shared/cam-service.service';
import { Webcams } from 'src/shared/webcams';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map!: any;
  private webcams!: Webcams[];

  constructor(private cs: CamServiceService) {}

  ngOnInit(): void {
    this.webcams = this.cs.getAll();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [46.639, 11.458],
      zoom: 9.5,
    });

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/17fradan/ckze55h4q003j14qxfm51on1u/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiMTdmcmFkYW4iLCJhIjoiY2t6ZTUwOGM5MGR3YjJubzAyMnkzZHdyMSJ9.KRfCoxRgp8UlDPMn6yAwoA',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1IjoiMTdmcmFkYW4iLCJhIjoiY2t6ZTUwOGM5MGR3YjJubzAyMnkzZHdyMSJ9.KRfCoxRgp8UlDPMn6yAwoA',
      }
    ).addTo(this.map);
    console.log(this.webcams);
    for (let cam of this.webcams) {
      console.log(cam.longitude, cam.altitude);
      var marker = L.marker([51.5, -0.09]).addTo(this.map);
      new L.Marker([parseInt(cam.longitude), parseInt(cam.altitude)]).addTo(
        this.map
      );
    }
  }
}
