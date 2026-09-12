import { Component } from '@angular/core';
import { 
  AlertData,
  AlertMolecule,
  ButtonGroupData, 
  ButtonGroupMolecule, 
  ContainerAtom, 
  NavLink, 
  NavLinkMolecule,
  UserInfoData,
  UserInfoMolecule,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './molecules.html',
  imports: [
    ContainerAtom,
    ButtonGroupMolecule,
    NavLinkMolecule,
    AlertMolecule,
    UserInfoMolecule,
  ],
})
export class Molecules {
  buttonsGroupData: ButtonGroupData[] = [
    { idButton: 'idButtonPrimary', type: 'primary', text: 'Text Primary' },
    { idButton: 'idButtonSecondary', type: 'secondary', text: 'Text Secondary' },
    { idButton: 'idButtonSuccess', type: 'success', text: 'Text Success' },
    { idButton: 'idButtonDanger', type: 'danger', text: 'Text Danger' },
    { idButton: 'idButtonWarning', type: 'warning', text: 'Text Warning' },
    { idButton: 'idButtonInfo', type: 'info', text: 'Text Info' },
    { idButton: 'idButtonLight', type: 'light', text: 'Text Light' },
    { idButton: 'idButtonDark', type: 'dark', text: 'Text Dark' },
  ];

  navLinks: NavLink[] = [
    { text: 'Link 1', url: '/atoms' },
    { text: 'Link 2', url: '/molecules' },
    { text: 'Link 3', url: '/organisms' },
  ];

  alerts: AlertData[] = [
    { id: 'alertSuccess', type: 'success', icon: 'check-circle', message: 'Cambios guardados correctamente.' },
    { id: 'alertWarning', type: 'warning', icon: 'exclamation-triangle', message: 'Revisa los campos antes de continuar.' },
  ];

  userInfos: UserInfoData[] = [
  { initials: 'AC', name: 'Angie Cobo', role: 'Frontend Developer', avatarColor: 'info' },
  { initials: 'SO', name: 'Santiago Ospina', role: 'Backend Developer', avatarColor: 'success' },
];
  
  onClick(idButton: string){
    alert(`Click en el Boton de Grupo ${idButton}`);
  }

  onCloseAlert(id: string){
    alert(`Cerraste la alerta ${id}`);
  }
}