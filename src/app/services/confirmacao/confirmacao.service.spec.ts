/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfirmacaoService } from './confirmacao.service';

describe('Service: Confirmacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmacaoService]
    });
  });

  it('should ...', inject([ConfirmacaoService], (service: ConfirmacaoService) => {
    expect(service).toBeTruthy();
  }));
});
