import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonGroupData, UserInfoData } from '../../../core/interfaces/core.interface';
import { ButtonGroupMolecule } from '../../molecules/button-group/button-group.molecule';
import { UserInfoMolecule } from '../../molecules/user-info/user-info.molecule';

/**
 * Perfil de usuario con acciones disponibles.
 *
 * @description
 * Componente tipo **Organismo** según Atomic Design. Combina la molécula
 * de información de usuario con la molécula de acciones para formar una
 * sección funcional reutilizable.
 */
@Component({
  selector: 'dsb-profile-organism',
  templateUrl: './profile.organism.html',
  imports: [UserInfoMolecule, ButtonGroupMolecule],
})
export class ProfileOrganism {
  /** Información de identidad que se mostrará en el perfil. */
  @Input({ required: true }) userInfo!: UserInfoData;

  /** Acciones que estarán disponibles para el usuario. */
  @Input() actions: ButtonGroupData[] = [];

  /** Identificador de la acción seleccionada. */
  @Output() actionSelected = new EventEmitter<string>();

  /** Reenvía al consumidor la acción seleccionada por la molécula. */
  onActionSelected(idButton: string): void {
    this.actionSelected.emit(idButton);
  }
}
