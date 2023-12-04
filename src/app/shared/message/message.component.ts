import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements OnInit, OnDestroy {
  @Input() text = '';

  ngOnInit(): void {
    console.log('INIT message');
  }

  ngOnDestroy(): void {
    console.log('DESTROY message');
  }
}
