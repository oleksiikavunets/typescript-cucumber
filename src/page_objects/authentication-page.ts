import { $ } from '../utils';

import {LoginWidget} from './widgets/login-widget';


export class AuthenticationPage {
    loginWidget() {
        return new LoginWidget();
    }

    errorMessage() {
        return $('.alert-danger li');
    }
}