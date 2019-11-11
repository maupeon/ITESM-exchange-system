import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteFacturaComponent } from './reporte-factura.component';

describe('ReporteFacturaComponent', () => {
  let component: ReporteFacturaComponent;
  let fixture: ComponentFixture<ReporteFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
