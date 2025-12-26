import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
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
  private readonly platform = inject(PLATFORM_ID);

  //
  //   Properties
  //
  
  private animations: gsap.core.Timeline[] = []

  //
  //   Init
  //
  
  ngAfterViewInit() {
    if (this.enabled() && !isPlatformServer(this.platform)) {
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
    const parentHeight = parentElementRect.height + 60;

    const tl = gsap.timeline();

    //
    //   Parameters
    //

    let offset = 0.1;
    
    const scrollOffset = (
      (1 - containerRect.height / parentHeight) * 100 / 2
    );

    // Verifying the needed space for the offset
    if (containerRect.height > (1 - 2 * offset) * parentHeight) {
      offset = 0;
    }

    //
    //   Offset
    //

    tl.to(container, {
      y: parentHeight * offset,
      duration: 0,
    })

    //
    //   ScrollTrigger
    //

    tl.to(container, {
      scrollTrigger: {
        trigger: container.parentElement,
        scroller: "#" + this.idScrollableContainer(),
        start: "top " + (scrollOffset - offset * 100 ) + "%",
        end: "bottom " + (100 - scrollOffset + offset * 100 / 2) + "%",
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
