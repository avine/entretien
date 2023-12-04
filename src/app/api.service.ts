import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ApiService {
  data = 'Hello';

  constructor(public router: Router) {}
}
