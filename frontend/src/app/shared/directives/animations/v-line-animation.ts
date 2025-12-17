import { AfterViewInit, Directive, ElementRef, inject, input } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appVLineAnimation]'
})
export class VLineAnimation implements AfterViewInit {
  //
  //   Interfaces
  //

  public readonly idScrollableContainer = input<string>("");
  public readonly enabled = input<boolean>(true);
  
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  //
  //   Properties
  //
  
  private animations: gsap.core.Timeline[] = []

  //
  //   Init
  //
  
  ngAfterViewInit() {
    if (this.enabled()) {
      setTimeout(() => {
        // Verifying the presence ids and classes
        if (!this.idScrollableContainer()) {
          return;
        }

        // Registering GSAP's pluggins
        gsap.registerPlugin(ScrollTrigger)

        // Registering animations
        const cp = this.containerPinning();
        if (cp) {
          cp.play()
          this.animations.push(cp)
        }
      }, 16);
    }
  }

  //
  //   Animations
  //
  
  private containerPinning(): gsap.core.Timeline | undefined {
    // Verifying the presence of the scrollable container
    if (!this.idScrollableContainer) {
      return;
    }

    // Getting the container and the parent element
    const container = this.elementRef.nativeElement;
    if (!container.parentElement) {
      return;
    }
    const parentElement = container.parentElement;
    if (!parentElement) {
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const parentElementRect = parentElement.getBoundingClientRect();

    const tl = gsap.timeline();

    //
    //   Parameters
    //
    
    const scrollOffset = (
      (1 - containerRect.height / (parentElementRect.height + 60)) * 100 / 2
    );

    // console.log(scrollOffset);

    //
    //   ScrollTrigger
    //

    tl.to(container, {
      scrollTrigger: {
        trigger: container.parentElement,
        scroller: "#" + this.idScrollableContainer(),
        start: "top " + scrollOffset + "%",
        end: "bottom " + (100 - scrollOffset) + "%",
        scrub: true,
        pin: container,
        pinSpacing: false,
      }
    })

    return tl;
  }

  //
  //   Destroy
  //
  
  ngOnDestroy() {
    this.animations.forEach((animation) => {
      animation.kill()
    });
  }
}
