import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecensioniarticoloComponent } from './recensioniarticolo.component';

describe('RecensioniarticoloComponent', () => {
  let component: RecensioniarticoloComponent;
  let fixture: ComponentFixture<RecensioniarticoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecensioniarticoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecensioniarticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
