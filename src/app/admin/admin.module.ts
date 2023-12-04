import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SecretComponent } from './secret/secret.component';

@NgModule({
  declarations: [AdminComponent, SecretComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export default class AdminModule {}
