import { Component } from '@angular/core';
import {
  ButtonGroupData,
  ContainerAtom,
  NavbarConfig,
  NavbarOrganism,
  ProfileOrganism,
  UserInfoData,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.html',
  imports: [NavbarOrganism, ProfileOrganism, ContainerAtom],
})
export class Organisms {
  navbarConfig: NavbarConfig = {
    title: 'Taller Sistema de Diseño',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Átomos', url: '/atoms' },
      { text: 'Moléculas', url: '/molecules' },
      { text: 'Organismos', url: '/organisms' },
    ]
  };

  userInfo: UserInfoData = {
    initials: 'AC',
    name: 'Angie Cobo',
    role: 'Frontend Developer',
    avatarColor: 'info',
  };

  profileActions: ButtonGroupData[] = [
    { idButton: 'editProfile', type: 'primary', text: 'Editar perfil' },
    { idButton: 'viewActivity', type: 'secondary', text: 'Ver actividad' },
  ];

  onProfileAction(idButton: string): void {
    alert(`Acción seleccionada: ${idButton}`);
  }
}
