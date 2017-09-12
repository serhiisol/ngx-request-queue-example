import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { QUEUE_SERVICE, QueueModule } from 'ngx-request-queue';

import { QueueService } from './queue.service';
import { DataService } from './data.service';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    QueueModule
  ],
  providers: [
    { provide: QUEUE_SERVICE, useClass: QueueService },
    DataService
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
