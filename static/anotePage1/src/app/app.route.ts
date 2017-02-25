/**
 * Created by USER on 2/20/2017.
 */
import {Route, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {GuardAuthorizeService} from "./services/guard-authorize.service";
import {DaftarCatatanComponent} from "./kegiatan-catatan/daftar-catatan/daftar-catatan.component";
import {CatatanComponent} from "./kegiatan-catatan/daftar-catatan/catatan.component";

const APP_ROUTES: Route[] = [
    {path: 'masuk', component: LoginComponent, canActivate:[GuardAuthorizeService]},
    {path: 'kegiatan', component: CatatanComponent, children: [
        {path: ':id', component: DaftarCatatanComponent}
    ]},
    {path: '', redirectTo:'kegiatan', pathMatch:'full'},
    {path: '**', redirectTo:'kegiatan', pathMatch:'full'},
];

export const route = RouterModule.forRoot(APP_ROUTES);
