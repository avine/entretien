import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MessageComponent, ListComponent],
  exports: [ListComponent, MessageComponent],
})
export class SharedModule {}
