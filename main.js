const form = document.getElementById('form-campos');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagemSucesso = document.querySelector('.success-message');
const mensagemErro = document.querySelector('.error-message');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = Number(campoA.value);
    const valorB = Number(campoB.value);

    const mensagemSucessoText = `O número  ${valorB} é maior que o número  ${valorA}.`;
    const mensagemErrorText = `O número ${valorB} não é maior que o número ${valorA}.`; 

    if (valorA >= valorB) {
        mensagemErro.innerHTML = mensagemErrorText;
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';
    } else {
        mensagemSucesso.innerHTML = mensagemSucessoText;
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';
    }
});

campoA.addEventListener('focus', function() {
    campoA.value = '';
    mensagemSucesso.style.display = 'none';
    mensagemErro.style.display = 'none';
});

campoB.addEventListener('focus', function() {
    campoB.value = '';
    mensagemSucesso.style.display = 'none';
    mensagemErro.style.display = 'none';
});

