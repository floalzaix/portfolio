import { Component, inject, signal, DOCUMENT, Renderer2, HostListener } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Project } from '../../../models/project';
import { TimelineModule } from 'primeng/timeline';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HomeTitleAnimation } from "../../../directives/animations/home-title-animation";
import { VLineAnimation } from "../../../directives/animations/v-line-animation";
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, shareReplay } from 'rxjs';
import { MenuAnimation } from "../../../directives/animations/menu-animation";
import { ContentAnimation } from "../../../directives/animations/content-animation";

//
//   Component
//

@Component({
  selector: 'app-home-page',
  imports: [
    TimelineModule,
    FieldsetModule,
    ButtonModule,
    ToastModule,
    HomeTitleAnimation,
    VLineAnimation,
    DividerModule,
    DialogModule,
    MenuAnimation,
    ContentAnimation
],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  providers: [MessageService],  
})
export class HomePage {
  //
  //   Interfaces
  //

  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  private readonly messageService = inject(MessageService);
  private readonly breakpointObserver = inject(BreakpointObserver);

  //
  //   Properties
  //
  
  protected isDarkMode = signal<boolean>(true);
  protected isFullScreen = signal<boolean>(false);

  //
  //   Bindings
  //

  // Signals

  protected readonly language = signal<"en" | "fr">("en");
  protected readonly isLegalDialogVisible = signal<boolean>(false);

  //
  //   Listeners
  //

  @HostListener('document:fullscreenchange', ['$event'])
  onFullScreenChange(event: Event) {
    this.isFullScreen.set(!!document.fullscreenElement);
  }

  protected isHandset = toSignal(this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
  ));


  //
  //   Other methods
  //

  /**
   * Gets the projects list according to the language
   * 
   * @returns The projects list
   */
  protected projects(): Project[] {
    return this.language() === 'en' ? (
      environment.PROJECTS_EN
    ) : (
      environment.PROJECTS_FR
    );
  }

  // Actions methods bindings

  protected toggleTheme() {
    const htmlElement = this.document.querySelector("html");
    if (!htmlElement) return;

    if (this.isDarkMode()) {
      this.renderer.removeClass(htmlElement, "dark-mode");
      this.isDarkMode.set(false);
    } else {
      this.renderer.addClass(htmlElement, "dark-mode");
      this.isDarkMode.set(true);
    }
  }
  
  protected copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    .then(() => {
      this.messageService.add({ 
        severity: 'success',
        summary: this.language() === 'en' ? 
        'Copied to clipboard' : 'Copié dans le presse-papiers',
        detail: text,
      });
    })
    .catch(() => {
      this.messageService.add({
        severity: 'error',
        summary: this.language() === 'en' ? 
        'Error' : 'Erreur',
        detail: this.language() === 'en' ? 
        'Failed to copy to clipboard' : 
        'Erreur lors de la copie dans le presse-papiers',
      });
    });
  }

  protected openFullScreen(e: HTMLElement) {
    if (e.requestFullscreen) {
      e.requestFullscreen();
    }
  }

  protected closeFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
