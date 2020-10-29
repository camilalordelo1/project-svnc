var cardObject = [
    {
        autor: "Diego Silva",
        data: "01/05/2019", 
        local: "Vila Terezinha, São Paulo - SP", 
        descricao: "Fotografia tirada de uma varanda, com a câmera de um celular sem edições ou efeitos. Na face norte, com vista, para o Jardim Guarani, e a nordeste para o Centro da cidade, verticalizado. A paisagem é de Mares de Morros, com predomínio de ocupação para uso residencial no sistema de auto construção e horizontal.", 
        image: "/img/slider/Imagem1.jpeg"
    },
    {
        autor: "José Victor Santos Alves",
        data: "07/04/2019",
        local: "Av. Deputado Cantidio Sampaio, São 	Paulo - SP",
        descricao: " Foto tirada de um ponto alto da Av. Deputado Cantidio Sampaio. A paisagem mostra parte do Jardim. Vista Alegre, num sistema de moradia popular, Circundando o cinturão verde da serra da Cantareira.",
        image: "/img/slider/Imagem2.jpeg"
    },
    {
        autor: "Camila Lordelo",
        data: "26/04/2019",
        local: "Freguesia do Ó, São Paulo - SP",
        descricao: "A fotografia foi tirada em um fim de tarde chuvoso na Av. Itaberaba. A paisagem é cultural e urbana. O Uso do solo predominante é para residencia, com uma mescla de moradia horizonta e a vertical, composta por poucos prédios. Atividade econômica é composta por pequenos e médio comercio.",
        image: "/img/slider/Imagem3.jpeg"
    },
    {
        autor: "Sophia Evangelista",
        data: "26/10/2020",
        local: "Jd. Brasília, Distrito Brasilândia,  São Paulo – SP",
        descricao: "A paisagem é cultural e urbana. O Uso e ocupação do solo predominante é o residencial, com uma mescla de moradia horizontal e o vertical, é composto por poucos prédios.",
        image: "/img/slider/Imagem4.jpeg"
    },
    {
        autor: "Luan Santos",
        data: "29/10/2020",
        local: "Jd. Carumbé, Distrito: Brasilândia, São Paulo - SP ",
        descricao: "A paisagem exibe elementos culturais, como moradia no sistema de autoconstrução em área de ocupação, e  no último plano a Serra da cantareira e o bioma Mata Atlântica.",
        image: "/img/slider/Imagem5.jpeg"
    },
    {
        autor: "Matheus Cordeiro ",
        data: "18/05/2019",
        local: "Vila São João Batista, São Paulo-SP",
        descricao: "A paisagem panorâmica do distrito da Brasilândia, área de ocupação irregular e dormitório. Na direção noroeste e oeste, o colorido do por do sol emoldura o cenário do fim do dia.",
        image: "/img/slider/Imagem6.jpeg"
    },
    { 
        autor: "Carlos Kaique Duarte Pontes ", 
        data: "01/05/2019", 
        local: "Jd. Paulistano, Distrito Brasilândia,São Paulo-SP", 
        descricao: "A paisagem, na direção Nordeste, no primeiro plano predomina o sistema de autoconstrução em área de ocupação e horizontal.; no segundo plano destacam-se os edifícios das unidades escolares do CEU e da ETEC Paulistano e o último composto pelo florestamento de eucaliptos. ",
        image: "/img/slider/Imagem7.jpeg"
    },
    {
        autor: "Grazielly Gomes ",
        data: "28/04/2019",
        local: " Parque de Taipas, São Paulo - SP",
        descricao: "Está foto foi tirada de uma laje às 6:30 da manhã, direção nordeste, por um celular e sem edição. A paisagem é cultural, do Parque Taipas conhecido como Arvão. A luz difusa na escuridão matinal, exibe uma área de ocupação residencial, predominantemente horizontal.",
        image: "/img/slider/Imagem8.jpeg"
    },
    {
        autor: "Pedro Henrique",
        data: "31/04/2019",
        local: "Jardim Panamericano - Jaraguá, São Paulo - SP",
        descricao: "A paisagem é  dividida em diversos planos, o primeiro é uma área composta por gramínea e terraplanagem, o segundo exibe um conjunto residencial de classe C, horizontal e vertical, o terceiro o pico do Jaraguá.",
        image: "/img/slider/Imagem9.jpeg"
    },
    {
        autor: "Yasmim Gabrielle",
        data: "27/04/2019",
        descricao: "Foto tirada na Avenida Itaberaba, em São Paulo -SP. Predomina comércios horizontais e moradias na vertical com carros estacionados apresentando um ambiente típico urbano. Ao fundo o dia ensolarado e árvores compondo a paisagem. Foi tirada no período da tarde.",
        image: "/img/slider/Imagem10.jpeg"
    },
    
];

var card = document.getElementById("cards");


for (var i = 0; i <= cardObject.length; i++) {
    card.innerHTML += 
    `<div class="mx-auto card m-2" style="width: 20rem;">
    <img class="card-img-top" src="${cardObject[i].image}" alt="Imagem de capa do card">
        <div class="card-body">
        <h5 class="card-title">${cardObject[i].autor}</h5>
        <p><strong>Data</strong>: ${cardObject[i].data} </p>
        <p class="card-text text-justify"> ${cardObject[i].descricao}</p>
            <div class="container pl-1 text-center"> 
                <button href="#" class="btn btn-dark" data-toggle="modal" data-target="#modal${i}"> Visualizar imagem </button>
            </div>
            <div class="modal fade" id="modal${i}" tabindex="-1" role="dialog" aria-labelledby="modal${i}" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal${i}"> ${cardObject[i].autor}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" style="width: 100%;">
                        <img src="${cardObject[i].image}" style="width: 100%;">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary align-bottom" data-dismiss="modal">Fechar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    
}




function curtir(posi) {
    cardObject[posi].curtidas += 1;
}