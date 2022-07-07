// AOS
AOS.init();
// calculadora
jQuery(($) => {
    let input = $('.display');
    input.mask('0');
    function botoes(){
        $(document).on('click', (e) => {
            const el = e.target;
            if(el.classList.contains('btn-num')) {
                input.val(input.val() + el.textContent);
            }
            if(el.classList.contains('btn-clear')) {
                input.val(''); 
            }
            if(el.classList.contains('btn-del')) {
                input.val(input.val().slice(0, -1));
            }
            if(el.classList.contains('btn-eq')) {
                equal(input);
            }
        });
    }
    function equal(i) {
        let conta = i.val();
        conta = eval(conta);
        if(!conta) alert('Conta inválida!');
        i.val(String(conta));
    }
    botoes();
})