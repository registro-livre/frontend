#Registro Livre 

[![Build Status](https://snap-ci.com/registro-livre/frontend/branch/master/build_image)](https://snap-ci.com/registro-livre/frontend/branch/master)

==============

Como começar?

Bom, primeiramente você precisa ter 3 dependências já instaladas. Elas são:
- [Git 1.8.0+](http://git-scm.com/downloads)
- [Ruby 2.0.0+](https://www.ruby-lang.org/en/downloads/)
- [Compass 1.0.1+](https://rubygems.org/gems/compass) (compass é uma ruby gem)
- [NodeJS](http://nodejs.org/download/) (npm)

Depois de clonar o repositório, execute estes comandos:

```sh
npm install
./node_modules/.bin/bower install
./node_modules/.bin/grunt
```

Tudo deve ocorrer sem erros e agora todas as dependências estão instaladas. Para verificar, execute este comando:

```sh
npm run test
```

Os testes unitários devem ser executados com sucesso!

Para facilitar o desenvolvimento, existe uma tarefa chamada _autotest_. Esta tarefa executa os testes unitários e fica observando os arquivos do projeto. Toda vez que algum arquivo é alterado, os testes unitários são executados. É uma boa maneira de conseguir um _feedback_ muito rápido durante o desenvolvimento. Para utilizar este recurso, execute o comando:

```sh
npm run autotest
```

Muito obrigado pelo interesse no projeto Registro Livre!
