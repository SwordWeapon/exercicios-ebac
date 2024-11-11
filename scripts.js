


let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarnatela(dados){
    console.log(dados)
    
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".graus").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".tempo2").innerHTML = "Umidade<br>" + dados.main.humidity + "%";

}

async function buscarcidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json())
    
    colocarnatela(dados)
}

    
    

function cliqueinobotao() {
    let cidade = document.querySelector(".input-cidade").value
    buscarcidade(cidade)
    
}


/*Clica no botao
-> chama a função cliqueinobotao()
-> vai no input e pega o que está dentro
-> Passar a cidade para o servidor
-> Math.floor arredeonda valores
*/