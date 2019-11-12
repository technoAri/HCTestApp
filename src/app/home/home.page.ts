import { Component, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
// import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Content, NavController } from 'ionic-angular';
import { TweenLite, TweenMax } from 'gsap';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
// import {  Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    // trigger('balloonEffect', [
    //   state('initial', style({
    //     backgroundColor: 'green',
    //     transform: 'scale(1)',
    //     // top: 0,
    //     // left: 0,
    //   })),
    //   state('final', style({
    //     backgroundColor: 'red',
    //     transform: 'scale(.5)',
    //     // top: '50%',
    //     // left: 0,
    //   })),
    //   transition('final=>initial', aniamate('1000ms')),
    //   transition('initial=>final', animate('1500ms'))
    // ])
    // trigger('changeDivSize', [
    //   state('initial', style({
    //     backgroundColor: 'orange',
    //     width: '300px',
    //     height: '200px'
    //   })),
    //   state('final', style({
    //     backgroundColor: 'blue',
    //     width: '40px',
    //     height: '30px'
    //   })),
    //   transition('initial=>final', animate('1500ms')),
    //   transition('final=>initial', animate('1000ms'))
    // ]),
  ],
})

export class HomePage {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(private router: Router) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    console.log('initialized');
    this.router.navigateByUrl('/tile-page');
  }

  isFirstImgHidden = false;
  positionUp: any;
  currentState = 'initial';
  isZoomed = true;

  // TweenLite: TweenLite

  scrollDivUp(event) {
    console.log(event);
    console.log(event.detail.scrollTop);
    this.positionUp = event.detail.scrollTop;

    var view = document.getElementById('content');

    var searchImg = document.getElementById('imgPlacement');
    var srImg = document.getElementById('imgSearch');

    let iconDiv = document.getElementById('iconDiv');

    if (event.detail.scrollTop >= 50) {
      TweenMax.to(searchImg, 0.6, { width: 40, height: 30, top: 0, left: 0 });

      if (this.isZoomed === true) {
        this.content.scrollToBottom(800);
        this.isZoomed = false;
      }

      //iconDiv.scrollTo(0, 206);

      //iconDiv.style.top = 216;

      // TweenMax.to(iconDiv, 0.6, {top: 216});

      if (event.detail.scrollTop >= 150) {
        iconDiv.style.width = '85%';
        iconDiv.style.left = '40px';
      }

    } else if (event.detail.scrollTop < 200) {
      if (this.isZoomed === false) {
        this.content.scrollToTop(800);
        this.isZoomed = true;
      }
      TweenMax.to(searchImg, 0.6, { width: 350, height: 200 });
      iconDiv.style.width = '100%';
      iconDiv.style.left = '0px';
    }

    // var documentElement = document.documentElement;

    // //Heder height
    // var targetPosY = 500;

    // var tweens = [
    //   // tslint:disable-next-line: max-line-length
    //   TweenMax.to(searchImg, 1, { css: { force3D: false, width: 30, height: 30}, paused: true }),
    //   //TweenMax.to(searchImg, 1, { css: { force3D: false, width: 300, height: 200}, paused: true }),
    // ];

    // // window.onscroll = function (event) {
    // (!!window.requestAnimationFrame) ? requestAnimationFrame(onScroll) : onScroll();

    // // }

    // function onScroll() {

    //   var top = event.detail.scrollTop;
    //   if (top <= targetPosY) {
    //     // console.log('scrolled');
    //     var progress = (top / targetPosY);
    //     Array.prototype.forEach.call(tweens, function (tween) {
    //       tween.progress(progress);
    //     });
    //   }
    // }
  }



  clickMe() {
    console.log('clicked');
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    console.log('change state');
  }

  clickBtn() {
    console.log('Test Sucessful');
  }
}
