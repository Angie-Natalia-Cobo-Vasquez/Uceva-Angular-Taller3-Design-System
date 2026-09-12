import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonGroupMolecule } from '../../molecules/button-group/button-group.molecule';
import { UserInfoMolecule } from '../../molecules/user-info/user-info.molecule';
import { ProfileOrganism } from './profile.organism';

const userInfo = {
  initials: 'AC',
  name: 'Angie Cobo',
  role: 'Frontend Developer',
  avatarColor: 'info' as const,
};

const actions = [
  { idButton: 'edit', type: 'primary' as const, text: 'Editar' },
  { idButton: 'logout', type: 'secondary' as const, text: 'Salir' },
];

describe('ProfileOrganism', () => {
  let component: ProfileOrganism;
  let fixture: ComponentFixture<ProfileOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileOrganism, UserInfoMolecule, ButtonGroupMolecule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileOrganism);
    component = fixture.componentInstance;
    component.userInfo = userInfo;
    component.actions = actions;
    fixture.detectChanges();
  });

  it('debería crear el organismo', () => {
    expect(component).toBeTruthy();
  });

  it('debería pasar la información a la molécula de usuario', () => {
    const userInfoElement = fixture.debugElement.query(By.css('dsb-user-info-molecule'));

    expect(userInfoElement.componentInstance.userInfo).toEqual(userInfo);
  });

  it('debería pasar las acciones a la molécula de botones', () => {
    const buttonGroupElement = fixture.debugElement.query(By.css('dsb-button-group-molecule'));

    expect(buttonGroupElement.componentInstance.buttonsGroupData).toEqual(actions);
  });

  it('debería emitir la acción seleccionada', () => {
    const selectedAction = jest.fn();
    component.actionSelected.subscribe(selectedAction);

    component.onActionSelected('edit');

    expect(selectedAction).toHaveBeenCalledWith('edit');
  });
});
