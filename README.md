# Ambiente de experimentação JavaScript

Esse repositório apresenta uma ferramenta desenvolvida para a experimentação de código JavaScript. Consiste em uma aplicação web para ser executada localmente em um navegador. Ela foi desenvolvida como ferramenta auxiliar para ser utilizada em sala de aula de cursos de programação em ambientes sem conexão com a Internet, ou com conexão instável, de modo que seja possível trabalhar totalmente offline.

A ferramenta também visa simplificar configurações iniciais mínimas necessárias para se desenvolver código JavaScript, permitindo que o aprendiz foque nas lições, replicando os códigos ensinados em sua máquina e vendo o resultado facilmente.

## Repositório

A ferramenta está dentro da pasta _**Coding**_.

O arquivo _**Coding/instrucoes.html**_ apresenta instruções sobre como utilizar a ferramenta.

O arquivo _**Coding/script.js**_ é o código JavaScript da ferramenta. Nele, encontra-se todas as funções que podem ser utilizadas pelos alunos, bem como todas as funções internas para o correto funcionamento da ferramenta.

A pasta _**Coding/Template**_ contem os arquivos nos quais os alunos devem trabalhar. A ideia é que a cada novo tópico ensinado, ou a cada aula, a pasta template seja duplicada para que se tenha um ambiente de experimetação livre de outros códigos para se trabalhar.

O arquivo _**Coding/Template/index.html**_ deve ser aberto no navegador para que seja possível ver o resultado dos códigos JavaScript que forem criados. Nada precisa ser alterado nesse arquivo. Ele precisa somente ser aberto no navegador para visualização do resultado da execução do código JavaScript.

O arquivo _**Coding/Template/meu\_codigo.js**_ contem uma estrutura básica em JavaScript, é o arquivo no qual os alunos devem escrever seu próprio código para experimentar a execução durante o aprendizado de programação.

## Utilização

### Configuração

Para utilizar a ferramenta, primeiro, execute os seguientes passos:

1. Duplique a pasta _**Template**_.
2. Renomeie a pasta duplicada para o nome que desejar.
3. Abra o arquivo _**meu_codigo.js**_ data pasta que foi duplicada em um editor de texto.
4. Abra o arquivo _**index.html**_ data pasta que foi duplicada em um navegador web.

Trabalhe no arquivo _**meu_codigo.js**_ e visualize os resultados da execução no arquivo _**index.html**_ da pasta que foi duplicada. Sempre que inserir um novo código no primeiro arquivo, salve, e atualize a página do navegador que está com o segundo arquivo aberto para ver o novo resultado da execução do código que foi atualizado.

### Programando

> :warning: **ATENÇÃO**<br/>
> Você não deve alterar os arquivos da pasta template. Duplique a pasta template e trabalho nos arquivos da pasta duplicada.

O arquivo _**meu_codigo.js**_ deve ser utilizado para programar. Esse é um arquivo JavaScript comum e aceita qualquer código da linguagem. Este arquivo possui duas funções com as quais os alunos devem trabalhar.

#### Função `meuCodigo`

A função `meuCodigo` deve ter seu interior preenchido pelos alunos com os códigos desejados. Essa função é executada sempre que a interface da ferramenta (arquivo _**index.html**_ que deve ser aberto em um navegador web) for atualizada. 

Qualquer código JavaScript pode ser usado, bem como as funções auxiliares disponibilizadas pela própria ferramenta (ver as próximas seções para mais detalhes).

#### Função `recebeEntradas`

A função `recebeEntradas` é executada toda vez que o formulário com as entradas de dados que foram programadas é submetido. Essa função não é executada quando a página é atualizada ou renderizada pela primeira vez, somente quando o formulário é submetido (quando o botão "Executar" é pressionado e os campos programados foram preenchidos corretamente). 

Essa função recebe uma lista de dados, com um valor para cada valor de cada campo que foi preenchido. Os tipos dos valores variam de acordo com o tipo de entrada que foi configurada. String para entrada de texto, número para entrada de número, e booleano para entrada booleana. Veja a seção de funções para mais detalhes. 

### Interface

> :warning: **ATENÇÃO**<br/>
> Você não deve alterar os arquivos da pasta template. Duplique a pasta template e trabalho nos arquivos da pasta duplicada.

A interface da ferramenta encontra-se no arquivo _**index.html**_ da pasta _**Template**_. O mesmo deve ser aberto no navegador para que a interface seja renderizada. 

A interface mostra o resultado da execução do código do arquivo _**meu_codigo.js**_ que está na mesma pasta que o arquivo HTML. Para executar o código, deve-se abrir o arquivo HTML no navegador. A cada vez que a página for atualizada o código é executado novamente. 

Ao abrir, a página irá mostrar uma área de saída (_output_). Essa área irá mostrar as mensagens programadas para serem exibidas (veja a função `escreveNaTela` na seção abaixo). Caso seja programado a criação de uma entrada de dados, a página também irá mostrar uma área de entrada (_input_), com um formulário e com os campos que foram programados para aparecer (veja as funções de criação de entrada de dados na seção abaixo). 

### Funções disponíveis na ferramenta

#### Funções de entrada de dados

> :information_source: **ATENÇÃO**<br/>
> Ao utilizar qualquer uma dessa funções a ferramenta passará a exibir a área de entrada de dados em sua interface. Essa área consiste em um formulário com os campos para as entradas programadas.

`criarEntradaDeTexto(nome, dica, conteudo)` cria um campo de texto na área de entrada de dados de acordo com as configurações. Resulta em um valor do tipo String, a ser entregue na lista de dados passada como argumento da função `recebeEntradas(entradas)` em _**meu_codigo.js**_. 
- Argumento `nome` cria um label para o campo de texto (String; obrigatório). 
- Argumento `dica` insere um placeholder no campo de texto (String; obrigatório).
- Argumento `conteudo` cria o campo com valor preenchido (String; opcional)

`criarEntradaDeNome(nome, dica, conteudo)` cria um campo do tipo número na área de entrada de dados de acordo com as configurações. Resultada em um valor do tipo número, a ser entregue na lista de dados paassada como argumento da função `recebeEntradas(entradas)` em _**meu_codigo.js**_.
- Argumento `nome` cria um label para o campo de texto (String; obrigatório). 
- Argumento `dica` insere um placeholder no campo de texto (String; obrigatório).
- Argumento `conteudo` cria o campo com valor preenchido (Número; opcional)

Os campos de texto e número criados na área de entrada da ferramenta são de preenchimento obrigatório para que o formulário seja submetido e a função `recebeEntradas`seja executada.

`criarEntradaBooleana(nome, selecionado)` cria um checkbox. Para cada entrada do booleana criada, ao subter o formulário da área de entrada (pressionando o botão "Executar"), será entregue um valor booleano (true/false) de acordo com o setadao do checkbox (selecionado/nao selecionado), na mesma ordem em que os checkbox forem criados (isto é, na mesma ordem em que a função for invocada no código). 
- Argumento `nome` cria um nome que será associado ao checkbox.
- Argumento `selecionado` permite pré configurar o checkbox como selecionado ou não.

#### Funções de saída de dados

`escreveNaTela(conteudo)` adiciona o conteúdo passado como argumento como conteúdo HTML da página de execução (arquivo _**index.html**_).
- Argumento `conteudo` é o conteúdo que será adicionado na tela.

> :information_source: a área de a saída é uma lista ordenada (elemento `ol` do HTML). Cada saída (resultado da chamada da função  `escreveNaTela` cria um novo item nessa lista (element `li` do HTML). 


