# POLARIS

> **A estrela que guia decisões.**

🌐 **Site no ar:** [gs-2026-polaris.vercel.app](https://gs-2026-polaris.vercel.app)

Landing page institucional da **POLARIS**, uma plataforma brasileira de inteligência espacial que transforma dados invisíveis de satélites em decisões reais: monitoramento ambiental, conectividade em regiões remotas e controle de frota autônoma em missões espaciais.

![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)

---

## Sobre

A POLARIS nasceu como projeto da **Global Solution 2026 da FIAP** (1º semestre, Engenharia de Software, turma 2ESPH), sob o tema **Indústria Espacial**. A ideia central é simples: pegar os dados que vêm do espaço e transformá-los em decisão útil aqui na Terra.

Assim como a Estrela do Norte guia navegantes há mais de 3.000 anos, a POLARIS é o ponto de referência entre o que acontece em órbita e o que precisa ser decidido no chão.

Este repositório é a **vitrine institucional** da empresa: uma página única, longa e cinematográfica, que apresenta o problema, a solução e o impacto.

## As três frentes

Uma plataforma, três produtos que compartilham a mesma infraestrutura de satélite e a mesma filosofia de autonomia:

| Produto | O que faz |
| --- | --- |
| **Earth** | Monitora o ambiente e calcula a melhor rota de resposta a desastres (enchentes, queimadas) |
| **Connect** | Leva internet resiliente (Starlink mais servidor local) a escolas e postos em regiões isoladas |
| **Fleet** | Controla frotas de sondas autônomas em missões lunares e marcianas |

## Tecnologias

- **Next.js 14** (App Router) e **React 18**
- **TypeScript** com tipagem estrita
- **Tailwind CSS** para a estilização
- **Framer Motion** para as animações
- **next/font** com a fonte Space Grotesk carregada localmente
- Pronto para deploy na **Vercel**

## Destaques

- **Responsivo** de verdade, do celular ao monitor ultrawide
- **Acessível**: navegação por teclado, textos alternativos nas imagens e respeito à preferência de reduzir movimento (prefers-reduced-motion)
- **Rápido**: imagens otimizadas, fontes locais (sem requisição externa) e carregamento preguiçoso fora da primeira tela

## Como rodar

Pré-requisitos: **Node.js 18 ou superior** e **npm**.

```bash
# 1. Instalar as dependências
npm install

# 2. Subir o servidor de desenvolvimento
npm run dev
```

Depois é só abrir **http://localhost:3000** no navegador.

Outros comandos úteis:

```bash
npm run build   # gera a versão de produção
npm run start   # roda a versão de produção já gerada
npm run lint    # verifica o código com o ESLint
```

## Estrutura do projeto

```text
polaris-landing/
  public/
    images/          imagens da landing
  src/
    app/             páginas, layout e estilos globais (App Router)
    components/
      layout/        header, rodapé, navegação e efeitos de fundo
      sections/      cada seção da página (hero, problemas, produtos, caso, impacto)
      ui/            peças reutilizáveis (cards, contadores, títulos animados)
    constants/       textos do site e tokens de design (cores, durações)
    hooks/           hooks de scroll, parallax, contador e afins
    lib/             funções utilitárias
    types/           tipos TypeScript compartilhados
```

## Equipe

Turma **2ESPH**, Engenharia de Software, FIAP.

| Integrante | RM |
| --- | --- |
| Kauê de Almeida Pena | 564211 |
| Eduardo Delorenzo Moraes | 561749 |
| Lucas Rowlands Abat | 562994 |
| Ronaldo Aparecido Monteiro Almeida | 565017 |
| William Queiroz | 565032 |

## Licença

Projeto acadêmico desenvolvido para fins educacionais na **FIAP Global Solution 2026**.
