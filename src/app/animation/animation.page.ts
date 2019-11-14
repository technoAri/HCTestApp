import { Component, OnInit } from '@angular/core';
import script from '/Users/apple/Documents/HCTestApp/src/app/Spotlight.js';
import { LottieModule } from 'ngx-lottie';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.scss'],
  //template: `<ng-lottie [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>`
})
export class AnimationPage implements OnInit {

  // options: AnimationOptions = {
  //   path: '/Users/apple/Documents/HCTestApp/src/Spotlight.json'
  // };

  // animationCreated(animationItem: AnimationItem): void {
  //   console.log(animationItem);
  // }

  anim: any;
  otherAnimations: any;
  constructor(private lottieSplashScreen: LottieSplashScreen) { }
  ngOnInit() {
    // // var animation = bodymovin.loadAnimation({
    // //   container: document.getElementById('bm'),
    // //   renderer: 'svg',
    // //   loop: true,
    // //   autoplay: true,
    // //   path: 'data.json'
    // // })

    // //script.Spotlight();
    //  this.otherAnimations = [
    //   {
    //     path: '../src/Spotlight.json'
    //   }
    // ]
    // this.anim = this.otherAnimations;
    //animations

    this.lottieSplashScreen.show('www/lottie/animation.json', false, 100, 100);
  //.then((res: any) => console.log(res))
  //.catch((error: any) => console.error(error));
  }

  handleAnimation(anim) {
    this.anim = anim;
    this.play();
  }
  play() {
    this.anim.play();
  }

}
