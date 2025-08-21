import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

@Injectable({
  providedIn: 'root'
})
export class IntersectionService {
  private observer: IntersectionObserver | null = null;
  private elementStates = new Map<Element, BehaviorSubject<boolean>>();

  constructor(private ngZone: NgZone) {}

  public observeElement(
    element: Element,
    options: IntersectionOptions = {}
  ): Observable<boolean> {
    const defaultOptions: IntersectionObserverInit = {
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
      threshold: options.threshold || 0.1,
    };

    if (!this.observer) {
      this.observer = new IntersectionObserver(
        (entries) => {
          this.ngZone.run(() => {
            entries.forEach((entry) => {
              const stateSubject = this.elementStates.get(entry.target);
              if (stateSubject) {
                stateSubject.next(entry.isIntersecting);
                
                // Add visible class for animations
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                }
              }
            });
          });
        },
        defaultOptions
      );
    }

    // Create a new BehaviorSubject for this element
    const stateSubject = new BehaviorSubject<boolean>(false);
    this.elementStates.set(element, stateSubject);

    // Start observing
    this.observer.observe(element);

    return stateSubject.asObservable();
  }

  public unobserveElement(element: Element): void {
    if (this.observer) {
      this.observer.unobserve(element);
      this.elementStates.delete(element);
    }
  }

  public disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
      this.elementStates.clear();
    }
  }

  public isElementVisible(element: Element): boolean {
    const stateSubject = this.elementStates.get(element);
    return stateSubject ? stateSubject.value : false;
  }
}
