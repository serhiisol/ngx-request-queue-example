import { Injectable } from '@angular/core';

@Injectable()
export class QueueService {

  constructor() { }

  public queueStarted(): void {
    console.log('Queue started!');
  }

  public queueFinished(): void {
    console.log('Queue finished!');
  }
}
