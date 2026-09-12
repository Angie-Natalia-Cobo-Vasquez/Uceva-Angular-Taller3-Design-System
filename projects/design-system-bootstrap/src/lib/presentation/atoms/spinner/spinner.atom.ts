import { Component, Input } from '@angular/core';
import { SpinnerSize, Themes } from '../../../core/interfaces/core.interface';

/**
 * Spinner atómico del Design System.
 *
 * @description
 * Indicador visual de carga basado en Bootstrap. Se utiliza para
 * comunicar procesos en curso dentro de botones, formularios o
 * secciones completas.
 *
 * @example
 * ```html
 * <dsb-spinner-atom type="primary" size="sm"></dsb-spinner-atom>
 * ```
 */
@Component({
  selector: 'dsb-spinner-atom',
  template: `
    <div class="spinner-border" [class]="getClass()" role="status">
      <span class="visually-hidden">Cargando...</span>
    </div>`,
})
export class SpinnerAtom {
  /** Color del spinner. @defaultValue 'primary' */
  @Input() type: Themes = 'primary';

  /**
   * Tamaño del spinner.
   * @remarks `'sm'` aplica la clase `spinner-border-sm`.
   * @defaultValue 'normal'
   */
  @Input() size: SpinnerSize = 'normal';

  /**
   * Construye las clases CSS del spinner según el color y tamaño.
   * @returns Cadena con las clases CSS aplicadas.
   */
  getClass(): string {
    return `text-${this.type} ${this.size === 'sm' ? 'spinner-border-sm' : ''}`.trim();
  }
}