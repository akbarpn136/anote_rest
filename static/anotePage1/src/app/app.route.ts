/**
 * Created by USER on 2/20/2017.
 */
import {Route, RouterModule} from '@angular/router';
import {DaftarCatatanComponent} from "./kegiatan-catatan/daftar-catatan/daftar-catatan.component";
import {LoginComponent} from "./login/login.component";
import {GuardAuthorizeService} from "./services/guard-authorize.service";

const APP_ROUTES: Route[] = [
    {path: 'masuk', component: LoginComponent, canActivate:[GuardAuthorizeService]},
    {path: '', component: DaftarCatatanComponent},
    {path: '**', redirectTo:'', pathMatch:'full'},
];

export const route = RouterModule.forRoot(APP_ROUTES);
