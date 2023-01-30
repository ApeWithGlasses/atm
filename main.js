let accountFunds = 0;
let mainValue = 0;
let flag = true;

while (flag) {
    let menu = prompt('Seleccione la operación que desea realizar \n1- Consultar saldo \n2- Retirar dinero \n3- Consignar dinero \n4- Transferir \n5- Salir');
    switch (parseInt(menu)) {
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

const consult = () => {

}

const consign = () => {

}

const withDrawals = () => {

}