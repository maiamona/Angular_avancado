import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  @Input() passo = 1;
  @Input() min = 0;
  @Input() max = 100;

  @Input() alterado = new EventEmitter<number>();

  valor = 0;
  foco: boolean;

  incrementar() {
    if (this.valor < this.max) {
      this.valor += this.passo;
      this.alterado.emit(this.valor)
    }
  }

  decrementar() {
    if (this.valor > this.min) {
      this.valor -= this.passo;
      this.alterado.emit(this.valor)
    }
  }

  onBlur(event: FocusEvent) {
    this.foco = false;
    event.preventDefault();
    event.stopPropagation();
  }

  onkeyUp(event: KeyboardEvent) {
    const handlers = {
      ArrowDown: () => this.decrementar(),
      ArrowUp: () => this.incrementar()
    };

    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  onFocus(event: FocusEvent) {
    this.foco = true;
    event.preventDefault();
    event.stopPropagation();
  }
}
