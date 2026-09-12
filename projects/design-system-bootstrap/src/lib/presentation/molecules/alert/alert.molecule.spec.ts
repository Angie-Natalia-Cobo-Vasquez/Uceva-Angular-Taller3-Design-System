import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlertData } from '../../../core/interfaces/core.interface';
import { AlertMolecule } from './alert.molecule';

const MOCK_ALERT: AlertData = { id: 'alert-1', type: 'success', icon: 'check-circle', message: 'Operación exitosa' };

describe('AlertMolecule', () => {
  let component: AlertMolecule;
  let fixture: ComponentFixture<AlertMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AlertMolecule] }).compileComponents();
    fixture = TestBed.createComponent(AlertMolecule);
    component = fixture.componentInstance;
    component.alertData = MOCK_ALERT;
    fixture.detectChanges();
  });

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia mostrar el mensaje recibido', () => {
    expect(fixture.nativeElement.textContent).toContain(MOCK_ALERT.message);
  });

  it('Deberia aplicar la clase segun el tipo', () => {
    expect(component.getClass()).toBe('alert-success');
  });

  it('Deberia emitir el id de la alerta al cerrar', () => {
    const spy = jest.spyOn(component.closed, 'emit');
    component.onClose();
    expect(spy).toHaveBeenCalledWith(MOCK_ALERT.id);
  });

  it('Deberia renderizar dos iconos (informativo y de cierre)', () => {
    const icons = fixture.debugElement.queryAll(By.css('dsb-icon-atom'));
    expect(icons.length).toBe(2);
  });
});