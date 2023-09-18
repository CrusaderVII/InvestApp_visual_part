import {Routes} from '@angular/router'
import { RegistrationComponent } from './login/registration.component';
import { IssuerComponent } from './issuer/issuer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MarketComponent } from './market/market.component';
import { ProfileComponent } from './profile/profile.component';

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
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },

    {
        path: 'market',
        component: MarketComponent
    },

    {
        path: 'market/issuer/:secId',
        component: IssuerComponent
    },

    {
        path: 'profile',
        component: ProfileComponent
    }

];

export default routeConfig;