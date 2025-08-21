import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionService } from '../../../services/intersection.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('scrollElement') scrollElements!: QueryList<ElementRef>;
  
  private subscription = new Subscription();

  // Carousel state
  currentSlide: number = 0;
  slides: number[] = [0, 1, 2];
  private autoRotateHandle: any = null;
  private readonly autoRotateMs: number = 6000;

  constructor(
    private intersectionService: IntersectionService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    // Component initialization logic
  }

  ngAfterViewInit(): void {
    // Set up intersection observers for scroll animations
    this.setupScrollAnimations();
    // Start carousel auto-rotation
    this.startAutoRotate();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.intersectionService.disconnect();
    if (this.autoRotateHandle) {
      clearInterval(this.autoRotateHandle);
    }
  }

  private setupScrollAnimations(): void {
    // Wait for the next tick to ensure all elements are rendered
    setTimeout(() => {
      this.scrollElements.forEach((elementRef, index) => {
        const element = elementRef.nativeElement;
        element.classList.add('fade-in-on-scroll');
        
        // Add staggered delay for better visual effect
        element.style.transitionDelay = `${index * 0.1}s`;
        
        this.subscription.add(
          this.intersectionService.observeElement(element, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
          }).subscribe()
        );
      });
    });
  }

  // Carousel controls
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index % this.slides.length;
    this.restartAutoRotate();
  }

  private startAutoRotate(): void {
    this.autoRotateHandle = setInterval(() => this.nextSlide(), this.autoRotateMs);
  }

  private restartAutoRotate(): void {
    if (this.autoRotateHandle) {
      clearInterval(this.autoRotateHandle);
    }
    this.startAutoRotate();
  }
}
