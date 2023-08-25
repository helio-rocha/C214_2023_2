const readline = require('readline');

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    var result = new Promise(resolve => rl.question( query, ans => {
        rl.close();
        resolve(ans);
    }))

    return result
}

var filmes = new Array();

async function adicionarFilme()
{
    const nome = await askQuestion("Digite o nome do filme:");
    const ano = await askQuestion("Digite o ano de lançamento do filme:");
    const genero = await askQuestion("Digite o gênero do filme:");
    const duracao = await askQuestion("Digite a duração do filme:");
    const filme = new Filme(nome, ano, genero, duracao)
    filmes.push(filme)
    console.log('Filme criado\n')
}

async function marcarFilmeAssitido()
{
    var nome = await askQuestion("Digite o nome do filme que deseja marcar como assistido:");
    var f;
    await procurarFilme(nome).then(async filme => {
        f = filme
        f.marcarAssistido()
        console.log('Filme assistido com sucesso\n')
    }).catch(() => {
        console.log('Filme não encontrado, tente novamente\n')
    })
}

async function avaliarFilme()
{
    var nome = await askQuestion("Digite o nome do filme que deseja avaliar:");
    var avaliacao;
    var f
    await procurarFilme(nome).then(async filme => {
        f = filme
        avaliacao = await askQuestion("Digite a nota do filme:");
        f.avaliarFilme(avaliacao)
        console.log('Filme avaliado com sucesso\n')
    }).catch(() => {
        console.log('Filme não encontrado, tente novamente\n')
    })

}

async function exibirFilmes()
{
    filmes.forEach
    (function (filme) 
    {
        filme.exibirDetalhes()
    }
    );
}

async function procurarFilme(nome)
{
    return new Promise((resolve, reject) => {
        filmes.forEach
        (function (filme) 
        {
            if (filme.titulo == nome)
            {
                resolve(filme)
            }
        }
        );
        reject()
    })
}
class Filme
{
    constructor(titulo, ano, genero, duracao, assistido, avaliacao)
    {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = false;
        this.avaliacao = null;
    }

    exibirDetalhes()
    {
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Duração: ${this.duracao}`);
        if (this.assistido == true)
        {
            console.log(`Assistido: SIM`);    
        }
        else
        {
            console.log(`Assistido: NÃO`);    
        }
        if (this.avaliacao == null)
        {
            console.log(`Avaliação: Não avaliado\n`);
        }
        else
        {
            console.log(`Avaliação: ${this.avaliacao}\n`);
        }
    }

    marcarAssistido()
    {
        this.assistido = true;
    }

    avaliarFilme(avaliacao)
    {
        this.avaliacao = avaliacao;
    }
}

async function main()
{
    var flag = true

    while (flag === true)
    {
        console.log("Selecione o que deseja fazer");
        console.log("Digite 1 para adicionar um novo filme");
        console.log("Digite 2 para marcar um filme como assistido");
        console.log("Digite 3 para avaliar um filme");
        console.log("Digite 4 para exibir a lista de filmes");
        console.log("Digite 5 para sair do programa");
        op = await askQuestion('')
        switch (op)
        {
            case '1':
                await adicionarFilme();
                break
            case '2':
                await marcarFilmeAssitido();
                break
            case '3':
                await avaliarFilme();
                break
            case '4':
                await exibirFilmes();
                break
            case '5':
                flag = false;
                break
            default:
                console.log("Opção Inválida\n");
                break;
        }
    }
}

main()