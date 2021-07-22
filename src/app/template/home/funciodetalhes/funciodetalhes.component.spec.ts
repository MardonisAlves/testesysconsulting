import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunciodetalhesComponent } from './funciodetalhes.component';

describe('FunciodetalhesComponent', () => {
  let component: FunciodetalhesComponent;
  let fixture: ComponentFixture<FunciodetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunciodetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunciodetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
