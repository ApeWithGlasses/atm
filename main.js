const optionsMenu = () => {
    menu = prompt('Seleccione la operación que desea realizar \n1- Consultar saldo \n2- Retirar dinero \n3- Consignar dinero \n4- Transferir \n5- Salir');

    return menu;
}


let accountFunds = 0;
let mainValue = 0;
let flag = true;
let user;
let password;

do {
    user = prompt('Ingrese su usuario: ');
    if (user == 'blowfish') {
        password = prompt('Ingrese su contraseña: ')
        if (password == '1234') {
            while (flag) {
                let option = optionsMenu();
                switch (parseInt(option)) {
                    case 1:
                        alert('Su saldo es: ' + accountFunds);
                        break;
                    case 2:
                        mainValue = Number(prompt('Ingrese el valor a retirar: '));
                        if (mainValue > accountFunds) {
                            alert('Fondos insuficientes.')
                        } else {
                            alert('Retiro exitoso. Su nuevo saldo es: ' + (accountFunds -= mainValue));
                        }
                        break;
                    case 3:
                        mainValue = Number(prompt('Ingrese el valor a consignar a su cuenta: '));
                        accountFunds += mainValue;
                        alert('Su nuevo saldo es: ' + accountFunds);
                        break;
                    case 4:
                        mainValue = Number(prompt('Ingrese el valor a transferir: '));
                        if (mainValue > accountFunds) {
                            alert('Fondos insuficientes.')
                        } else {
                            alert('Transferencia exitosa. Su nuevo saldo es: ' + (accountFunds -= mainValue));
                        }
                        break;
                    case 5:
                        flag = false;
                        break;
                    default:
                        alert('Ha ingresado una opción inválida.');
                        break;
                }
            }
        } else {
            alert('Contraseña incorrecta.');
        }
    } else {
        alert('Usuario incorrecto.')
    }
} while (condition);
