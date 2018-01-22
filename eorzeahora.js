var EORZEA_TEMPO = 20.5714285714; // Informa o valor de divisão para converter a hora real em Eorzea.
var global = { // Cria o objeto global com os dois atributos abaixo.
utcTime: null, //Recebe um valor vazio.
horaEorzea: null, //Recebe um valor vazio.
horas: null,
minutos: null,
ampm: null
};

window.setInterval(atualizaRelogio, Math.floor(1000 * 60 /  EORZEA_TEMPO)); //Atualiza a funçao atualizaRelogio a cada 3 segundos.

function atualizaRelogio() { // Inicia a função.
    global.utcTime = new Date().getTime(); // Insere no atributo uctTime do objeto Global a data com base no horário da pessoa.
    var exibe_horaeorzea = Math.floor(global.utcTime * EORZEA_TEMPO); //Pega o maior número inteiro do global.utcTime x EORZEA_TEMPO e insere no exibe_horaeorzea.
    global.horaEorzea = new Date(); //Usa a função date para dizer que o horaEorzea do objeto global é uma data.
    global.horaEorzea.setTime(exibe_horaeorzea); //Altera a data com os valores dos calculos com base na variável exibe_horaeorzea.
    exibirRelogio(); //Chama a função exibirRelogio
}

function exibirRelogio() { // Inicia a função.
    var d = new Date(); //Informa que a variável d é uma data.
    d.setTime(global.horaEorzea); // Altera a hora para a hora calculada na função atualizaRelogio, isso só é possível por que a variável é global.
    var eHora = document.getElementById('relogio'); //Informa o nome da DIV no html que vai exibir o valor da variável eHora.
    global.horas = d.getUTChoras(); //Informa que a variável hora vai receber a hora atual da variável d.
    global.ampm = global.horas > 11 ? "PM" : "AM"; //Informa que a variável ampm vai receber PM se for maior que 11 e AM se for menor.
    if(global.horas > 12) //Checa se horas é maior que 12.
        global.horas -= 12; //Se for, a variável horas vai receber a hora menos 12, para que o relógio da madrugada volte para 0.
    global.horas = zeroEsquerda(global.horas); //Informa que a variável horas vai receber horas após ser manipulado na função zeroEsquerda.
    global.minutos = d.getUTCminutos(); //Informa que a variável minutos vai receber o minuto atual da variável d.
    global.minutos = zeroEsquerda(global.minutos); //Informa que a variável minutos vai receber minutos após ser manipulado na função zeroEsquerda.
    eHora.innerHTML = global.horas + ":" + global.minutos + " " + global.ampm; // Escrever na div relogio as variáveis de forma que exiba horas:minutos AM/PM.
}

function zeroEsquerda(tempo){ //Cria a função zeroEsquerda, que tem como parâmetro a variável val.
    var str = "" + tempo; //Informa que a variável str recebe uma string vazia + a variável val.
    var pad = "00"; //Informa que a variável pad é uma string com valor 00.
    return pad.substring(0, pad.length - str.length) + str; //Retorna uma string cortada entre 0 e o tamanho máximo do pad menos o máximo de str + o valor de str.
}

atualizaRelogio();
