import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTrabajoComponent } from './orden-trabajo.component';

describe('OrdenTrabajoComponent', () => {
  let component: OrdenTrabajoComponent;
  let fixture: ComponentFixture<OrdenTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
