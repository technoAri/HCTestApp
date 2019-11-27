import { Component, OnInit } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.scss'],
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
  }
  ngOnInit() {
  }

}
