import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimationPage } from './animation.page';
import { defineCustomElements } from '@teamhive/lottie-player/loader';
import { LottieAnimationViewModule } from 'ng-lottie';

defineCustomElements(window);

const routes: Routes = [
  {
    path: '',
    component: AnimationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    LottieAnimationViewModule
  ],
  declarations: [AnimationPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AnimationPageModule {}
