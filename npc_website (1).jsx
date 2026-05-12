export default function NPCWebsite() {
  const services = [
    'Monografias',
    'Artigos Científicos',
    'Teses e Dissertações',
    'Revisão Bibliográfica',
    'Formatação APA / ABNT',
    'Esboços com IA'
  ]

  const areas = [
    'Ciências Policiais',
    'Direito',
    'Educação',
    'Gestão',
    'Sociologia',
    'Administração Pública',
    'Saúde',
    'Economia'
  ]

  return (
    <div className="bg-[#02045c] text-white min-h-screen font-sans">
      {/* HEADER */}
      <header className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-6 border-b border-yellow-400 sticky top-0 bg-[#02045c] z-50">
        <div>
          <h1 className="text-5xl font-extrabold text-yellow-400 tracking-wide">NPC</h1>
          <p className="text-lg font-semibold">Núcleo de Pesquisa Científica</p>
        </div>

        <nav className="flex gap-6 mt-4 md:mt-0 text-lg font-medium">
          <a href="#inicio" className="hover:text-yellow-400">Início</a>
          <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
          <a href="#processo" className="hover:text-yellow-400">Como Funciona</a>
          <a href="#contacto" className="hover:text-yellow-400">Contacto</a>
        </nav>

        <a
          href="https://wa.me/258822279205"
          className="mt-4 md:mt-0 bg-yellow-400 text-[#02045c] px-6 py-3 rounded-full font-bold hover:scale-105 transition"
        >
          Falar no WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="grid md:grid-cols-2 gap-12 items-center px-6 md:px-16 py-20"
      >
        <div>
          <p className="text-2xl leading-relaxed">
            Você não precisa passar por isso sozinho.
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold text-yellow-400 mt-6 leading-tight">
            Está a lutar para concluir a sua MONOGRAFIA?
          </h2>

          <p className="mt-8 text-3xl font-semibold">
            Nós ajudamos!
          </p>

          <ul className="mt-8 space-y-4 text-xl">
            <li>✓ Escolha do tema</li>
            <li>✓ Construção do problema</li>
            <li>✓ Revisão bibliográfica</li>
            <li>✓ Metodologia</li>
            <li>✓ Análise e discussão de resultados</li>
            <li>✓ Revisão e formatação (APA/ABNT)</li>
            <li>✓ Apoio até à defesa</li>
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/258822279205"
              className="bg-yellow-400 text-[#02045c] px-8 py-4 rounded-full text-lg font-bold"
            >
              Solicitar Ajuda
            </a>

            <a
              href="#servicos"
              className="border border-yellow-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-[#02045c] transition"
            >
              Ver Serviços
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-yellow-400 p-5 rounded-full shadow-2xl">
            <div className="bg-white w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full flex items-center justify-center text-[#02045c] text-center px-10 font-bold text-3xl">
              CAPELO + LIVROS + LOGOTIPO NPC
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT BAR */}
      <section className="bg-yellow-400 text-[#02045c] px-6 md:px-16 py-8 grid md:grid-cols-2 gap-6 text-lg font-semibold">
        <div>
          <p>📞 822279205 / 877412620</p>
          <p className="mt-2">📍 Estamos presentes em Maputo e Tete</p>
        </div>

        <div>
          <p>✉ helio52tembe@gmail.com</p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-white text-[#02045c] px-6 md:px-16 py-20">
        <h3 className="text-5xl font-bold text-center mb-16">
          Nossos Serviços
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <div className="w-16 h-16 rounded-full bg-[#02045c] text-yellow-400 flex items-center justify-center text-3xl mb-6">
                ★
              </div>

              <h4 className="text-2xl font-bold mb-4">{service}</h4>

              <p className="text-gray-700 leading-relaxed">
                Serviço especializado com rigor científico e acompanhamento personalizado.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="px-6 md:px-16 py-20">
        <h3 className="text-5xl font-bold text-center mb-16 text-yellow-400">
          Por Que Escolher o NPC?
        </h3>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl mb-4">🛡</div>
            <h4 className="text-2xl font-bold">Confidencialidade</h4>
          </div>

          <div>
            <div className="text-5xl mb-4">⏱</div>
            <h4 className="text-2xl font-bold">Entrega no Prazo</h4>
          </div>

          <div>
            <div className="text-5xl mb-4">🎓</div>
            <h4 className="text-2xl font-bold">Qualidade Científica</h4>
          </div>

          <div>
            <div className="text-5xl mb-4">🤝</div>
            <h4 className="text-2xl font-bold">Atendimento Personalizado</h4>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="bg-white text-[#02045c] px-6 md:px-16 py-20">
        <h3 className="text-5xl font-bold text-center mb-16">
          Como Funciona
        </h3>

        <div className="grid md:grid-cols-5 gap-8 text-center">
          {[
            'Contacto',
            'Planeamento',
            'Produção',
            'Revisão',
            'Entrega'
          ].map((step, index) => (
            <div key={step}>
              <div className="w-20 h-20 rounded-full bg-[#02045c] text-yellow-400 flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                {index + 1}
              </div>
              <h4 className="text-2xl font-bold">{step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ÁREAS */}
      <section className="px-6 md:px-16 py-20 bg-yellow-400 text-[#02045c]">
        <h3 className="text-5xl font-bold text-center mb-16">
          Áreas de Actuação
        </h3>

        <div className="grid md:grid-cols-4 gap-6 text-xl font-semibold">
          {areas.map((area) => (
            <div key={area} className="bg-white rounded-2xl p-5 shadow-lg">
              ✓ {area}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-24">
        <h3 className="text-5xl font-extrabold text-yellow-400">
          Transforme o stress em resultados
        </h3>

        <p className="mt-6 text-2xl max-w-3xl mx-auto leading-relaxed">
          Receba acompanhamento académico profissional e avance com confiança no seu trabalho científico.
        </p>

        <a
          href="https://wa.me/258822279205"
          className="inline-block mt-10 bg-yellow-400 text-[#02045c] px-10 py-5 rounded-full text-2xl font-bold hover:scale-105 transition"
        >
          Fale Connosco Agora
        </a>
      </section>

      {/* FOOTER */}
      <footer
        id="contacto"
        className="bg-[#01023b] px-6 md:px-16 py-14 border-t border-yellow-400"
      >
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-3xl font-bold text-yellow-400">NPC</h4>
            <p className="mt-4 text-lg leading-relaxed">
              Núcleo de Pesquisa Científica especializado em produção académica e apoio metodológico.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-yellow-400 mb-4">
              Contactos
            </h4>
            <p>822279205 / 877412620</p>
            <p className="mt-3">Maputo e Tete e Todas Provincias de forma online</p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-yellow-400 mb-4">
              Emails
            </h4>
            <p>helio52tembe@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-300">
          © 2026 NPC - Núcleo de Pesquisa Científica. Todos os direitos reservados.
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/258822279205"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-2xl hover:scale-110 transition"
      >
        💬
      </a>
    </div>
  )
}