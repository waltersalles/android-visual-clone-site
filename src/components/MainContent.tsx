
const MainContent = () => {
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Título Principal */}
        <h1 className="text-4xl md:text-5xl font-bebas text-android-dark-green text-center mb-8 leading-tight">
          História do Mascote do Android
        </h1>

        {/* Conteúdo do Artigo */}
        <article className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Provavelmente você sabe que o sistema operacional <strong>Android</strong>, mantido pelo <strong>Google</strong> é um dos mais utilizados para dispositivos móveis em todo o mundo. Mas talvez você não saiba que o seu simpático mascote tem um nome e uma história muito curiosa? Pois acompanhe esse artigo para aprender muita coisa sobre esse robozinho.
          </p>

          <h2 className="text-2xl font-bebas text-android-dark-green mb-4 bg-gradient-to-r from-android-light-green to-white px-4 py-2 rounded-l-lg">
            A primeira versão
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            A primeira tentativa de criar um mascote surgiu em 2007 e veio de um desenvolvedor chamado <a href="#" className="text-android-dark-green hover:underline font-semibold">Dan Morrill</a>. Ele conta que abriu o <a href="#" className="text-android-dark-green hover:underline font-semibold">Inkscape</a> (software livre para vetorização de imagens) e criou sua própria versão de robô. O objetivo era apenas personificar o sistema apenas para a sua equipe, não existia nenhuma solicitação da empresa para a criação de um mascote.
          </p>

          {/* Imagem dos primeiros mascotes */}
          <figure className="my-8 text-center">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" 
              alt="Primeiros mascotes do Android criados por Dan Morrill"
              className="mx-auto max-w-full h-auto rounded-lg shadow-md"
            />
            <figcaption className="text-sm text-gray-600 mt-2 italic">
              Esses foram os primeiros mascotes criados por Dan Morrill. Hoje eles podem ser baixados gratuitamente.
            </figcaption>
          </figure>

          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Essa primeira versão bizarra até foi batizada em homenagem ao seu criador: seriam os <strong>Dandroids</strong>.
          </p>

          <h2 className="text-2xl font-bebas text-android-dark-green mb-4 bg-gradient-to-r from-android-light-green to-white px-4 py-2 rounded-l-lg">
            Surge um novo mascote
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            A ideia de ter um mascote foi amadurecendo e a missão foi passada para uma profissional da área. A ilustradora russa <a href="#" className="text-android-dark-green hover:underline font-semibold">Irina Blok</a>, também funcionária do Google, ficou com a missão de representar o pequeno robô de uma maneira mais agradável.
          </p>

          {/* Imagem da Irina Blok */}
          <figure className="my-8 text-center">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80" 
              alt="Irina Blok, criadora do Bugdroid"
              className="mx-auto max-w-md h-auto rounded-lg shadow-md"
            />
            <figcaption className="text-sm text-gray-600 mt-2 italic">
              Irina Blok, criadora do Bugdroid, o novo mascote do Android.
            </figcaption>
          </figure>

          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            A ideia principal da Irina era representar tudo graficamente com poucos traços e de forma mais chapada. O desenho também deveria gerar identificação rápida com quem o olha. Surgiu então o <strong>Bugdroid</strong>, o novo mascote do Android.
          </p>

          {/* Imagem do Bugdroid */}
          <figure className="my-8 text-center">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" 
              alt="Bugdroid, o mascote do Android"
              className="mx-auto max-w-sm h-auto rounded-lg shadow-md"
            />
            <figcaption className="text-sm text-gray-600 mt-2 italic">
              Bugdroid, o mascote do Android.
            </figcaption>
          </figure>

          <p className="text-gray-700 leading-relaxed mb-8 text-justify">
            A principal inspiração para os traços do novo <strong>Bugdroid</strong> veio daqueles bonequinhos que ilustram portas de banheiro para indicar o gênero de cada porta. Conta a lenda que a artista estava criando em sua mesa no escritório do <strong>Google</strong> e olhou para o lado dos banheiros e a identificação foi imediata: simples, limpo, objetivo.
          </p>

          {/* Vídeo do YouTube */}
          <div className="my-8">
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/l2UDgpLz20M"
                title="The next evolution of Android"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Caixa de conteúdo extra */}
          <aside className="bg-android-light-green p-6 rounded-lg my-8 border-l-4 border-android-dark-green">
            <h3 className="text-xl font-bebas text-android-dark-green mb-4">
              Quer aprender mais?
            </h3>
            <p className="text-gray-700 mb-4">
              Outro assunto curioso em relação ao Android é que cada versão sempre foi nomeada em homenagem a um doce, em ordem alfabética a partir da versão 1.5 até a 9.0.
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <li>✓ 1.5 - <strong>Cupcake</strong></li>
              <li>✓ 1.6 - <strong>Donut</strong></li>
              <li>✓ 3.0 - <strong>Eclair</strong></li>
              <li>✓ 2.2 - <strong>Froyo</strong></li>
              <li>✓ 2.3 - <strong>Gingerbread</strong></li>
              <li>✓ 3.0 - <strong>Honeycomb</strong></li>
              <li>✓ 4.0 - <strong>Ice Cream Sandwich</strong></li>
              <li>✓ 4.1 - <strong>Jelly Bean</strong></li>
              <li>✓ 4.4 - <strong>KitKat</strong></li>
              <li>✓ 5.0 - <strong>Lollipop</strong></li>
              <li>✓ 6.0 - <strong>Marshmallow</strong></li>
              <li>✓ 7.0 - <strong>Nougat</strong></li>
              <li>✓ 8.0 - <strong>Oreo</strong></li>
              <li>✓ 9.0 - <strong>Pie</strong></li>
            </ul>
            <p className="text-gray-700 mt-4 text-sm">
              Infelizmente, o <strong>Android Q</strong> não existiu, pois o Google resolveu pôr fim a essa divertida prática e começou a usar numerações, o que deu origem ao Android 10.
            </p>
          </aside>

          <p className="text-gray-700 leading-relaxed text-justify">
            Então é isso! Espero que você tenha gostado do nosso artigo sobre essa curiosidade do sistema Android e seu simpático mascote.
          </p>
        </article>
      </div>
    </main>
  );
};

export default MainContent;
