/* 
 OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

  - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele 

 - retirar a classe selecionado do personagem que está selecionado


 OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/

const personagens = document.querySelectorAll(".character");

personagens.forEach((character) => {
  personagem.addEventListener("mouseenter", () => {

    const idSelecionado = personagem.attributes.id.value;

    if(idSelecionado === 'vegeta') return;

    /* 
        OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

        - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele 

        - retirar a classe selecionado do personagem que está selecionado
    */
    const personagemSelecionado = document.querySelector(".selected");
    personagemSelecionado.classList.remove("selected");

    personagem.classList.add("selected");

    /* 
        OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande
            - alterar a imagem do jogador 1
            - alterar o nome do jogador 1
    */

    const imagemJogador1 = document.getElementById('player-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('name-player-1');
    const nomeSelecionado = personagem.getAttribute('data-name');
    
    nomeJogador1.innerHTML = nomeSelecionado;
  });
});
