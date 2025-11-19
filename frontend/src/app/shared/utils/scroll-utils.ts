import { ElementRef } from "@angular/core";

export function getScrollSign(wheelEvent: WheelEvent) {
  return wheelEvent.deltaY > 0 ? 1 : -1;
}

function moveScroll(elementRef: ElementRef, id: string, positionY: number) {
  const el = elementRef.nativeElement.querySelector(
    id
  )
  // setTimeout(() => {
  //   el.scrollTo({
  //       top: positionY,
  //       behavior: 'smooth'
  //     });
  // }, 16);
}

function preventDefault(event: WheelEvent) {
  event.preventDefault();
}

export function lockScroll(elementRef: ElementRef, id: string, positionY: number = 0) {
  const el = elementRef.nativeElement.querySelector(
    id
  )
  el.addEventListener('wheel', preventDefault);
  moveScroll(elementRef, id, positionY);
}

export function unlockScroll(elementRef: ElementRef, id: string) {
  const el = elementRef.nativeElement.querySelector(
    id
  )
  el.removeEventListener('wheel', preventDefault);
}
