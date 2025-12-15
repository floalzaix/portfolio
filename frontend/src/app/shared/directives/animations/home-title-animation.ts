import { Directive, ElementRef, inject, input } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * This is an animation that aims at making a box appear with for lines
 * around the box that expands as the box rises.
 * 
 * Each lines must be on one border of the box and be able to expand.
 */
@Directive({
  selector: '[appHomeTitleAnimation]',
})
export class HomeTitleAnimation {
  //
  //   Interfaces
  //
  
  public readonly idLineTopLeft = input<string>("");
  public readonly idLineTopRight = input<string>("");
  public readonly idLineBottomRight = input<string>("");
  public readonly idLineBottomLeft = input<string>("");
  public readonly idBox = input<string>("");

  private readonly document = inject(ElementRef);

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
    if (!this.idLineTopLeft() ||
        !this.idLineTopRight() ||
        !this.idLineBottomRight() ||
        !this.idLineBottomLeft() ||
        !this.idBox()) {
      return;
    }

    // Initialising ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Registering animations
    this.animations.push(
      this.titleAppearsAnimation()
    )
  }

  //
  //   Animations
  //
  
  private titleAppearsAnimation() {
    const tl = gsap.timeline({});

    // Parameters
    const step1Duration = 5;
    const scaleInitialValue = 0.1;

    // Getting the box dimensions
    const box = this.document.nativeElement.querySelector(
      `#${this.idBox()}`
    );
    console.log(box)
    if (!box) {
      return tl;
    }
    const boxRect = box.getBoundingClientRect();

    console.log(boxRect);

    // First step 
    tl.from(`#${this.idLineTopLeft()}`, {
      x: boxRect.width / 2,
      y: -boxRect.height / 2,
      scaleY: scaleInitialValue,
      transformOrigin: "bottom",
      duration: step1Duration
    }, 0);
    tl.from(`#${this.idLineTopRight()}`, {
      x: boxRect.width / 2,
      y: boxRect.height / 2,
      scaleX: scaleInitialValue,
      transformOrigin: "left",
      duration: step1Duration
    }, 0);
    tl.from(`#${this.idLineBottomRight()}`, {
      x: -boxRect.width / 2,
      y: boxRect.height / 2,
      scaleY: scaleInitialValue,
      transformOrigin: "top",
      duration: step1Duration
    }, 0);
    tl.from(`#${this.idLineBottomLeft()}`, {
      x: -boxRect.width / 2,
      y: -boxRect.height / 2,
      scaleX: scaleInitialValue,
      transformOrigin: "right",
      duration: step1Duration
    }, 0);

    // Second step
    tl.from(`#${this.idLineTopLeft()}`, {
      
    }, "> ")

    return tl;
  }

  //
  //   Destroy
  //
  
  ngOnDestroy() {
    this.animations.forEach(animation => animation.kill());
  }
}
