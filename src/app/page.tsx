import { Constellation } from '@/components/layout/Constellation';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MissionTicker } from '@/components/layout/MissionTicker';
import { Preloader } from '@/components/layout/Preloader';
import { ScrollBar } from '@/components/layout/ScrollBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Atalaia } from '@/components/sections/Atalaia';
import { Contexto } from '@/components/sections/Contexto';
import { Diferenciais } from '@/components/sections/Diferenciais';
import { Equipe } from '@/components/sections/Equipe';
import { Hero } from '@/components/sections/Hero';
import { Impacto } from '@/components/sections/Impacto';
import { Interstitial } from '@/components/sections/Interstitial';
import { Manifesto } from '@/components/sections/Manifesto';
import { Personas } from '@/components/sections/Personas';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ProductSection } from '@/components/sections/ProductSection';
import { Quem } from '@/components/sections/Quem';
import { Solucao } from '@/components/sections/Solucao';
import { VoceSabia } from '@/components/sections/VoceSabia';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Quem />
        <Contexto />

        <VoceSabia
          label="Você sabia, satélites"
          tone="dark"
          eyebrow="VOCÊ SABIA?"
          stat={{
            target: 263,
            label: 'lançamentos ao espaço em 2024',
          }}
          caption="LANÇAMENTOS AO ESPAÇO EM 2024"
          source="FONTE: AVIATION WEEK, JONATHAN'S SPACE REPORT"
        >
          Recorde mundial pelo quarto ano consecutivo: <span className="text-white">de 186 em 2022
          para 263 em 2024</span>. Cada foguete leva dezenas de satélites de uma vez.
        </VoceSabia>

        <VoceSabia
          label="Você sabia, Brasil"
          tone="light"
          eyebrow="VOCÊ SABIA?"
          staticNumber="1990"
          caption="BRASIL LANÇA DE ALCÂNTARA DESDE"
          source="FONTE: AEB, AGÊNCIA ESPACIAL BRASILEIRA"
        >
          O{' '}
          <span className="text-black">CLA, em Alcântara (MA)</span> é a base de lançamento mais
          próxima da linha do Equador no mundo, o que economiza até 30% de combustível. O Brasil tem
          satélite próprio desde 1993, com o SCD-1 do INPE. O VCUB1, de 2023, foi o primeiro feito
          pela indústria nacional.
        </VoceSabia>

        <Interstitial
          label="Respiro, planeta"
          image={{
            src: '/images/imagegs17.png',
            alt: 'Planeta Terra real visto do espaço, azul e verde',
            speed: 0.12,
          }}
        >
          <h2 className="text-[clamp(2rem,6vw,5rem)] font-extralight leading-[1.1] tracking-tight text-white">
            Este é o planeta que precisa da POLARIS.
          </h2>
        </Interstitial>

        <Interstitial label="Transição, problema" starfield className="flex min-h-[78vh] md:min-h-screen">
          <p className="font-serif text-[clamp(2rem,6.5vw,5.5rem)] italic leading-[1.12] text-white">
            Mas existe um problema.
            <br />
            <span className="text-fire text-glow">Três</span>, na verdade.
          </p>
        </Interstitial>

        <ProblemSection
          label="Problema 01, Desastres"
          tone="light"
          eyebrow="PROBLEMA 01"
          title="Desastres sem resposta otimizada"
          image="/images/imagegs3.png"
          imageAlt="Enchente no Rio Grande do Sul ao pôr do sol, casas submersas"
          stat={{ target: 478, label: '' }}
          captionInline
          caption={
            <>
              <p className="text-base font-light text-black">municípios atingidos, 95% do estado</p>
              <p className="mt-1 font-serif text-sm italic text-greyfade">
                Enchente, Rio Grande do Sul, Maio de 2024
              </p>
            </>
          }
          extra={
            <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-black/10 pt-5">
              <p className="font-light text-black">
                <span className="text-fire">2,4 mi</span> de pessoas afetadas
              </p>
              <p className="font-light text-black">
                <span className="text-fire">184</span> mortes confirmadas
              </p>
            </div>
          }
          source="FONTE: DEFESA CIVIL RS, IPEA, CNN BRASIL"
          body="Quando uma tragédia desse porte acontece, a Defesa Civil precisa decidir em minutos: quais cidades atender primeiro? Qual a rota mais rápida? Onde montar os pontos de resgate? Hoje, essas decisões são tomadas no improviso, com mapa físico, telefone e planilha do Excel. Resultado: equipes vão para o lugar errado, e gente morre esperando."
          quote="O mesmo padrão se repete em queimadas na Amazônia, secas no MATOPIBA e fiscalização de desmatamento. Brasil tem os dados de satélite, mas falta a camada que transforma esses dados em decisão útil em tempo real."
        />

        <VoceSabia
          label="Você sabia, dados não usados"
          tone="dark"
          eyebrow="VOCÊ SABIA?"
          staticNumber={
            <>
              100<span className="text-[0.5em]">%</span>
            </>
          }
          caption="DO BRASIL MONITORADO POR SATÉLITE"
          source="FONTE: INPE"
        >
          Os satélites do INPE monitoram <span className="text-white">todo o território nacional</span>{' '}
          desde 1988, e os dados são públicos e gratuitos. O gargalo não é o dado, é a camada que
          transforma o dado em decisão rápida no município.
        </VoceSabia>

        <ProblemSection
          label="Problema 02, Exclusão digital"
          tone="dark"
          starfield
          eyebrow="PROBLEMA 02"
          title="Exclusão digital: mais de mil municípios sem fibra"
          image="/images/imagegs14.png"
          imageAlt="Escola amazônica de madeira ao pôr do sol em meio à floresta"
          imageObjectPosition="center 70%"
          stat={{ target: 1207, thousands: true, label: '' }}
          caption={
            <p className="font-serif text-base italic text-greysoft md:text-lg">
              municípios brasileiros ainda não têm infraestrutura de fibra óptica.
            </p>
          }
          source="FONTE: ANATEL, PLANO NACIONAL DE CONECTIVIDADE"
          body="Isso significa escolas rurais sem aulas digitais, postos de saúde sem telemedicina e comunidades indígenas em grande parte desconectadas. As operadoras não chegam porque não dá lucro instalar fibra em regiões com poucos habitantes. E o Estado, sozinho, não dá conta da escala."
          quote="Mesmo onde o Starlink chega, a internet trava em momentos críticos e quem depende dela perde aula, perde consulta médica, perde direito básico de existir digitalmente."
        />

        <VoceSabia
          label="Você sabia, Artemis"
          tone="light"
          eyebrow="VOCÊ SABIA?"
          staticNumber={
            <>
              30<span className="text-[0.5em]">+</span>
            </>
          }
          caption="MISSÕES LUNARES PLANEJADAS ATÉ 2030"
          source="FONTE: NASA ARTEMIS PROGRAM, MORGAN STANLEY SPACE REPORT"
        >
          Muitas dependem de software autônomo de frota. Hoje, esse software é dominado por{' '}
          <span className="text-black">poucas empresas, todas estrangeiras</span>.
        </VoceSabia>

        <ProblemSection
          label="Problema 03, Autonomia"
          tone="light"
          eyebrow="PROBLEMA 03"
          title="Autonomia espacial dominada por outros"
          image="/images/imagegs9.png"
          imageAlt="Rover explorando a superfície de Marte ao entardecer"
          imageObjectPosition="22% 78%"
          imageScale={1.5}
          stat={{ target: 22, unit: 'min', unitClassName: 'ml-3 text-[0.42em]', label: '' }}
          caption={
            <p className="font-serif text-base italic text-greyfade md:text-lg">
              é o delay máximo de comunicação entre a Terra e Marte. É impossível pilotar uma sonda
              manualmente. Ela precisa decidir sozinha.
            </p>
          }
          source="FONTE: NASA JET PROPULSION LABORATORY"
          body="Programas como o Artemis (NASA) e as missões lunares privadas dependem hoje de software autônomo dominado por empresas americanas e chinesas. O Brasil já provou que sabe construir tecnologia espacial própria, a Visiona desenvolveu o VCUB1, primeiro nanossatélite de observação da Terra feito pela indústria nacional, mas ainda não existe uma alternativa nacional consolidada em sistemas autônomos."
          quote="A POLARIS é nossa proposta para preencher esse vazio com tecnologia brasileira pensada para o nosso contexto."
        />

        <Solucao />
        <Diferenciais />

        <ProductSection
          label="POLARIS Earth"
          tone="light"
          index="01"
          name="POLARIS EARTH"
          title="Monitoramento ambiental e resposta a desastres"
          intro="A POLARIS Earth observa o Brasil a partir do espaço e calcula automaticamente onde a Defesa Civil, os Bombeiros e os órgãos ambientais devem chegar primeiro. A cada atualização, centenas de milhares de focos de calor e leituras de satélite (NASA, INPE, ESA Sentinel) são limpos e cruzados com dados demográficos do IBGE até virarem um índice de risco por município, em tempo real."
          detail="Quando uma enchente atinge dezenas de cidades, o coordenador não decide no improviso. A plataforma desenha o estado como uma malha de municípios ligados pelas estradas, ordena cada cidade pelo risco e calcula a sequência de atendimento de menor custo. Ele aprova a rota com um clique, e as equipes saem para os lugares certos, na ordem certa."
          whoUses="Defesa Civil estadual e municipal, Corpo de Bombeiros, IBAMA, Cooperativas agrícolas, Secretarias estaduais de meio ambiente"
          example="Maio de 2024, enchente atinge 478 municípios no RS. Nas primeiras 72 horas, as que mais decidem quem vive, a logística de resgate falhou e equipes foram para o lugar errado. A proposta da POLARIS Earth é calcular essa sequência de atendimento automaticamente, tirando a decisão do improviso."
          image="/images/imagegs10.png"
          imageAlt="Satélite observando a América do Sul a partir da órbita"
          imageSide="right"
        />

        <ProductSection
          label="POLARIS Connect"
          tone="dark"
          index="02"
          name="POLARIS CONNECT"
          title="Conectividade satelital resiliente para regiões remotas"
          intro="A POLARIS Connect combina internet via satélite (Starlink) com edge computing local, um pequeno servidor instalado dentro da escola ou do posto de saúde. A diferença é simples: quando o satélite cai (chuva forte, sombra de árvore, sinal instável), o sistema continua funcionando porque os conteúdos críticos já estão em cache local."
          detail="Não é só Starlink. Dentro da escola, a conexão é separada em duas redes isoladas, uma para as salas e o laboratório, outra para a coordenação e a administração, e o servidor local guarda as aulas em cache. Os alunos seguem assistindo aula e o posto de saúde atendendo mesmo quando a janela de satélite fecha. Quando ela volta, tudo sincroniza com a nuvem."
          whoUses="Secretarias municipais de educação e saúde, FUNAI, ONGs em regiões remotas, Escolas indígenas, Postos de saúde isolados"
          example="Numa escola ribeirinha de Atalaia do Norte/AM, no Vale do Javari, na fronteira com o Peru, a fibra federal chega à sede do município, mas não alcança as comunidades do interior. Sem cobertura de celular e com conexão instável ou inexistente, a professora ainda depende do material impresso que vem de barco. A POLARIS Connect instala um Starlink com um servidor local na escola, que guarda as aulas em vídeo, pra que dezenas de crianças sigam estudando mesmo quando o satélite sai do ar."
          image="/images/imagegs7.png"
          imageAlt="Cabana com antena Starlink à noite, janela iluminada de laranja na floresta"
          imageObjectPosition="center 60%"
          imageSide="left"
        />

        <ProductSection
          label="POLARIS Fleet"
          tone="light"
          index="03"
          name="POLARIS FLEET"
          title="Controle de frota autônoma em missões espaciais"
          intro="A POLARIS Fleet é o software brasileiro que controla frotas de sondas (rovers, drones) em missões lunares e marcianas. Em Marte, o delay de comunicação chega a 22 minutos; na Lua, a sonda fica sem contato sempre que perde a linha de visada com a Terra. Nos dois casos, é impossível pilotar manualmente, e as sondas precisam decidir sozinhas. E essa decisão precisa ser segura, rastreável e auditável."
          detail="O Comandante de Missão envia comandos estratégicos (colete 50 kg de gelo na cratera Shackleton e volte antes da bateria cair a 20%). Cada sonda, mineradora ou exploradora, cumpre a rotina do seu jeito: confere a própria bateria, recusa terreno onde não pode entrar, para antes de estourar a carga e reporta ao centro de comando. Falha crítica vira alerta na hora, em vez de derrubar a missão."
          whoUses="Agência Espacial Brasileira (AEB), Visiona Tecnologia Espacial, Centros de pesquisa universitários, Empresas brasileiras do programa Artemis (NASA)"
          example="Base lunar no polo sul, Comandante despacha três sondas para extrair gelo. As sondas operam de forma autônoma: uma desvia de uma cratera fora do mapa, outra atinge limite de carga e volta, a terceira tem falha de bateria. O sistema alerta o Comandante, que despacha sonda reserva. Missão concluída sem ele pilotar nada."
          image="/images/imagegs18.png"
          imageAlt="Base lunar autônoma com rovers operando próximos a uma cratera"
          imageSide="right"
        />

        <Atalaia />

        <Interstitial label="Transição, impacto" starfield className="flex min-h-[78vh] md:min-h-screen">
          <p className="font-serif text-[clamp(2rem,6.5vw,5.5rem)] italic leading-[1.12] text-white">
            E é só <span className="text-fire text-glow">o começo</span>.
          </p>
        </Interstitial>

        <Impacto />

        <VoceSabia
          label="Você sabia, economia espacial"
          tone="dark"
          eyebrow="VOCÊ SABIA?"
          staticNumber={
            <>
              <span className="mr-1 align-baseline text-[0.5em]">US$</span>1,8
              <span className="ml-2 text-[0.5em]">tri</span>
            </>
          }
          caption="ECONOMIA ESPACIAL ATÉ 2035"
          source="FONTE: WORLD ECONOMIC FORUM, MCKINSEY"
        >
          Vai rivalizar com a <span className="text-white">indústria global de semicondutores</span>.
          O Brasil tem uma chance única de se posicionar nesta década.
        </VoceSabia>

        <Personas />

        <Equipe />

        <VoceSabia
          label="Você sabia, Polaris"
          tone="light"
          eyebrow="VOCÊ SABIA?"
          stat={{
            target: 1000,
            thousands: true,
            unit: '+',
            unitClassName: 'ml-1 align-top text-[0.4em]',
            label: 'anos guiando navegadores',
          }}
          caption="ANOS GUIANDO NAVEGADORES"
          source="FONTE: NASA ASTRONOMY"
        >
          A estrela Polaris brilha há <span className="text-black">dezenas de milhões de anos</span>{' '}
          e guiou navegadores por mais de mil anos. A POLARIS, a plataforma, começou em maio de 2026.
        </VoceSabia>

        <Interstitial label="Transição, manifesto" starfield className="flex min-h-[78vh] md:min-h-screen">
          <p className="font-serif text-[clamp(2rem,6.5vw,5.5rem)] italic leading-[1.12] text-white">
            Uma <span className="text-fire text-glow">última</span> coisa.
          </p>
        </Interstitial>

        <Manifesto />
      </main>
      <Footer />
      <MissionTicker />
      <ScrollBar />
      <Constellation />
      <SmoothScroll />
      <Preloader />
    </>
  );
}
