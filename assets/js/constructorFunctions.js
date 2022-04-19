function Calculadora() {
    let display = document.querySelector('.display');
    // método
    this.iniciar = () => {
        cliqueBotoes();
        pressionaBotoes();
    };
    // funções
    function pressionaBotoes() {
        display.addEventListener('keypress', (e) => {
            if(e.keyCode === 13) {
                realizaConta();
            }
            if(e.keyCode === 8) {
                deleteOne();
            }
        });
    }
    function cliqueBotoes() {
        document.addEventListener('click', (e) => {
            const el = e.target
            if(el.classList.contains('btn-num')) {
                btnParaDisplay(el.innerText);
            }
            if(el.classList.contains('btn-clear')) {
                display.value = '';
            }
            if(el.classList.contains('btn-del')) {
                deleteOne();
            }
            if(el.classList.contains('btn-eq')) {
                realizaConta();
            }
            display.focus();
        });
    }
    function btnParaDisplay(valor) {
        display.value += valor;
    }
    function deleteOne() {
        display.value = display.value.slice(0, -1);
    }
    function realizaConta() {
        let conta = display.value;
        try {
            conta = eval(conta);
            if(!conta) {
                alert('Conta inválida');
                return;
            }
            display.value = String(conta);
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    }
}
const calculadora = new Calculadora();
calculadora.iniciar();