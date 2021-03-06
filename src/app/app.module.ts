import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DealerComponent } from './dealear/dealer.component';
import { ButtonComponent } from './common/component/button/button.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { DealerService } from './service/dealer';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DealerComponent,
    ButtonComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })

  ],
  providers: [DealerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
