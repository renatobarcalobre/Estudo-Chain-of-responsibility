Conceito de Chain of Responsability
 - É um padrao de design comportamental que permite apssar solictacoes por uma cadeia de manipuladores, ao receber uma solicitacao, cada gerenciador decide processa-la ou passa-la para o proximo gerenciador da cadeia.



versao node.js - 16.13.1
Para executar os comandos do projeto deve-se usar os atalhos contendo em package.json
- npm run-script <comando>: Ex: npm run-script execute


Como testar: 
 - execute o comando: npm run-script build
   - verifique se a pasta build foi criada.
 - execute o comando: npm run-script execute.
   - receberá um retorno de qual treatment foi acionado.
   - Obs: Se vc alterar o valor do main ele irá para um Treatment diferente.
