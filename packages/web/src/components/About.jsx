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
      <h1>Single SPA e Webpack Module Federation</h1>

      <p>Webpack 5 Module Federation mira a resolver o problema de compartinhamento de modules em um sistema de distribuição, criando pedaços de código e compartinhando entra as aplicações macro ou micro, como você quiser.</p>

      <h2>Como funciona</h2>
      
      <p>O Webpack Module Federation retira parte do código do pipeline separando esse código da aplicação, fazendo assim com que o componente ou componentes adicionando na lista de <i>exposes</i> sejam adicionando em um <i>remoteEntry</i></p>

      <p>Para conseguir isso, existem dois conceitos principais para se familiarizar: <b>host</b> e <b>remote</b></p>

      <h3>HOST</h3>
      <p>Uma aplicatição host contém todos os recursos típicos de uma aplicação SPA (Single Page Application) ou SSR (Server Side Rendering). Carrega todos os chunks inicial, inicializa o aplicatição e renderiza o que o usuário verá primeiro. Ao invez de usar uma lib para compartinhar esse código entre aplicações você </p>

      <h3>REMOTE</h3>
      
      <p>Abaixo segue um exemplo da configuração</p>
      
      <Code>
        <Pre dangerouslySetInnerHTML={{__html: Prism.highlight(code, Prism.languages.javascript, 'javascript') }} />
      </Code>
    </Containet>
  )
}

export default About;
