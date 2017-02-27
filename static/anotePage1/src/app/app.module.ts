import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MunculiniDirective} from './an-directive/munculini.directive';
import {MunculituDirective} from './an-directive/munculitu.directive';
import {KegiatanCatatanComponent} from './kegiatan-catatan/kegiatan-catatan.component';
import {DaftarKegiatanComponent} from './kegiatan-catatan/daftar-kegiatan/daftar-kegiatan.component';
import {DaftarCatatanComponent} from './kegiatan-catatan/daftar-catatan/daftar-catatan.component';
import {PaginationComponent} from './pagination/pagination.component';
import {route} from './app.route';
import { LoginComponent } from './login/login.component';

import {GuardAuthorizeService} from "./services/guard-authorize.service";
import { CatatanComponent } from './kegiatan-catatan/daftar-catatan/catatan.component';
import { TambahKegiatanComponent } from './kegiatan-catatan/daftar-kegiatan/tambah-kegiatan.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MunculiniDirective,
        MunculituDirective,
        KegiatanCatatanComponent,
        DaftarKegiatanComponent,
        DaftarCatatanComponent,
        PaginationComponent,
        LoginComponent,
        CatatanComponent,
        TambahKegiatanComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        route
    ],
    providers: [GuardAuthorizeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
