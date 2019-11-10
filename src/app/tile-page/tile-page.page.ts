import { Component, OnInit } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

@Component({
  selector: 'app-tile-page',
  templateUrl: './tile-page.page.html',
  styleUrls: ['./tile-page.page.scss'],
})
export class TilePagePage implements OnInit  {

  constructor(private deviceMotion: DeviceMotion) {
    // this.deviceMotion.getCurrentAcceleration().then(
    //   (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
    //   (error: any) => console.log(error)
    // );

    // let subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
    //   console.log(acceleration);
    // });
    
    // // Stop watch
    // subscription.unsubscribe();
   }

  ngOnInit() {
  }

}
