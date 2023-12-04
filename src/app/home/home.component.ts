import { Component, Optional } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(@Optional() public adminService?: AdminService) {}
}
