import { ChangeDetectionStrategy, Component, computed, signal, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface SelectOption {
  value: string | number;
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template:"./simple-select.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  @Input() label: string = 'Selecione um valor';
  @Input() options: SelectOption[] = [];
  @Output() selectionChange = new EventEmitter<string | number>();

  selectedValue = signal<string | number | null>(null);

  onSelectionChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValueString = selectElement.value;

    const selectedOption = this.options.find(opt => opt.value.toString() === selectedValueString);
    const originalValue = selectedOption ? selectedOption.value : selectedValueString;

    this.selectedValue.set(originalValue);
    this.selectionChange.emit(originalValue);
  }
}

