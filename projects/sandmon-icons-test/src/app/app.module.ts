import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SandmonIconsModule} from '../../../sandmon-icons/src/component/sandmon-icons.module';
import {SandmonIconsService} from '../../../sandmon-icons/src/component/sandmon-icons.service';
import {sandmonIconsHome} from '../../../sandmon-icons/src/component/sandmon-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SandmonIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private sandmonService: SandmonIconsService) {
    this.sandmonService.registerIcons([
      sandmonIconsHome
    ]);
  }
}
