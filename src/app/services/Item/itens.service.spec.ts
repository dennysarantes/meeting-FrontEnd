/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItensService } from './itens.service';

describe('Service: Itens', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItensService]
    });
  });

  it('should ...', inject([ItensService], (service: ItensService) => {
    expect(service).toBeTruthy();
  }));
});
