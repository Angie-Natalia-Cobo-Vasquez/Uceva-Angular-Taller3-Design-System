import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertData } from '../../../core/interfaces/core.interface';
import { IconAtom } from '../../atoms/icon/icon.atom';

/**
 * Alerta del Design System.
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design. Combina dos
 * `IconAtom` (icono informativo e icono de cierre) junto con un
 * mensaje de texto para construir una alerta descartable.
 */
@Component({
  selector: 'dsb-alert-molecule',
  templateUrl: './alert.molecule.html',
  imports: [IconAtom],
})
export class AlertMolecule {
  /**
   * Configuración de la alerta a renderizar.
   * @required
   */
  @Input({ required: true }) alertData!: AlertData;

  /**
   * Evento emitido cuando el usuario cierra la alerta.
   * @emits string Identificador de la alerta cerrada
   */
  @Output() closed: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Construye la clase CSS del contenedor de la alerta según su tipo.
   * @returns Clase Bootstrap de la alerta.
   */
  getClass(): string {
    return `alert-${this.alertData.type}`;
  }

  /**
   * Emite el evento `closed` con el identificador de la alerta.
   * @returns {void}
   */
  onClose(): void {
    this.closed.emit(this.alertData.id);
  }
}