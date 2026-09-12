import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarAtom } from './avatar.atom';

describe('AvatarAtom', () => {
  let component: AvatarAtom;
  let fixture: ComponentFixture<AvatarAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AvatarAtom] }).compileComponents();
    fixture = TestBed.createComponent(AvatarAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia mostrar las iniciales recibidas', () => {
    component.initials = 'JD';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('span').textContent).toContain('JD');
  });

  it('Deberia aplicar el color de fondo recibido', () => {
    component.color = 'success';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('span').className).toContain('bg-success');
  });

  it('Deberia aplicar el tamaño recibido', () => {
    component.size = 5;
    fixture.detectChanges();
    const span = fixture.nativeElement.querySelector('span');
    expect(span.style.width).toBe('5rem');
    expect(span.style.height).toBe('5rem');
  });

  it('Deberia usar los valores por defecto', () => {
    expect(component.size).toBe(3);
    expect(component.color).toBe('primary');
  });
});