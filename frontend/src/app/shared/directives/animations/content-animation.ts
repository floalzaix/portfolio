import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { DOCUMENT, isPlatformServer } from '@angular/common';

@Directive({
  selector: '[appContentAnimation]'
})
export class ContentAnimation implements AfterViewInit {
  //
  //   Interfaces
  //

  public readonly idScrollableContainer = input<string>('');
  public readonly left = input<boolean>(false);
  public readonly enabled = input<boolean>(false);

  private readonly elementRef = inject(ElementRef);
  private readonly document = inject(DOCUMENT);
  private readonly platform = inject(PLATFORM_ID);

  //
  //   Properties
  //
  
  private animations: gsap.core.Timeline[] = [];

  //
  //   Init
  //
  
  ngAfterViewInit() {
    if (!this.enabled()) return;
    if (isPlatformServer(this.platform)) return;
    
    // Registering GSAP's pluggins
    gsap.registerPlugin(ScrollTrigger);

    // Registering animations
    const animation = this.contentAnimation();
    if (animation) {
      this.animations.push(animation);
    }
  }

  //
  //   Animations
  //
  
  private contentAnimation(): gsap.core.Timeline | undefined {
    const content = this.elementRef.nativeElement;

    // Getting the scrollable container and the width of the content
    const scrollableContainer = this.document.getElementById(
      this.idScrollableContainer()
    );
    const contentWidth = content.offsetWidth;

    if (!scrollableContainer || !contentWidth) {
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        scroller: scrollableContainer,
        start: "top 70%",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(content, {
      x: (this.left() ? -contentWidth: contentWidth),
      duration: 0.75,
      ease: "bounce.out",
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
