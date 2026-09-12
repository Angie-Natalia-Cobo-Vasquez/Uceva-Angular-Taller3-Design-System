import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserInfoData } from '../../../core/interfaces/core.interface';
import { AvatarAtom } from '../../atoms/avatar/avatar.atom';
import { UserInfoMolecule } from './user-info.molecule';

const MOCK_USER: UserInfoData = { initials: 'JD', name: 'Jane Doe', role: 'Desarrolladora Frontend', avatarColor: 'info' };

describe('UserInfoMolecule', () => {
  let component: UserInfoMolecule;
  let fixture: ComponentFixture<UserInfoMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [UserInfoMolecule] }).compileComponents();
    fixture = TestBed.createComponent(UserInfoMolecule);
    component = fixture.componentInstance;
    component.userInfo = MOCK_USER;
    fixture.detectChanges();
  });

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia mostrar el nombre y el rol del usuario', () => {
    expect(fixture.nativeElement.textContent).toContain(MOCK_USER.name);
    expect(fixture.nativeElement.textContent).toContain(MOCK_USER.role);
  });

  it('Deberia renderizar el AvatarAtom con las iniciales correctas', () => {
    const avatar = fixture.debugElement.query(By.directive(AvatarAtom));
    expect(avatar.componentInstance.initials).toBe(MOCK_USER.initials);
  });

  it('Deberia usar el color por defecto cuando no se especifica avatarColor', () => {
    component.userInfo = { initials: 'AB', name: 'Ana', role: 'QA' };
    fixture.detectChanges();
    const avatar = fixture.debugElement.query(By.directive(AvatarAtom));
    expect(avatar.componentInstance.color).toBe('primary');
  });
});