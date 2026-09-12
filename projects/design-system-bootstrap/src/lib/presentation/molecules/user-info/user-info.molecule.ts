import { Component, Input } from '@angular/core';
import { UserInfoData } from '../../../core/interfaces/core.interface';
import { AvatarAtom } from '../../atoms/avatar/avatar.atom';

/**
 * Información de usuario del Design System.
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design. Combina un
 * `AvatarAtom` con el nombre y rol del usuario para construir
 * un bloque de identidad reutilizable en organismos.
 */
@Component({
  selector: 'dsb-user-info-molecule',
  templateUrl: './user-info.molecule.html',
  imports: [AvatarAtom],
})
export class UserInfoMolecule {
  /** Datos del usuario a mostrar. @required */
  @Input({ required: true }) userInfo!: UserInfoData;
}