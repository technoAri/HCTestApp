import { Component, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
// import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Content, NavController } from 'ionic-angular';
import { TweenLite, TweenMax } from 'gsap';
import { Router } from '@angular/router';
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

  // @ViewChild('content', { static: false }) content: Content;

  constructor(private router: Router) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(){
    console.log('initialized');
    //this.router.navigateByUrl('/tile-page');
  }
  // ionViewDidLoad() {
  //   console.log('ViewDidLoad');
  // }

  isFirstImgHidden = false;
  positionUp: any;
  currentState = 'initial';

  // TweenLite: TweenLite

  scrollDivUp(event) {
    console.log(event);
    console.log(event.detail.scrollTop);
    this.positionUp = event.detail.scrollTop;

    let isZoomed = false;

    var view = document.getElementById('content');

    var searchImg = document.getElementById('imgPlacement');
    var srImg = document.getElementById('imgSearch');

    let iconDiv = document.getElementById('iconDiv');

    if(event.detail.scrollTop >= 50) {
      let Power1: any;
       TweenMax.to(searchImg, 0.6, {width: 40, height: 30, top: 0, left: 0});

      //iconDiv.style.top = 216;

      // TweenMax.to(iconDiv, 0.6, {top: 216});

      if (event.detail.scrollTop >= 150) {
        iconDiv.style.width = '85%';
        iconDiv.style.left = '40px';
    } 

    } else if (event.detail.scrollTop < 140) {
      //let Power1: any;
      TweenMax.to(searchImg, 0.6, {width: 350, height: 200});
      iconDiv.style.width = '100%';
      iconDiv.style.left = '0px';
    }

//     var documentElement = document.documentElement;
  
//   var targetPosY = event.detail.scrollTop;

//     var tweens = [
//       TweenLite.to( document.querySelector('#imgPlacement'), 1, {css:{force3D:false, scale:.5}, paused:true}),
//    ];

//    ( !! window.requestAnimationFrame) ? requestAnimationFrame(onScroll) : onScroll();

//     function onScroll(){
//       console.log('scrolled');
//       console.log(documentElement.scrollTop);
//     //have to restrict it into range, because on OSX it can get negative values
//     //http://bassta.bg/2013/05/restrict-a-number-to-a-range/
//     var top =  Math.max(Math.min(window.pageYOffset || documentElement.scrollTop, targetPosY), 0); 
//     if(top <= targetPosY){
//         var progress = (top / targetPosY);
//         Array.prototype.forEach.call(tweens, function(tween){
//           tween.progress(progress);
//         });
//     }
// }






    // if(event.detail.scrollTop >= 50) {
    //   searchImg.style.height = '80px';
    //   searchImg.style.width = '120px';

    //   // event.detail.scrollTop = 206;

    //   if (event.detail.scrollTop >= 150) {
    //     searchImg.style.height = '30px';
    //     searchImg.style.width = '40px';
    //     //view.scrollTo(0, 0);
    //     iconDiv.style.width = '85%';
    //     iconDiv.style.left = '40px';
    // } 

    // } else if (event.detail.scrollTop < 140) {
    //   searchImg.style.height = '200px';
    //   searchImg.style.width = '350px';

    //   iconDiv.style.width = '100%';
    //   iconDiv.style.left = '0px';
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
