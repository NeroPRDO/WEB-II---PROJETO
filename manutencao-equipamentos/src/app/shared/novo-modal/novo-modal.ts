import { Component, EventEmitter, Output, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './novo-modal.html',
  styleUrls: ['./novo-modal.css']
})
export class ModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();

  onClose() {
    this.closeModalEvent.emit();
  }
}
