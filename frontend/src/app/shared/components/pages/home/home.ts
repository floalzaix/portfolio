import { Component, effect, inject, ElementRef, signal } from '@angular/core';
import { combineLatest, fromEvent, map, of, startWith, throttleTime } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

enum State {
  ENTRY,
  INTRO,
  CONTENT_APPEAR_1,
  CONTENT1
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //
  //   Interfaces
  //

  private readonly elementRef = inject(ElementRef);

  //
  //   Bindings
  //

  /**
   * Input bindings
   */

  // Observables

  private readonly scrollValue$ =
    globalThis.window === undefined ?
    of(0) : fromEvent(globalThis, 'scroll').pipe(
      map(() => globalThis.scrollY),
      startWith(globalThis.scrollY)
    );

  public readonly $wheelEvent = signal<WheelEvent | null>(null);
  public readonly wheelEvent$ = toObservable(this.$wheelEvent);

  // Combined latest

  private readonly inputBindings = toSignal(combineLatest([
    this.scrollValue$,
    this.wheelEvent$
  ]).pipe(
    throttleTime(16),
    map(([scrollValue, wheelEvent]) => ({ scrollValue, wheelEvent }))
  ));

  //
  //   State machine
  //

  public readonly state = signal<State>(State.ENTRY);

  private readonly stateMachine = effect(() => {
    switch (this.state()) {
      case State.ENTRY: {
        // Getting the parameters
        const scrollValue = this.inputBindings()?.scrollValue;

        if (scrollValue && scrollValue > 1) {
          this.state.set(State.INTRO);
          console.log('ENTRY -> INTRO');
        }
        break;
      }
      case State.INTRO: {
        this.state.set(State.CONTENT_APPEAR_1);
        console.log('INTRO -> CONTENT_APPEAR_1');
        break;
      }
      case State.CONTENT_APPEAR_1: {
        this.state.set(State.CONTENT1);
        console.log('CONTENT_APPEAR_1 -> CONTENT1');
        break;
      }
      case State.CONTENT1: {
        break;
      }
    }
  });

  /**
   * State handlers
   */

  /**
   * When the user arrives to the home page
   *
   * Actions:
   * - lockScroll: Locks the scroll
   * - A_T_1: Title entry lines translating
   *
   * Output:
   * - INTRO: When the first animation is done and won't be
   * coming back until refresh
   */
  private readonly entryHandler = effect(() => {
    if (this.state() !== State.ENTRY) return;

    console.log('ENTRY');

    const wheelEvent = this.inputBindings()?.wheelEvent;

    if (wheelEvent) {
      this.A_T_1(wheelEvent.deltaY);
      this.lockScroll(wheelEvent);
    }
  });

  //
  //   Animations
  //

  private A_T_1(wheelValue: number) {
    console.log('A_T_1', wheelValue);
    // Getting the lines
    const lineLeftV = this.elementRef.nativeElement.querySelector(
      '#home-container-left-line-v'
    );
    const lineLeftH = this.elementRef.nativeElement.querySelector(
      '#home-container-left-line-h'
    );
    const lineRightV = this.elementRef.nativeElement.querySelector(
      '#home-container-right-line-v'
    );
    const lineRightH = this.elementRef.nativeElement.querySelector(
      '#home-container-right-line-h'
    );

    // Updating the lines styles
    lineLeftV.style.width = `translate`;
  };

  //
  //   Other methods
  //

  private lockScroll(wheelEvent: WheelEvent) {
    wheelEvent.preventDefault();
    console.log('lockScroll', wheelEvent, this.elementRef);
    const body = this.elementRef.nativeElement;
    if (body) {
      body.style.overflow = 'hidden';
    }
  }

  private unlockScroll(wheelEvent: WheelEvent) {
    wheelEvent.preventDefault();
    const body = this.elementRef.nativeElement;
    if (body) {
      body.style.overflow = 'auto';
    }
  }
}
