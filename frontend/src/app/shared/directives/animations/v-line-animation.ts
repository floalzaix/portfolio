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
      // Registering GSAP's pluggins
      gsap.registerPlugin(ScrollTrigger)

      // Registering animations
      const cp = this.containerPinning();
      if (cp) {
        cp.play()
        this.animations.push(cp)
      }
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

    const tl = gsap.timeline();

    //
    //   ScrollTrigger
    //

    tl.to(container, {
      scrollTrigger: {
        trigger: container.parentElement.parentElement,
        scroller: "#" + this.idScrollableContainer(),
        start: "top 25%",
        end: "bottom 75%",
        scrub: true,
        markers: true,
        pin: container,
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
