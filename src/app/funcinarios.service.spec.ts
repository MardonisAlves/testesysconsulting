import { TestBed } from '@angular/core/testing';

import { FuncinariosService } from './Funcionarios.service';

describe('FuncinariosService', () => {
  let service: FuncinariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncinariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
