import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTrabajoDetalleComponent } from './orden-trabajo-detalle.component';

describe('OrdenTrabajoDetalleComponent', () => {
  let component: OrdenTrabajoDetalleComponent;
  let fixture: ComponentFixture<OrdenTrabajoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenTrabajoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenTrabajoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
