import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from './message.service';

@Component({
  templateUrl: './message.component.html',
  styles: [
    '.message-row { margin-bottom: 10px }'
  ]
})
export class MessageComponent {
  get messages(): string[] {
    return this.messageService.messages;
  }

  constructor(private messageService: MessageService,
              private router: Router) { }

  close() {
    // Close the popup.
    
    this.messageService.isDisplayed=false
    this.router.navigate([{outlets: { popup: null }}])
  }
}
