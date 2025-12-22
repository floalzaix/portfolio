import { AfterViewInit, Directive, ElementRef, inject, input } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appContentAnimation]'
})
export class ContentAnimation implements AfterViewInit {
  //
  //   Interfaces
  //

  private readonly elementRef = inject(ElementRef);

  //
  //   Properties
  //
  
  private animations: gsap.core.Timeline[] = [];

  //
  //   Init
  //
  
  ngAfterViewInit() {
    // Registering GSAP's pluggins
    gsap.registerPlugin(ScrollTrigger);

    // Registering animations
    // const animation = this.contentAnimation();
    // if (animation) {
    //   animation.play();
    //   this.animations.push(animation);
    // }
  }

  //
  //   Animations
  //
  
  // private contentAnimation(): gsap.core.Timeline | undefined {
  //   const tl = gsap.timeline();
  //   return tl;
  // }

  //
  //   Destroy
  //
  
  ngOnDestroy() {
    this.animations.forEach(animation => animation.kill());
  }
}
