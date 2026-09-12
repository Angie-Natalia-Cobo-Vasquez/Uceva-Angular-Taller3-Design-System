import { Component, Input } from '@angular/core';
import { Themes } from '../../../core/interfaces/core.interface';

/**
 * Avatar atómico del Design System.
 *
 * @description
 * Representa un avatar circular que muestra las iniciales
 * de un usuario sobre un fondo de color configurable.
 * Se utiliza como identificador visual dentro de moléculas
 * y organismos (p. ej. tarjetas de perfil).
 *
 * @example
 * ```html
 * <dsb-avatar-atom initials="JD" [size]="3" color="primary"></dsb-avatar-atom>
 * ```
 */
@Component({
  selector: 'dsb-avatar-atom',
  template: `
    <span
      class="d-inline-flex align-items-center justify-content-center rounded-circle text-white fw-bold"
      [class]="'bg-' + color"
      [style.width]="size + 'rem'"
      [style.height]="size + 'rem'"
      [style.fontSize]="(size / 2.2) + 'rem'">
      {{ initials }}
    </span>`,
})
export class AvatarAtom {
  /**
   * Iniciales del usuario que se muestran dentro del avatar.
   *
   * @remarks Se recomienda utilizar máximo 2 caracteres.
   * @required
   */
  @Input({ required: true }) initials: string = '';

  /**
   * Tamaño del avatar en unidades `rem`.
   * @defaultValue 3
   */
  @Input() size: number = 3;

  /**
   * Color de fondo del avatar.
   * @remarks Corresponde a los colores de Bootstrap (`primary`, `success`, etc.).
   * @defaultValue 'primary'
   */
  @Input() color: Themes = 'primary';
}