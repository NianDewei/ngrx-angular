import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// NGRX
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';

import { AppComponent } from './app.component';
import { SonComponent } from './counter/son/son.component';
import { GrandchildComponent } from './counter/grandchild/grandchild.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, SonComponent, GrandchildComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      // autoPause: true,
      // features: {
      //   pause: false,
      //   lock: true,
      //   persist: true,
      // },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
