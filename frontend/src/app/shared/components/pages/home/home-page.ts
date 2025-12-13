import { Component, effect, inject, ElementRef, signal, OnInit } from '@angular/core';
import { combineLatest, map, throttleTime } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { getScrollSign, lockScroll, unlockScroll } from '../../../utils/scroll-utils';
import { environment } from '../../../../../environments/environment';
import { Project } from '../../../models/project';
import { TimelineModule } from 'primeng/timeline';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';

// Architecture

abstract class State {
  //
  //   Overrides
  //

  public is(state: new (...args: any[]) => State): boolean {
    return this instanceof state;
  }
};


//
//   States
//

class StateEntry extends State {}

class StateIntro extends State {
  public titleLinesScalingProgress = 0;

  //
  //   Constructor
  //

  constructor(titleLinesScalingProgress: number = 0) {
    super();
    this.titleLinesScalingProgress = titleLinesScalingProgress;
  }
}

class StateContent1 extends State {
  public scrollProgress = 0;
}


//
//   Component
//

@Component({
  selector: 'app-home-page',
  imports: [
    TimelineModule, 
    FieldsetModule,
    ButtonModule,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  protected readonly StateEntry = StateEntry;
  protected readonly StateIntro = StateIntro;

  //
  //   Interfaces
  //

  private readonly elementRef = inject(ElementRef);

  //
  //   Constants
  //

  protected readonly SCROLL_SPEED = 10;

  protected readonly ENTRY_DURATION = "4s";

  //
  //   Bindings
  //

  /**
   * Input bindings
   */

  // Observables

  protected readonly $wheelEvent = signal<WheelEvent | null>(null);
  private readonly wheelEvent$ = toObservable(this.$wheelEvent);

  // Combined latestl

  private readonly inputBindings = toSignal(combineLatest([
    this.wheelEvent$
  ]).pipe(
    throttleTime(16),
    map(([wheelEvent]) => ({ wheelEvent }))
  ));

  //
  //   State machine
  //

  protected readonly state = signal<State>(
    new StateEntry()
  );

  /**
   * State machine
   */

  private readonly stateMachine = effect(() => {
    console.log('stateMachine', this.state());

    switch (this.state().constructor.name) {
      case "StateEntry": {
        // lockScroll(this.elementRef, '#home-page-container');
        break;
      }
      case "StateIntro": {
        // lockScroll(this.elementRef, '#home-page-container');
        break;
      }
      case "StateContent1": {
        // unlockScroll(this.elementRef, '#home-page-container');
        break;
      }
    }
  });

  /**
   * Init
   */

  ngOnInit() {
    this.titleLinesScalingInit();
  }

  /**
   * State handlers
   */

  private readonly entryHandler = effect(() => {
    if (!this.state().is(StateEntry)) return;

    console.log('ENTRY', this.state());

    this.titleLinesTranslating(() => {
      this.state.set(new StateIntro());
    });
    this.titleContainerAppearing();
  });

  private readonly introHandler = effect(() => {
    const state = this.state() as StateIntro;

    if (!state.is(StateIntro)) return;

    const wheelEvent = this.inputBindings()?.wheelEvent;

    console.log('INTRO', this.state());
    console.log('INTRO', wheelEvent);

    if (!wheelEvent) return;

    const scrollSign = getScrollSign(wheelEvent);

    state.titleLinesScalingProgress = this.titleLinesScaling(
      scrollSign,
      state.titleLinesScalingProgress,
      () => {
        this.state.set(new StateContent1());
      }
    );
  });

  private readonly content1Handler = effect(() => {
    const state = this.state() as StateContent1;

    if (!state.is(StateContent1)) return;

    console.log('CONTENT1', this.state());

    const wheelEvent = this.inputBindings()?.wheelEvent;

    if (!wheelEvent) return;

    const scrollSign = getScrollSign(wheelEvent);

    state.scrollProgress+= scrollSign / this.SCROLL_SPEED;

    if (state.scrollProgress < 0) {
      this.state.set(new StateIntro(0.99));
    }
  });

  //
  //   Animations
  //

  /**
   * Entry animations
   */

  private titleLinesTranslating(endListener: () => void) {
    // Setting up parameters
    this.elementRef.nativeElement.querySelector(
      '#home-title-container'
    ).style.setProperty('--entry-duration', this.ENTRY_DURATION);

    // Updating the lines positions
    const lines = this.elementRef.nativeElement.querySelectorAll(
      '.home-title-line'
    )

    for (const line of lines) {
      line.classList.add('titleLinesTranslating');
    }

    // Adding end listener
    if (lines.length > 0) {
      lines[lines.length - 1].addEventListener('animationend', endListener);
    } else {
      // Error
    }
  }

  private titleContainerAppearing() {
    this.elementRef.nativeElement.querySelector(
      '#home-title-content'
    ).classList.add('titleContainerAppearing');
  }

  /**
   * Intro animations
   */

  private titleLinesScaling(step: number, progress: number, endListener: () => void): number {
    // Updating the entry progress
    const newProgress = Math.min(
      Math.max(
        0,
        progress + step / this.SCROLL_SPEED
      ),
      1
    );

    if (newProgress === 1) {
      endListener();
      return 1;
    }

    // Updating the lines styles
    this.elementRef.nativeElement.querySelector(
      '#home-title-container'
    ).style.setProperty('--intro-progress', newProgress);

    // Updating the state
    return newProgress;
  };

  //
  //   Other methods
  //

  private titleLinesScalingInit() {
    // Setting up parameters
    this.elementRef.nativeElement.querySelector(
      '#home-title-container'
    ).style.setProperty('--intro-progress', 0);

    // Updating the lines positions
    const lines = this.elementRef.nativeElement.querySelectorAll(
      '.home-title-line'
    )

    for (const line of lines) {
      line.classList.add('titleLinesScaling');
    }
  }

  protected projects(): Project[] {
    return environment.PROJECTS;
  }
}
