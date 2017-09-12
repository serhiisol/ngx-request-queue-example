import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      NgxRequestProgress
    </h1>

    <button class="btn btn-primary" (click)="do()">
      Do
    </button>
  `
})
export class AppComponent {

  constructor(private dataService: DataService) {}

  public do(): void {
    this.dataService.first().subscribe();
    this.dataService.second().subscribe(() => {
      this.dataService.third().subscribe();
    });
  }

}
