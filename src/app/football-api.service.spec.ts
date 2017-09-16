import { TestBed, inject } from '@angular/core/testing';

import { FootballApiService } from './football-api.service';

describe('FootballApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballApiService]
    });
  });

  it('should ...', inject([FootballApiService], (service: FootballApiService) => {
    expect(service).toBeTruthy();
  }));
});
