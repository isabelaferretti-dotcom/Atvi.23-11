1
const boasVindas = (nome) => {
    return `Bem-vindo(a), ${nome}!`;
};

console.log(boasVindas("Carla"));

2
const parOuImpar = (numero) => {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}; 
 console.log(parOuImpar(4));
 console.log(parOuImpar(7));

3
const precos = [10, 25, 40];

const resultados = precos.map(preco => {
    return "R$ " + preco;
});

console.log(resultados);


4
const palavras = ["sol", "janela", "mar", "cadeira", "luz"];

const resultados1 = palavras.filter(palavras => {
    return palavras.length > 4;
});

console.log(resultados1);


5
const produto = [
    { id: 1, nome: "Teclado", estoque: true },
    { id: 2, nome: "Mouse", estoque: false },
    { id: 3, nome: "Monitor", estoque: true },
];

const resultado = produto
    .filter(produto => {
        return produto.estoque === true;
    })
    .map(produto => {
        return produto.nome;
    });

console.log(resultado);

6
function Cartao({ titulo, descricao }) {
  return (
     <h3>{titulo}</h3>
     <p>{descricao}</p>
  
);
}
function App() {
  return (
    <div>
    <Cartao titulo="Livro" descricao="Uma história incrível." />
    <Cartao titulo="Filme" descricao="Um filme emocionante." />
    <Cartao titulo="Música" descricao="Uma música especial." />
    </div>
 );
}



7
function Aviso({ urgente }) {
  return (
    <div>
         {urgente ? <p>ATENÇÃO: leia agora!</p> : <p>Aviso comum</p>}
    </div>
);
}

function App() {
  return (
     <div>
         <Aviso urgente={true} />
         <Aviso urgente={false} />
     </div>
);
}

8
import { useState } from "react";

function Curtidas() {
    const [curtidas, setCurtidas] = useState(0);

 return (
    <div>
        <p>{curtidas} curtidas</p>

        <button onClick={() => setCurtidas(curtidas + 1)}>
             Curtir
        </button>

         {curtidas > 10 && <p>Post popular!</p>}
     </div>
    );
}

9
import { useState } from "react";

function MostrarSenha() {
    const [visivel, setVisivel] = useState(false);

    return (
        <div>
            <button onClick={() => setVisivel(!visivel)}>
                {visivel ? "Esconder" : "Mostrar"}
            </button>

            {visivel && <p>Senha: 1234</p>}
        </div>
    );
}


10
const tarefas = [
    { id: 1, texto: "Estudar React", feita: false },
    { id: 2, texto: "Lavar a louça", feita: true },
    { id: 3, texto: "Fazer a atividade", feita: false },
];

const tarefasPendentes = tarefas
    .filter(tarefa => !tarefa.feita)
    .map(tarefa => tarefa.texto);

console.log(tarefasPendentes);

function concluirTarefa(id) {
    const novasTarefas = tarefas.map(tarefa => {
        return tarefa.id === id
            ? { ...tarefa, feita: true }
            : tarefa;
    });

    return novasTarefas;
}

const atualizadas = concluirTarefa(1);

console.log(atualizadas);