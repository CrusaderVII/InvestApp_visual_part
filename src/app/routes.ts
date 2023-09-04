import {Routes} from '@angular/router'
import { RegistrationComponent } from './login/registration.component';
import { IssuerComponent } from './issuer/issuer.component';

const routeConfig: Routes = [
    {
        path: '',
        component: IssuerComponent
    },

    {
        path: 'register',
        component: RegistrationComponent,
        title: 'Register'
    }
];

export default routeConfig;