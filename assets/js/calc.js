function soma(num1, num2) {
    if(num1 && num2){
        let conta = num1 + num2;
        return conta;
    }
    if(!conta) console.error('Conta inválida!');
    return Number(conta);
}
module.exports = soma;