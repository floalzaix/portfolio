import { Component, inject, ElementRef, signal, DOCUMENT, Renderer2 } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Project } from '../../../models/project';
import { TimelineModule } from 'primeng/timeline';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

//
//   Component
//

@Component({
  selector: 'app-home-page',
  imports: [
    TimelineModule, 
    FieldsetModule,
    ButtonModule,
    ToastModule
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

  //
  //   Properties
  //
  
  protected isDarkMode = true;

  //
  //   Bindings
  //

  // Signals

  protected readonly language = signal<"en" | "fr">("en");

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

    if (this.isDarkMode) {
      this.renderer.removeClass(htmlElement, "dark-mode");
      this.isDarkMode = false;
    } else {
      this.renderer.addClass(htmlElement, "dark-mode");
      this.isDarkMode = true;
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
}
