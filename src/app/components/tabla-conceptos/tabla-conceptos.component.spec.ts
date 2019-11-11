import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConceptosComponent } from './tabla-conceptos.component';

describe('TablaConceptosComponent', () => {
  let component: TablaConceptosComponent;
  let fixture: ComponentFixture<TablaConceptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaConceptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaConceptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
