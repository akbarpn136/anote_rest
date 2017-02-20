/**
 * Created by USER on 2/20/2017.
 */
import {Route, RouterModule} from '@angular/router';
import {DaftarCatatanComponent} from "./kegiatan-catatan/daftar-catatan/daftar-catatan.component";
import {LoginComponent} from "./login/login.component";

const APP_ROUTES: Route[] = [
    {path: 'masuk', component: LoginComponent},
    {path: '', component: DaftarCatatanComponent},
    {path: '**', redirectTo:'', pathMatch:'full'},
];

export const route = RouterModule.forRoot(APP_ROUTES);
