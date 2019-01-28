import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
/**
 * redux modules imports
 */
import {RootStoreModule} from "./root-store/root-store.module";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

/**
 * components imports
 */
import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';


@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule, RootStoreModule, StoreDevtoolsModule.instrument({
        maxAge: 25
    })],
    declarations: [AppComponent, HelloComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
