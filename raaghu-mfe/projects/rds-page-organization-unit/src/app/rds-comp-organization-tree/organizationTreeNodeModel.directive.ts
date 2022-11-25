import {
    Directive,
    ElementRef,
    Input,
    OnInit,
    Output,
    Renderer2,
    EventEmitter,
    HostListener,
  } from '@angular/core';
  import { FormGroup, FormControl, Validators, FormBuilder, RequiredValidator } from '@angular/forms';
  @Directive({
    selector: '[nestGroup]',
  })
  export class OrganizationTreeDirective implements OnInit {
    constructor(private el: ElementRef, private renderer: Renderer2) {}
    ngOnInit(): void {
      this.renderer.addClass(this.el.nativeElement, 'd-none');
        this.nestGroup.addEventListener('mouseenter', () => {
            this.renderer.removeClass(this.el.nativeElement, 'd-none');
        })
        this.nestGroup.addEventListener('mouseleave', () => {
          this.renderer.addClass(this.el.nativeElement, 'd-none');
        });
    }
  
      @Input() nestGroup: HTMLElement;
      @Output() addNestedElement = new EventEmitter<void>();
      
      @HostListener('click') open() {
          this.addNestedElement.emit()
      }
  
  }
  