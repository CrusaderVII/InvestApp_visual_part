import {Routes} from '@angular/router'
import { RegistrationComponent } from './login/registration.component';
import { IssuerComponent } from './issuer/issuer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'register',
        component: RegistrationComponent,
        title: 'Register'
    },

    {
        path: 'markets',
        component: IssuerComponent
    }
];

export default routeConfig;