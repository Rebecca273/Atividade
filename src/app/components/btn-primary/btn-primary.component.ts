import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = "primary" | "secundary";

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.scss']  // Corrigido para styleUrls
})
export class BtnPrimaryComponent {
  
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";
  @Output("submit") onSubmit = new EventEmitter<void>();
  
  submit() {
    this.onSubmit.emit();
  }
}
