import React from 'react';
import styled from 'styled-components'

const Containet = styled.div`
  color: ${props => props.theme.colors.gray600};
`;

const Code = styled.code`
  background: #f4f4f4;
  border-left: 3px solid #f36d33;
  display: block;
  border-radius: 5px;
`;
const Pre = styled.pre`
  color: #666;
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
`;

function About() {
  const code = `
    ...,
    new ModuleFederationPlugin({
      name: "app1",
      library: { type: "var", name: "app1" },
      filename: "remoteEntry.js",
      exposes: {
        "./Widget": "./src/Widget",
      },
      shared: {
        react: {
          import: "react",
          shareKey: "react",
          shareScope: "default",
          singleton: true, 
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
        "styled-components": {
          singleton: true,
        }
      },
    }),
    ...
  `;
  return (
    <Containet>
      <h1>Micro Front-end</h1>

      <h2>Problema</h2>
      <p>A maioria dos projetos na VR são monólitos grandes onde várias regras de negócio se misturam fazendo com que novas funcionalidades e correções de bugs demorem muito para acontecerem, conflitos, deploys demorados e vários outros problemas são encontrados em um projeto desse tamanho.</p>

      <h2>SOLUÇÃO</h2>
      <p>Foi criar pequenos projetos de forma que a atualização e deploy ficassem mais rápidos de serem feitos, garantindo uma dependência dos times para corrigir problemas ou criar novas funcionalidades sem impactar outros times dessa forma nasceu o micro front-end na VR.</p>

      <p>Após separar em diversas aplicações. Começam a surgir problemas de compatibilidade, problemas para gerenciar dependências, UIs desatualizadas criando um esforço grande para manter todas as aplicações com a mesma aparência UI.</p>

      <p><i>Segue um exemplo da estrutura atual</i></p>
      <img src="/single-spa-lib.png" width="100%" />
      <br />
      <p>Na imagem acima podemos ver que cada projeto pode ter uma versão diferente das dependências tanto da lib como do header e do footer.</p>

      <br />
      <br />

      <h1>SPA (Single Page Application)</h1>
      <br />
      <h3>O QUE É?</h3>
      <p>É uma aplicação web ou site que consiste de uma única página web com o objetivo de fornecer uma experiência do usuário similar à de um aplicativo desktop.</p>
      <br />
      <h3>FRAMEWORKS</h3>
      <img src="/frameworks.png" alt="" />
      <br />
      <br />
      <h1>SINGLE SPA / ARQUITETURA MICRO FRONT-END</h1>
      <p>Como expliquei acima problemas de dependências e versões dessas dependências começaram a ser notadas, As dependência que criaram mais problemas foram o Header e o Footer como essas dependências fazem parte de todos os projetos acaba que cria um problema de versão maior que outras dependência.</p>

      <p>O principal problema é que para cada vez que uma nova funcionalidade é criado ou um bug é resolvido todos os projetos têm que ser atualizados. Imagina que temos 10 times dentro da VR cada um trabalhando em seus projetos cada vez que o Header é atualizados todos os projetos desses times tem que ser atualizados.</p>

      <p>Digamos que temos 20 ou 30 projetos micro front-end cada um desses projetos tem que ser atualizados porque o header foi atualizado, isso causa um problema grande para os times ou para um time que tem que atualizar 20 ou 30 projetos.</p>


      <h3>COMO RESOLVER ISSO?</h3>
      <p>Fazendo com que o header e o footer sejam compartilhados de forma com que ao invés que atualizar 20 ou 30 projetos somente o projeto afetado seja atualizado.</p>

      <p><i>Aqui segue um exemplo de como essa estrutura pode ser criada</i></p>
      <br />
      <img src="/single-spa-estrutura.png" width="300" />
      <br />
      <br />
     
      <h1>Webpack Module Federation</h1>

      <p>Webpack 5 Module Federation mira resolver problemas de compartilhamento de módulos em um sistema de distribuição, criando pedaços de código e compartilhando entre as aplicações.</p>

      <h3>CONCEITO</h3>
      <p>São distinguidos entre dois conceitos módulos locais e remotos.</p>
      <br />

      <h3>LOCAL</h3>
      <p>Módulos locais são módulos normais que fazem parte do build atual.</p>
      <br />
      <h3>REMOTE</h3>
      <p>Módulos remotos são módulos que não fazem parte do build atual e são carregados de um contêiner em tempo de execução.</p>
      <p>O carregamento de módulos remotos é considerado uma operação assíncrona. Ao usar um módulo remoto, essas operações assíncronas serão colocadas na próxima operação de carregamento do chunk que está entre o módulo remoto e o ponto de entrada.</p>
      <br />
      <h3>MODULOS COMPARTILHADOS</h3>
      <p>Módulos compartilhados são módulos que podem ser substituídos e fornecidos como substituições ao contêiner local. Eles geralmente apontam para o mesmo módulo em cada build, por exemplo, a mesma biblioteca.</p>

      <br />
      <p><i>Exemplo da configuração</i></p>
      <Code>
        <Pre dangerouslySetInnerHTML={{__html: Prism.highlight(code, Prism.languages.javascript, 'javascript') }} />
      </Code>
      x
      <br />
      <script src="https://gist.github.com/rogerluiz/8348b17e7a4b8497d1b55806f205d7b7.js" async />
      {/* <div dangerouslySetInnerHTML={{__html: `<script src="https://gist.github.com/rogerluiz/8348b17e7a4b8497d1b55806f205d7b7.js"></script>` }} /> */}
      {/* <h3>Estrutura</h3>
      <p>Usando o Module Federation conseguiriamos fazer com que nossas dependencias como header e footer entre outras sejam controlados e atualizados em todos os projetos de forma rapida e evitando os problemas citados no inicio</p>
      <br />
      <img src="/single-spa-container.png" width="500" />
      <br /> */}
    </Containet>
  )
}

export default About;
