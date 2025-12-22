import { Directive, DOCUMENT, ElementRef, inject, input } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * This is an animation that aims at making a box appear with for lines
 * around the box that expands as the box rises.
 * 
 * Each lines must be on one border of the box and be able to expand.
 * 
 * When scrolling down the page the lines expand.
 */
@Directive({
  selector: '[appHomeTitleAnimation]',
})
export class HomeTitleAnimation {
  //
  //   Interfaces
  //
  
  public readonly idScrollableContainer = input<string>("");
  public readonly idLineTopLeft = input<string>("");
  public readonly idLineTopRight = input<string>("");
  public readonly idLineBottomRight = input<string>("");
  public readonly idLineBottomLeft = input<string>("");
  public readonly idBox = input<string>("");

  private readonly document = inject(DOCUMENT);
  private readonly elementRef = inject(ElementRef);

  //
  //   Properties
  //
  
  private animations: gsap.core.Timeline[] = [];

  //
  //   Init
  //
  
  ngAfterViewInit() {
    // Checking if all the required inputs are present if not just
    // returns to avoid errors as the animations are not needed
    if (!this.idScrollableContainer() ||
        !this.idLineTopLeft() ||
        !this.idLineTopRight() ||
        !this.idLineBottomRight() ||
        !this.idLineBottomLeft() ||
        !this.idBox()) {
      return;
    }

    // Initialising ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Registering animations
    const animation = this.titleAppearsAnimation();
    if (animation) {
      animation.play();
      this.animations.push(animation);
    }
  }

  //
  //   Animations
  //
  
  private titleAppearsAnimation(): gsap.core.Timeline | undefined {
    // Getting the scroll container
    const scrollContainer = this.document.querySelector(
      `#${this.idScrollableContainer()}`
    ) as HTMLElement | null;
    if (!scrollContainer) {
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        scrollContainer.style.overflowY = "auto";
      }
    });

    // Getting the box dimensions
    const box = this.elementRef.nativeElement.querySelector(
      `#${this.idBox()}`
    );
    if (!box) {
      return tl;
    }
    const boxRect = box.getBoundingClientRect();

    // Getting the lines dimensions
    const lineTopLeft = this.elementRef.nativeElement.querySelector(
      `#${this.idLineTopLeft()}`
    );
    if (!lineTopLeft) {
      return tl;
    }
    const lineTopLeftRect = lineTopLeft.getBoundingClientRect();
    const lineTopRight = this.elementRef.nativeElement.querySelector(
      `#${this.idLineTopRight()}`
    );
    if (!lineTopRight) {
      return tl;
    }
    const lineTopRightRect = lineTopRight.getBoundingClientRect();

    //
    //   Parameters
    //
    
    const step1Duration = 2;
    const step1XScale= (
      boxRect.width / lineTopRightRect.width
    );
    const step1YScale= (
      boxRect.height / lineTopLeftRect.height
    );
    const step1Opacity = 0;

    const step2Duration = 0.5;

    const step3ScrollLength = 0.4;

    //
    //   Lines
    //

    // First step 
    tl.fromTo(`#${this.idLineTopLeft()}`, {
      x: boxRect.width / 2 + 1,
      y: -boxRect.height / 2 - 1,
      scaleY: step1YScale,
      transformOrigin: "bottom",
      opacity: step1Opacity
    }, {
      opacity: 1,
      duration: step1Duration
    }, 0);
    tl.fromTo(`#${this.idLineTopRight()}`, {
      x: boxRect.width / 2 + 1,
      y: boxRect.height / 2 + 1,
      scaleX: step1XScale,
      transformOrigin: "left",
      opacity: step1Opacity,
    }, {
      opacity: 1,
      duration: step1Duration
    }, 0);
    tl.fromTo(`#${this.idLineBottomRight()}`, {
      x: -boxRect.width / 2 - 1,
      y: boxRect.height / 2 + 1,
      scaleY: step1YScale,
      transformOrigin: "top",
      opacity: step1Opacity,
    }, {
      opacity: 1,
      duration: step1Duration
    }, 0);
    tl.fromTo(`#${this.idLineBottomLeft()}`, {
      x: -boxRect.width / 2 - 1,
      y: -boxRect.height / 2 - 1,
      scaleX: step1XScale,
      transformOrigin: "right",
      opacity: step1Opacity,
    }, {
      opacity: 1,
      duration: step1Duration
    }, 0);

    // Second step
    tl.to(`#${this.idLineTopLeft()}`, {
      x: 0,
      y: 0,
      duration: step2Duration
    }, step1Duration);
    tl.to(`#${this.idLineTopRight()}`, {
      x: 0,
      y: 0,
      duration: step2Duration
    }, step1Duration);
    tl.to(`#${this.idLineBottomRight()}`, {
      x: 0,
      y: 0,
      duration: step2Duration
    }, step1Duration);
    tl.to(`#${this.idLineBottomLeft()}`, {
      x: 0,
      y: 0,
      duration: step2Duration
    }, step1Duration);

    // Third step
    tl.to([
      `#${this.idLineTopLeft()}`,
      `#${this.idLineTopRight()}`,
      `#${this.idLineBottomRight()}`,
      `#${this.idLineBottomLeft()}`
    ], {
      scale: 1,
      scrollTrigger: {
        trigger: box.parentElement,
        scroller: `#${this.idScrollableContainer()}`,
        start: "top top",
        end: "bottom " + (100 - step3ScrollLength * 100) + "%",
        pin: box.parentElement,
        anticipatePin: 1,
        scrub: true,
      },
    }, step2Duration);

    //
    //   Box
    //
    
    // Second step
    tl.from(`#${this.idBox()}`, {
      scale: 0,
      duration: step2Duration
    }, step1Duration);

    return tl;
  }

  //
  //   Destroy
  //
  
  ngOnDestroy() {
    this.animations.forEach(animation => animation.kill());
  }
}
