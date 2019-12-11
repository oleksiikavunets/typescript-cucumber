import { $ } from '../../utils';


export class LoginWidget{
    emailInput() {
        return $('#email');
    }
    passwordInput() {
        return $('#passwd');
    }
    signInButton() {
        return $('#SubmitLogin');
    }
}