import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'entretien';

  data = this.apiService.data;

  visible = false;

  toggleVisible() {
    this.visible = !this.visible;
  }

  constructor(private apiService: ApiService) {}
}
