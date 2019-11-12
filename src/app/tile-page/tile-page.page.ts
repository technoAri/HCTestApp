import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { NavController } from '@ionic/angular';
import { RicohView } from 'ricoh-theta-viewer';

@Component({
  selector: 'app-tile-page',
  templateUrl: './tile-page.page.html',
  styleUrls: ['./tile-page.page.scss'],
})
export class TilePagePage implements OnInit  {

  ricohView: any;
  previousAlpha = 0;
  previousBeta = 0;
  previousGamma = 0;

  constructor(private navCrt: NavController) {
    window.addEventListener('deviceorientation', (event) => this.onDeviceOrientation(event), true);
    // deviceMotion.getCurrentAcceleration().then(
    //   (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
    //   (error: any) => console.log(error)
    // );

    // let subscription = deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
    //   console.log(acceleration);
    // });

    // // Stop watch
    // subscription.unsubscribe();
   }

   initialize = () => {
    console.log('RV init');
    this.ricohView = new RicohView({
      id: 'ricoh-360-viewer',
      file: '../assets/HCPanoroma.jpg', rendererType: 0,
      orientationChange: true,
      height: window.innerHeight, width: window.innerWidth, zoom: 130,
    });

    // this.ricohView = new RicohView('test');
    // console.log('RV', this.ricohView);
  }

  onDeviceOrientation(ev) {

    if (this.canSetCameraDir(ev.alpha, ev.beta, ev.gamma)) {
      this.previousAlpha = ev.alpha;
      this.previousBeta = ev.beta;
      this.previousGamma = ev.gamma;
      this.ricohView.setCameraDir(ev.alpha, ev.beta, ev.gamma)
    }
  }

  ionViewDidLoad() {
    //this.initialize();
  }

  canSetCameraDir(alpha, beta, gamma) {
    let canSet = false;
    let calculatedAlpha = Math.abs(this.previousAlpha - alpha);
    let calculatedBeta = Math.abs(this.previousBeta - beta);
    let calculatedGamma = Math.abs(this.previousGamma - gamma);

    if (calculatedAlpha > 40 || calculatedBeta > 40 || calculatedGamma > 40) {
      canSet = true;
    }

    return canSet;
  }

  ngOnInit() {
    //console.log('RV init');
    this.initialize();
  }

}
