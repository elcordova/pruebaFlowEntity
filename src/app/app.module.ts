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
import { CurrentListComponent } from './components/current-list/current-list.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule, RootStoreModule, StoreDevtoolsModule.instrument({
        maxAge: 25
    })],
    declarations: [AppComponent, HelloComponent, CurrentListComponent, ItemComponent, ListComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
