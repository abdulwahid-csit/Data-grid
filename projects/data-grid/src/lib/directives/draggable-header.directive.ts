import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

export interface DragMoveEvent {
  event: MouseEvent;
  data: any;
}

@Directive({
  selector: '[appDraggableHeader]',
})
export class DraggableHeaderDirective {
  @Input() column: any;
  @Input() headerName: string = '';

  @Output() dragStart = new EventEmitter<any>();
  @Output() dragMove = new EventEmitter<any>();
  @Output() dragEnd = new EventEmitter<any>();

  private isDragging = false;
  private placeholderEl: HTMLElement | null = null;
  private previewEl: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  startX = 0;
  startY = 0;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.button !== 0) return;
    let target = event.target as HTMLElement;
    const classes = target.classList;
    debugger
    if ((event.target as HTMLElement).classList.contains('three-dots')) return;
      this.startX = event.clientX;
    this.startY = event.clientY;
    this.isDragging = false;

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent) => {
    debugger
    const moveX = Math.abs(event.clientX - this.startX - 10);
    const moveY = Math.abs(event.clientY - this.startY - 10);
    if (!this.isDragging && (moveX > 1 || moveY > 1)) {
      this.startDragging(event);
    }

    if (this.isDragging && this.previewEl) {
      this.renderer.setStyle(this.previewEl, 'top', `${event.pageY + 10}px`);
      this.renderer.setStyle(this.previewEl, 'left', `${event.pageX + 10}px`);

      // Find the element under cursor (hovered element)
      const hoveredElement = document.elementFromPoint(
        event.clientX,
        event.clientY
      );

      this.dragMove.emit({
        event,
        column: this.column,
        hoveredElement,
      });
    }
  };

  onMouseUp = (event: MouseEvent) => {
    if (!this.isDragging) return;
    this.isDragging = false;

    this.dragEnd.emit({ column: this.column, event });

    if (this.previewEl) {
      this.renderer.removeChild(document.body, this.previewEl);
      this.previewEl = null;
    }

    if (this.placeholderEl) {
      const parent = this.placeholderEl.parentNode;
      if (parent) {
        parent.replaceChild(this.el.nativeElement, this.placeholderEl);
      }
      this.placeholderEl = null;
    }

    // Reset the cursor
    this.resetCursor();

    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  private originalCursor: string | null = null;

  private setCursor(cursorStyle: string) {
    this.renderer.setStyle(document.body, 'cursor', cursorStyle);
  }

  private resetCursor() {
    this.renderer.setStyle(document.body, 'cursor', this.originalCursor || '');
  }

  private startDragging(event: MouseEvent) {
    this.isDragging = true;

    // Store original cursor (optional fallback)
    this.originalCursor = getComputedStyle(document.body).cursor;

    // Set cursor to grabbing
    this.setCursor('move');

    // --- Clone the element as a placeholder ---
    this.placeholderEl = this.el.nativeElement.cloneNode(true) as HTMLElement;
    this.renderer.setStyle(this.placeholderEl, 'opacity', '0.5');
    this.renderer.setStyle(this.placeholderEl, 'pointer-events', 'none');
    this.renderer.addClass(this.placeholderEl, 'drag-placeholder');

    const parent = this.el.nativeElement.parentNode;
    parent.replaceChild(this.placeholderEl, this.el.nativeElement);

    // --- Create floating preview ---
    this.previewEl = this.renderer.createElement('div');
    this.renderer.setStyle(this.previewEl, 'position', 'absolute');
    this.renderer.setStyle(this.previewEl, 'top', `${event.pageY + 10}px`);
    this.renderer.setStyle(this.previewEl, 'left', `${event.pageX + 10}px`);
    this.renderer.setStyle(this.previewEl, 'pointer-events', 'none');
    this.renderer.setStyle(this.previewEl, 'z-index', '1000');
    this.renderer.setStyle(this.previewEl, 'max-width', '200px');
    this.renderer.setStyle(this.previewEl, 'padding', '8px');
    this.renderer.setStyle(this.previewEl, 'border', '1px solid #ccc');
    this.renderer.setStyle(this.previewEl, 'background-color', '#fff');
    this.renderer.setStyle(
      this.previewEl,
      'box-shadow',
      '0 2px 6px rgba(0,0,0,0.2)'
    );
    this.renderer.setStyle(this.previewEl, 'border-radius', '4px');
    this.renderer.setStyle(this.previewEl, 'display', 'flex');
    this.renderer.setStyle(this.previewEl, 'align-items', 'center');
    this.renderer.setStyle(this.previewEl, 'gap', '8px');
    this.renderer.setStyle(this.previewEl, 'font-weight', '500');
    this.renderer.setStyle(this.previewEl, 'white-space', 'nowrap');

    const icon = this.renderer.createElement('span');
    this.renderer.setStyle(icon, 'font-size', '16px');
    this.renderer.setStyle(icon, 'user-select', 'none');
    this.renderer.setProperty(icon, 'innerText', '≡');

    const text = this.renderer.createElement('span');
    this.renderer.setProperty(text, 'innerText', this.headerName || 'Dragging');

    this.renderer.appendChild(this.previewEl, icon);
    this.renderer.appendChild(this.previewEl, text);
    this.renderer.appendChild(document.body, this.previewEl);

    this.dragStart.emit({ column: this.column, event });
  }

  public overrideCursor(style: string) {
    this.setCursor(style);
  }
}
