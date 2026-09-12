import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerAtom } from './spinner.atom';

describe('SpinnerAtom', () => {
  let component: SpinnerAtom;
  let fixture: ComponentFixture<SpinnerAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SpinnerAtom] }).compileComponents();
    fixture = TestBed.createComponent(SpinnerAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia aplicar el color recibido', () => {
    component.type = 'danger';
    expect(component.getClass()).toContain('text-danger');
  });

  it('Deberia aplicar la clase de tamaño pequeño', () => {
    component.size = 'sm';
    expect(component.getClass()).toContain('spinner-border-sm');
  });

  it('No deberia aplicar clase de tamaño cuando es normal', () => {
    component.size = 'normal';
    expect(component.getClass()).not.toContain('spinner-border-sm');
  });

  it('Deberia usar los valores por defecto', () => {
    expect(component.type).toBe('primary');
    expect(component.size).toBe('normal');
  });
});