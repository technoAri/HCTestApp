import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import script from '../Spotlight.js';
import { LottieModule } from 'ngx-lottie';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';

import { defineCustomElements } from '@teamhive/lottie-player/loader';

//defineCustomElements(window);

import * as lottiee from '/Users/apple/Documents/HCTestApp/src/app/Spotlight.js';
import { LottieAnimationViewModule } from 'ng-lottie';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
//declare var Spotlight: any;

@Component({
  selector: 'app-animation',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.scss'],
  // template: 'lottie-animation-view',
})
export class AnimationPage implements OnInit {
  anim: any;
  lottieConfig: any;
  constructor() {
    LottieAnimationViewModule.forRoot();

    this.lottieConfig = {
      path: '../assets/Spotlight.json',
      autoplay: true,
      loop: true,
    };

    console.log(this.lottieConfig.path);

    // this.deviceMotion.getCurrentAcceleration().then(
    //   (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
    //   (error: any) => console.log(error)
    // );

    // // tslint:disable-next-line: prefer-const
    // let subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
    //   console.log(acceleration);
    // });

    // subscription.unsubscribe();
  }
  ngOnInit() {
    //lottiee.loop();
    // LottieAnimationViewModule.forRoot();

    // this.lottieConfig = {
    //   path: 'assets/Spotlight.json',
    //   autoplay: true,
    //   loop: false
    // };
    //script.script();
    // defineCustomElements(window);
    // console.log(document.getElementById('lottiee-plyr'));
    // //this.lottieSplashScreen.show('www/lottie/animation.json', false, 100, 100);
  }

}
