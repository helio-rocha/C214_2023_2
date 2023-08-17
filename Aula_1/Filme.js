class Filme
{
    constructor(titulo, ano, genero, duracao, assistido, avaliacao)
    {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = assistido;
        this.avaliacao = avaliacao;
    }

    exibirDetalhes()
    {
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Duração: ${this.duracao}`);
        if (this.avaliacao)
        {
            console.log(`Assistido: SIM`);    
        }
        else
        {
            console.log(`Assistido: NÃO`);    
        }
        console.log(`Avaliação: ${this.avaliacao}\n`);
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

const filme1 = new Filme('Morangos Silvestres', 1954, 'Drama', 91, false);
const filme2 = new Filme('Taxi Driver', 1976, 'Drama', 114, false);
const filme3 = new Filme('Solaris', 1972, 'Sci-Fi', 167, false);

filme1.marcarAssistido();
filme1.avaliarFilme(97);

filme2.marcarAssistido();
filme2.avaliarFilme(98);

filme3.marcarAssistido();
filme3.avaliarFilme(99);

filme1.exibirDetalhes();
filme2.exibirDetalhes();
filme3.exibirDetalhes();