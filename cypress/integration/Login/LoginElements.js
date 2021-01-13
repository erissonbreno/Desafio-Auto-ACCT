class LoginElements {
    campoEmail = () => {
        return '.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input'
    }
    campoSenha = () => {
        return '.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input'
    }
    botaoEntrar = () => {
        return '.vtex-button__label > .t-small'
    }
    campoDadosPessoais = () => {
        return '.db-m > .vtex-pageHeader__container > .c-on-base > .vtex-pageHeader__title'
    }
}

export default LoginElements;