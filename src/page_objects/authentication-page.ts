import { $ } from '../utils';

import {LoginWidget} from './widgets/login-widget';


export class AuthenticationPage {

    isOpened() {
        return this.loginWidget().signInButton().visible;
    }

    loginWidget() {
        return new LoginWidget();
    }

    errorMessage() {
        return $('.alert-danger li');
    }
}