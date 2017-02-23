/**
 * Created by USER on 2/20/2017.
 */
import {Route, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {GuardAuthorizeService} from "./services/guard-authorize.service";

const APP_ROUTES: Route[] = [
    {path: 'masuk', component: LoginComponent, canActivate:[GuardAuthorizeService]},
    {path: '**', redirectTo:'', pathMatch:'full'},
];

export const route = RouterModule.forRoot(APP_ROUTES);
