import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appMenuAnimation]'
})
export class MenuAnimation implements AfterViewInit {
  //
  //   Interfacess
  //

  public readonly mainContentId = input<string>('');
  public readonly idScrollableContainer = input<string>('');
  public readonly bottomAndNotTop = input<boolean>(false);
  public readonly enabled = input<boolean>(false);
  
  private readonly elementRef = inject(ElementRef);
  private readonly document = inject(DOCUMENT);

  //
  //   Properties
  //
  
  private animations: gsap.core.Timeline[] = [];

  //
  //   Init
  //
  
  ngAfterViewInit() {
    if (!this.enabled()) return;

    if (!this.mainContentId()) return;

    // Registering GSAP's pluggins
    gsap.registerPlugin(ScrollTrigger);

    // Registering animations
    const menuAnimation = this.animateMenu();
    if (menuAnimation) {
      this.animations.push(menuAnimation);
    }
  }

  //
  //   Animations
  //
  
  private animateMenu() : gsap.core.Timeline | undefined {
    // Setup
    const menu = this.elementRef.nativeElement;

    const mainContent = this.document.getElementById(this.mainContentId());
    if (!mainContent) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContent,
        scroller: "#" + this.idScrollableContainer(),
        start: "top 30%",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
      },
    });

    console.log(mainContent);

    //
    //  Scroll 
    //

    tl.from(menu, {
      y: this.bottomAndNotTop() ? 70 : -70,
      duration: 1,
      ease: "bounce.inOut",
    });
    
    return tl;
  }

  //
  //   Destroy
  //
  
  ngOnDestroy() {
    this.animations.forEach(animation => animation.kill());
  }
}
