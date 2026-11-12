import React, { useState, useEffect } from 'react';
import {
  Menu, X, HeartHandshake, Building2, ArrowRight, ArrowLeft,
  CheckCircle2, ShieldCheck, Compass, Heart, Target, Users,
  Lightbulb, Award, MapPin, Sparkles, ClipboardCheck, Layers,
  TrendingUp, RefreshCw, UserCheck, Send
} from 'lucide-react';
import { VALUES_DATA, TEAM_ROLES } from './data';

const ValueIcon = ({ id, className = "w-7 h-7" }) => {
  switch (id) {
    case 'responsabilidad': return <ShieldCheck className={className} />;
    case 'coherencia': return <Compass className={className} />;
    case 'empatia': return <Heart className={className} />;
    case 'disciplina': return <Target className={className} />;
    case 'solidaridad': return <Users className={className} />;
    case 'innovacion': return <Lightbulb className={className} />;
    case 'respeto': return <Award className={className} />;
    default: return <Sparkles className={className} />;
  }
};

const LatinAmericaMap = () => {
  const cities = [
    { name: 'Ciudad de México', x: 115, y: 115 },
    { name: 'Guatemala', x: 148, y: 145 },
    { name: 'Bogotá', x: 205, y: 192 },
    { name: 'Quito', x: 185, y: 215 },
    { name: 'Lima', x: 195, y: 268 },
    { name: 'São Paulo', x: 295, y: 315 },
    { name: 'Santiago', x: 215, y: 365 },
    { name: 'Buenos Aires', x: 255, y: 375 },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-teal-100">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0F4C5C] bg-teal-50 px-3 py-1 rounded-full">
          Proyección Latinoamérica
        </span>
        <span className="text-xs text-slate-500">Alcance formativo regional</span>
      </div>
      <svg viewBox="0 0 400 450" className="w-full h-auto drop-shadow-sm">
        <defs>
          <linearGradient id="latamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F4C5C" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#1B9AAA" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#52B788" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        {/* Silueta estilizada de Latinoamérica */}
        <path
          d="M 75,75 L 135,85 L 150,125 L 175,155 L 195,172 L 235,175 L 285,205 L 335,245 L 320,310 L 275,365 L 235,425 L 205,420 L 200,340 L 180,275 L 170,215 L 185,178 L 155,160 L 125,135 L 95,115 Z"
          fill="url(#latamGrad)"
          stroke="#1B9AAA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Líneas de conexión */}
        <polyline
          points="115,115 148,145 205,192 185,215 195,268 215,365 255,375 295,315 205,192"
          fill="none"
          stroke="#E09F3E"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        {cities.map((c, idx) => (
          <g key={idx}>
            <circle cx={c.x} cy={c.y} r="7" fill="#1B9AAA" fillOpacity="0.25" />
            <circle cx={c.x} cy={c.y} r="3.5" fill="#0F4C5C" />
            <text
              x={c.x + 8}
              y={c.y + 4}
              fontSize="10"
              fontWeight="600"
              fill="#0F4C5C"
            >
              {c.name}
            </text>
          </g>
        ))}
      </svg>
      <p className="text-[11px] text-slate-500 text-center mt-2">
        * Ciudades de referencia de proyección institucional y alcance digital en Latinoamérica.
      </p>
    </div>
  );
};

export default function App() {
  const [activePage, setActivePage] = useState('inicio');
  const [selectedValue, setSelectedValue] = useState(null);
  const [commercialInterest, setCommercialInterest] = useState('personas');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [formSent, setFormSent] = useState(false);

  const navigateTo = (page, sectionId = null) => {
    setActivePage(page);
    setSelectedValue(null);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openValueDetail = (valObj) => {
    setSelectedValue(valObj);
    setActivePage('valor-detalle');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCommercial = (interestType) => {
    setCommercialInterest(interestType);
    setFormSent(false);
    setActivePage('comercial');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFDFC] text-slate-800">
      {/* HEADER GLOBAL */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-teal-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logotipo (Regresa a Inicio) */}
          <button
            onClick={() => navigateTo('inicio')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="Ir al inicio de NOVA EMOTION"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F4C5C] via-[#1B9AAA] to-[#52B788] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 text-amber-200" />
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-[#0F4C5C]">
                NOVA EMOTION
              </span>
              <span className="block text-[11px] font-medium text-teal-700 leading-tight">
                Bienestar Emocional y Organizacional
              </span>
            </div>
          </button>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {[
              { id: 'inicio', label: 'Inicio' },
              { id: 'nosotros', label: 'Nosotros' },
              { id: 'servicios', label: 'Servicios' },
              { id: 'equipo', label: 'Equipo' },
              { id: 'contacto', label: 'Contacto' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`text-sm font-semibold transition-colors ${
                  activePage === item.id
                    ? 'text-[#1B9AAA] border-b-2 border-[#1B9AAA] pb-1'
                    : 'text-slate-600 hover:text-[#0F4C5C]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigateTo('servicios')}
              className="bg-[#0F4C5C] hover:bg-[#1B9AAA] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm transition-all"
            >
              Conoce cómo podemos ayudarte
            </button>
          </nav>

          {/* Botón Menú Móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#0F4C5C] hover:bg-teal-50"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú Desplegable Móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-teal-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
            {[
              { id: 'inicio', label: 'Inicio' },
              { id: 'nosotros', label: 'Nosotros' },
              { id: 'servicios', label: 'Servicios' },
              { id: 'equipo', label: 'Equipo' },
              { id: 'contacto', label: 'Contacto' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold ${
                  activePage === item.id
                    ? 'bg-teal-50 text-[#0F4C5C]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => navigateTo('servicios')}
                className="w-full bg-[#0F4C5C] text-white font-semibold py-3 rounded-xl shadow"
              >
                Conoce cómo podemos ayudarte
              </button>
            </div>
          </div>
        )}
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow">
        {/* ================= PÁGINA INICIO ================= */}
        {activePage === 'inicio' && (
          <div>
            {/* Portada Principal */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F9F8] via-white to-[#E6F4F1] py-16 lg:py-24 border-b border-teal-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white border border-teal-200 px-4 py-1.5 rounded-full shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#52B788]" />
                    <span className="text-xs font-bold tracking-wide text-[#0F4C5C] uppercase">
                      Centro de Entrenamiento para el Bienestar Emocional y Organizacional
                    </span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F4C5C] leading-tight">
                    Bienestar que se construye.{' '}
                    <span className="text-[#1B9AAA]">Cambios que se sienten.</span>{' '}
                    Personas y organizaciones que crecen.
                  </h1>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Acompañamos a personas, familias y organizaciones mediante servicios personalizados y programas de entrenamiento orientados a identificar señales de alerta, fortalecer habilidades emocionales y promover la{' '}
                    <span className="font-semibold text-[#0F4C5C]">
                      salud psicoemocional de las personas y organizaciones
                    </span>
                    .
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('columna-personas');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-center gap-2 bg-[#0F4C5C] hover:bg-[#1B9AAA] text-white font-semibold px-7 py-4 rounded-2xl shadow-md transition-all"
                    >
                      <HeartHandshake className="w-5 h-5" />
                      Soy una persona o familiar
                    </button>
                    <button
                      onClick={() => {
                        const el = document.getElementById('columna-organizaciones');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-teal-50 text-[#0F4C5C] border-2 border-[#0F4C5C] font-semibold px-7 py-4 rounded-2xl transition-all"
                    >
                      <Building2 className="w-5 h-5" />
                      Represento una organización
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <LatinAmericaMap />
                </div>
              </div>
            </section>

            {/* Dos Columnas de Preguntas */}
            <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-3xl font-bold text-[#0F4C5C] mb-3">
                  ¿En qué podemos acompañarte hoy?
                </h2>
                <p className="text-slate-600">
                  Identificar a tiempo lo que ocurre en nuestro entorno familiar o laboral permite actuar con herramientas prácticas y lograr{' '}
                  <strong className="font-bold text-[#0F4C5C]">RESULTADOS</strong> verificables.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Tarjeta Personas */}
                <div
                  id="columna-personas"
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-teal-100 flex flex-col justify-between hover:shadow-xl transition-shadow"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#1B9AAA] flex items-center justify-center mb-6">
                      <HeartHandshake className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1B9AAA]">
                      Personas y Familias
                    </span>
                    <h3 className="text-2xl font-bold text-[#0F4C5C] mt-2 mb-3">
                      ¿Has notado que alguien que amas podría estar sufriendo en silencio?
                    </h3>
                    <p className="text-slate-600 text-sm mb-6">
                      A veces, las señales aparecen antes de que sepamos cómo interpretarlas:
                    </p>
                    <ul className="space-y-3.5 text-slate-700 text-sm mb-8">
                      {[
                        '¿Has notado que tu hijo, hija o una persona cercana ha cambiado su comportamiento?',
                        '¿Tu familiar o amiga parece triste, irritable o preocupado con frecuencia?',
                        '¿Has observado que alguien ha perdido el interés por actividades que antes disfrutaba?',
                        '¿Te preocupa que una persona cercana esté atravesando un periodo de ansiedad o desánimo?',
                        '¿Quieres aprender herramientas prácticas para apoyar a las personas que amas sin sustituir la atención profesional?'
                      ].map((q, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#52B788] shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-sm text-slate-600 italic mb-5">
                      «Aprender a reconocer las señales a tiempo puede abrir la puerta a una conversación, al acompañamiento oportuno y a la búsqueda de ayuda profesional cuando sea necesaria».
                    </p>
                    <button
                      onClick={() => navigateTo('servicios', 'servicios-personas')}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#1B9AAA] hover:bg-[#0F4C5C] text-white font-semibold py-4 px-6 rounded-2xl transition-colors"
                    >
                      Quiero conocer nuestros servicios para personas
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Tarjeta Organizaciones */}
                <div
                  id="columna-organizaciones"
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-teal-100 flex flex-col justify-between hover:shadow-xl transition-shadow"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#E09F3E] flex items-center justify-center mb-6">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E09F3E]">
                      Equipos y Empresas
                    </span>
                    <h3 className="text-2xl font-bold text-[#0F4C5C] mt-2 mb-3">
                      ¿Has notado que tu equipo necesita recuperar su motivación?
                    </h3>
                    <p className="text-slate-600 text-sm mb-6">
                      El bienestar de las personas influye directamente en la colaboración, el compromiso y el desempeño:
                    </p>
                    <ul className="space-y-3.5 text-slate-700 text-sm mb-8">
                      {[
                        '¿Has observado que tus colaboradores no alcanzan el desempeño esperado?',
                        '¿Tu equipo parece desmotivado o poco comprometido con los objetivos?',
                        '¿Existen dificultades de comunicación o colaboración entre las áreas?',
                        '¿Notas conflictos recurrentes o dificultades para trabajar en equipo?',
                        '¿Te preocupa el estrés laboral y su impacto en la salud psicoemocional de las personas y organizaciones?'
                      ].map((q, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#E09F3E] shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-sm text-slate-600 italic mb-5">
                      «Un equipo que desarrolla sus habilidades emocionales y de colaboración puede construir mejores relaciones de trabajo y avanzar hacia objetivos compartidos».
                    </p>
                    <button
                      onClick={() => navigateTo('servicios', 'servicios-organizaciones')}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0F4C5C] hover:bg-[#1B9AAA] text-white font-semibold py-4 px-6 rounded-2xl transition-colors"
                    >
                      Quiero fortalecer mi organización
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Franja de Invitación Institucional */}
            <section className="bg-[#0F4C5C] text-white py-16">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <h2 className="text-3xl font-bold">
                  Un enfoque práctico, humano y orientado a <strong className="font-extrabold text-amber-300">RESULTADOS</strong>
                </h2>
                <p className="text-teal-100 max-w-2xl mx-auto text-lg">
                  Conoce nuestra historia institucional, los principios que guían cada intervención y al equipo dedicado a impulsar el bienestar integral.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-2">
                  <button
                    onClick={() => navigateTo('nosotros')}
                    className="bg-white text-[#0F4C5C] hover:bg-teal-50 font-semibold px-7 py-3.5 rounded-xl transition-colors"
                  >
                    Conoce Nosotros y Nuestros Valores
                  </button>
                  <button
                    onClick={() => navigateTo('equipo')}
                    className="bg-transparent border border-teal-300 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-colors"
                  >
                    Conoce al Equipo
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================= PÁGINA NOSOTROS ================= */}
        {activePage === 'nosotros' && (
          <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Historia */}
            <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-teal-100 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="w-44 h-44 rounded-full bg-gradient-to-br from-[#0F4C5C] to-[#1B9AAA] flex items-center justify-center text-white shadow-lg mb-4">
                  <UserCheck className="w-20 h-20 text-teal-100" />
                </div>
                <h3 className="text-xl font-bold text-[#0F4C5C]">Carlos Chuquival</h3>
                <p className="text-sm font-medium text-[#1B9AAA]">CEO & Fundador — NOVA EMOTION</p>
                <span className="mt-2 inline-block text-xs bg-teal-50 text-[#0F4C5C] px-3 py-1 rounded-full font-semibold">
                  Trayectoria desde 1990
                </span>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B9AAA]">
                  Nuestra Historia
                </span>
                <h2 className="text-3xl font-bold text-[#0F4C5C]">
                  Una trayectoria dedicada al desarrollo humano
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  La trayectoria de Carlos Chuquival en el campo de la Psicología se inicia en 1990, dando comienzo a un camino de formación, aprendizaje y dedicación al desarrollo humano.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  A lo largo de su recorrido profesional, ha orientado su trabajo hacia el crecimiento personal, las relaciones familiares y el fortalecimiento del bienestar emocional, participando durante décadas en conferencias y actividades formativas dirigidas a personas y comunidades.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Su experiencia y vocación de servicio inspiran la creación de NOVA EMOTION, una propuesta que busca acercar conocimientos y herramientas prácticas a personas, familias y organizaciones en toda Latinoamérica, promoviendo la identificación temprana de señales de alerta y el desarrollo de habilidades para afrontar dificultades cotidianas.
                </p>
              </div>
            </section>

            {/* Misión y Visión */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#0F4C5C] to-[#16697A] text-white rounded-3xl p-8 sm:p-10 shadow-md space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <Target className="w-6 h-6 text-amber-300" />
                </div>
                <h3 className="text-2xl font-bold">Nuestra Misión</h3>
                <p className="text-teal-50 leading-relaxed">
                  Somos un equipo comprometido con la mejora continua del ser humano, mediante la identificación oportuna de necesidades, la prevención y el entrenamiento en técnicas y herramientas prácticas que contribuyan al bienestar integral de las personas y las organizaciones.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-teal-100 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#1B9AAA]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F4C5C]">Nuestra Visión</h3>
                <p className="text-slate-600 leading-relaxed">
                  Ser una organización líder en Latinoamérica en procesos de capacitación, identificación de señales de alerta, orientación y asesoría personalizada y corporativa en temas relacionados con la ansiedad, la depresión y la{' '}
                  <span className="font-semibold text-[#0F4C5C]">
                    salud psicoemocional de las personas y organizaciones
                  </span>
                  , construyendo una visión de desarrollo y mejora continua a 30 años.
                </p>
                <p className="text-xs text-slate-400">
                  * Proyección institucional orientada al alcance formativo en toda Latinoamérica.
                </p>
              </div>
            </section>

            {/* Nuestros Valores (Interactivos) */}
            <section id="seccion-valores" className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B9AAA]">
                  Cultura Institucional
                </span>
                <h2 className="text-3xl font-bold text-[#0F4C5C] mt-1">
                  Nuestros Valores
                </h2>
                <p className="text-slate-600 mt-2">
                  Haz clic en cada valor para explorar cómo lo vivimos en la familia, en la vida personal y dentro de las organizaciones.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {VALUES_DATA.map((val) => (
                  <button
                    key={val.id}
                    onClick={() => openValueDetail(val)}
                    className="group bg-white rounded-2xl p-6 text-left shadow-sm hover:shadow-xl border border-teal-100 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${val.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <ValueIcon id={val.id} className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0F4C5C] mb-2">
                        {val.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {val.shortDesc}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#1B9AAA] group-hover:translate-x-1 transition-transform">
                      Explorar este valor <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ================= PÁGINA DETALLE DE VALOR ================= */}
        {activePage === 'valor-detalle' && selectedValue && (
          <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigateTo('nosotros', 'seccion-valores')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0F4C5C] hover:text-[#1B9AAA] bg-white px-4 py-2.5 rounded-xl shadow-sm border border-teal-100 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              ← Volver a Nosotros
            </button>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-teal-100">
              <div className={`bg-gradient-to-r ${selectedValue.color} p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center gap-6`}>
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <ValueIcon id={selectedValue.id} className="w-10 h-10 text-white" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-teal-100 font-semibold">
                    Valor Institucional NOVA EMOTION
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">
                    {selectedValue.name}
                  </h1>
                </div>
              </div>

              <div className="p-8 sm:p-12 space-y-8">
                <div>
                  <h2 className="text-lg font-bold text-[#0F4C5C] mb-2">Definición</h2>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {selectedValue.definition}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#FAFDFC] p-6 rounded-2xl border border-teal-100">
                    <h3 className="font-bold text-[#1B9AAA] mb-2 flex items-center gap-2">
                      <HeartHandshake className="w-5 h-5" />
                      En nuestra vida cotidiana y familia
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {selectedValue.personal}
                    </p>
                  </div>

                  <div className="bg-[#FAFDFC] p-6 rounded-2xl border border-teal-100">
                    <h3 className="font-bold text-[#0F4C5C] mb-2 flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      En las organizaciones y equipos
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {selectedValue.organizational}
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-amber-800 mb-1">
                    ¿Cómo se vive este valor en la práctica?
                  </h3>
                  <p className="text-slate-700 text-sm">
                    {selectedValue.example}
                  </p>
                </div>

                <blockquote className="border-l-4 border-[#1B9AAA] pl-5 italic text-slate-700 text-lg font-medium">
                  «{selectedValue.quote}»
                </blockquote>

                <div className="pt-4">
                  <button
                    onClick={() => navigateTo('nosotros', 'seccion-valores')}
                    className="inline-flex items-center gap-2 bg-[#0F4C5C] hover:bg-[#1B9AAA] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    ← Volver a Nosotros
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PÁGINA SERVICIOS ================= */}
        {activePage === 'servicios' && (
          <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Navegación interna rápida */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1B9AAA]">
                Nuestros Programas y Metodología
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C5C]">
                Entrenamos habilidades para una vida y un trabajo más saludables
              </h1>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a href="#que-hacemos" className="text-xs font-bold bg-white border border-teal-200 text-[#0F4C5C] px-4 py-2 rounded-full hover:bg-teal-50">
                  1. ¿Qué hacemos?
                </a>
                <a href="#que-ofrecemos" className="text-xs font-bold bg-white border border-teal-200 text-[#0F4C5C] px-4 py-2 rounded-full hover:bg-teal-50">
                  2. ¿Qué ofrecemos?
                </a>
                <a href="#como-lo-hacemos" className="text-xs font-bold bg-white border border-teal-200 text-[#0F4C5C] px-4 py-2 rounded-full hover:bg-teal-50">
                  3. ¿Cómo lo hacemos?
                </a>
              </div>
            </div>

            {/* 1. Qué Hacemos */}
            <section id="que-hacemos" className="space-y-8">
              <div className="border-b border-teal-100 pb-4">
                <h2 className="text-2xl font-bold text-[#0F4C5C]">1. ¿Qué hacemos?</h2>
                <p className="text-slate-600 text-sm">
                  Dos líneas especializadas de entrenamiento para fortalecer la salud psicoemocional de las personas y organizaciones.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div id="servicios-personas" className="bg-white rounded-3xl p-8 shadow-sm border border-teal-100 space-y-5">
                  <div className="inline-flex items-center gap-2 text-[#1B9AAA] font-bold text-sm">
                    <HeartHandshake className="w-5 h-5" />
                    A. Servicios para Personas y Familias
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Brindamos servicios personalizados y programas de entrenamiento orientados a la identificación de señales de ansiedad y depresión, al desarrollo de habilidades personales y al aprendizaje de herramientas prácticas para acompañar a las personas que amamos.
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    {[
                      'Cursos de entrenamiento para identificar señales de alerta relacionadas con ansiedad y depresión.',
                      'Formación para familiares y personas cercanas que desean brindar acompañamiento adecuado.',
                      'Entrenamiento en habilidades de comunicación y escucha activa.',
                      'Desarrollo personal y fortalecimiento de recursos de afrontamiento.',
                      'Orientación responsable sobre cuándo recurrir a un profesional de la salud.'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="servicios-organizaciones" className="bg-white rounded-3xl p-8 shadow-sm border border-teal-100 space-y-5">
                  <div className="inline-flex items-center gap-2 text-[#0F4C5C] font-bold text-sm">
                    <Building2 className="w-5 h-5" />
                    B. Servicios para Organizaciones
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Brindamos programas de entrenamiento orientados al desarrollo de habilidades personales y colectivas, la comunicación efectiva, la colaboración y el fortalecimiento de equipos de trabajo.
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    {[
                      'Entrenamiento para mejorar la colaboración y productividad de los equipos.',
                      'Talleres de comunicación y relaciones interpersonales saludables.',
                      'Desarrollo de habilidades de liderazgo humano.',
                      'Programas de motivación y compromiso laboral.',
                      'Manejo constructivo de situaciones de tensión y asesoría corporativa.'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#E09F3E] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. Qué Ofrecemos */}
            <section id="que-ofrecemos" className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-teal-100 space-y-8">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B9AAA]">
                  2. ¿Qué ofrecemos?
                </span>
                <h2 className="text-3xl font-bold text-[#0F4C5C] mt-1">
                  Ofrecemos <strong className="font-extrabold text-[#1B9AAA]">RESULTADOS</strong> medibles y verificables
                </h2>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  Desde la primera intervención técnica y práctica, cada entrenamiento se planifica según objetivos previamente definidos para generar aprendizajes observables y avances evaluables mediante indicadores claros.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { step: 'Paso 1', title: 'Identificación', desc: 'Identificación de las necesidades específicas y definición de objetivos.' },
                  { step: 'Paso 2', title: 'Aplicación', desc: 'Aplicación de actividades y técnicas prácticas de entrenamiento.' },
                  { step: 'Paso 3', title: 'Evaluación', desc: 'Evaluación de los avances mediante indicadores establecidos previamente.' },
                  { step: 'Paso 4', title: 'Seguimiento', desc: 'Seguimiento continuo y recomendaciones para la mejora sostenida.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#FAFDFC] p-6 rounded-2xl border border-teal-100">
                    <span className="text-xs font-bold text-[#1B9AAA] uppercase">{item.step}</span>
                    <h3 className="text-lg font-bold text-[#0F4C5C] mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Cómo lo Hacemos */}
            <section id="como-lo-hacemos" className="space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B9AAA]">
                  3. ¿Cómo lo hacemos?
                </span>
                <h2 className="text-2xl font-bold text-[#0F4C5C] mt-1">
                  Un método estructurado para aprender, practicar y mejorar
                </h2>
              </div>

              {/* Secuencia de 5 Etapas */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {[
                  { icon: ClipboardCheck, label: 'Identificamos' },
                  { icon: Layers, label: 'Planificamos' },
                  { icon: Users, label: 'Entrenamos' },
                  { icon: TrendingUp, label: 'Evaluamos' },
                  { icon: RefreshCw, label: 'Mejoramos' },
                ].map((stage, idx) => {
                  const IconComp = stage.icon;
                  return (
                    <div key={idx} className="bg-[#0F4C5C] text-white rounded-2xl p-5 text-center flex flex-col items-center justify-center shadow-sm">
                      <IconComp className="w-7 h-7 text-amber-300 mb-2" />
                      <span className="font-bold text-sm">{stage.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-3xl p-8 border border-teal-100 grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-[#0F4C5C] mb-3">Herramientas aplicadas en cada sesión:</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• <strong>Técnicas de modificación de pensamientos:</strong> identificación y revisión de patrones cognitivos para desarrollar alternativas útiles.</li>
                    <li>• <strong>Técnicas de autoayuda:</strong> recursos educativos para fortalecer el autocuidado y afrontamiento cotidiano.</li>
                    <li>• <strong>Técnicas de comunicación y programación neurolingüística (PNL):</strong> ejercicios prácticos de comunicación y definición de objetivos.</li>
                    <li>• <strong>Dinámicas participativas y reflexión:</strong> ejercicios individuales y grupales con seguimiento.</li>
                  </ul>
                </div>
                <div className="bg-teal-50/70 rounded-2xl p-6 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Nota de transparencia institucional:</strong> Los programas y cursos de entrenamiento de NOVA EMOTION tienen un enfoque educativo, preventivo y formativo. No constituyen diagnóstico clínico ni reemplazan la evaluación o tratamiento brindado por profesionales de la salud cuando estos sean necesarios.
                  </p>
                  <button
                    onClick={() => navigateTo('contacto')}
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-[#0F4C5C] hover:bg-[#1B9AAA] text-white text-sm font-semibold py-3 px-5 rounded-xl transition-colors"
                  >
                    Solicitar orientación sobre nuestros programas
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================= PÁGINA EQUIPO ================= */}
        {activePage === 'equipo' && (
          <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1B9AAA]">
                Nuestro Equipo
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C5C]">
                Personas comprometidas con el bienestar y el desarrollo humano
              </h1>
              <p className="text-slate-600">
                En NOVA EMOTION creemos que cada proceso de mejora comienza con personas comprometidas con el aprendizaje, la responsabilidad y el servicio.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_ROLES.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-3xl p-7 shadow-sm border border-teal-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-teal-50 text-[#0F4C5C] flex items-center justify-center mb-5">
                      <UserCheck className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1B9AAA]">
                      {member.role}
                    </span>
                    <h3 className="text-xl font-bold text-[#0F4C5C] mt-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mb-4">
                      {member.area}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="text-sm font-bold text-[#0F4C5C] hover:text-[#1B9AAA] inline-flex items-center gap-1"
                    >
                      Conocer su trayectoria <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {selectedMember && (
              <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold uppercase text-[#1B9AAA]">{selectedMember.role}</span>
                      <h3 className="text-2xl font-bold text-[#0F4C5C]">{selectedMember.name}</h3>
                    </div>
                    <button onClick={() => setSelectedMember(null)} className="p-1 text-slate-400 hover:text-slate-700">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <p className="text-sm font-semibold text-slate-500">{selectedMember.area}</p>
                  <p className="text-slate-700 text-sm leading-relaxed">{selectedMember.bio}</p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="w-full bg-[#0F4C5C] text-white font-semibold py-3 rounded-xl"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= PÁGINA CONTACTO Y CIERRE ENTONCES... ================= */}
        {activePage === 'contacto' && (
          <div className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1B9AAA]">
                Cierre Institucional y Contacto
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C5C]">
                Entonces... ¿qué podemos hacer juntos?
              </h1>
              <p className="text-slate-600">
                Retomamos tus inquietudes iniciales para brindarte una ruta clara y práctica hacia el bienestar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Tarjeta 1: Personas */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-teal-100 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="inline-block text-xs font-bold bg-teal-50 text-[#1B9AAA] px-3 py-1 rounded-full">
                    Personas y Familias
                  </span>
                  <h2 className="text-2xl font-bold text-[#0F4C5C]">
                    ¿Recuerdas estas preguntas?
                  </h2>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• ¿Alguien que amas podría estar sufriendo en silencio?</li>
                    <li>• ¿Te gustaría reconocer señales de alerta y saber cómo acompañarlo?</li>
                    <li>• ¿Quieres aprender herramientas para fortalecer tus relaciones y tu bienestar?</li>
                  </ul>
                  <div className="bg-[#FAFDFC] p-5 rounded-2xl border border-teal-100 space-y-2">
                    <p className="font-bold text-[#0F4C5C] text-sm">
                      La respuesta comienza con el conocimiento, el acompañamiento y la acción oportuna.
                    </p>
                    <p className="text-sm text-slate-600">
                      En NOVA EMOTION te ofrecemos entrenamiento y herramientas prácticas para comprender mejor las necesidades emocionales, obtener <strong className="font-bold text-[#0F4C5C]">RESULTADOS</strong> reales y reconocer cuándo buscar ayuda profesional.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => openCommercial('personas')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1B9AAA] hover:bg-[#0F4C5C] text-white font-semibold py-4 px-6 rounded-2xl transition-colors"
                >
                  Quiero conocer más
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Tarjeta 2: Organizaciones */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-teal-100 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="inline-block text-xs font-bold bg-amber-50 text-[#E09F3E] px-3 py-1 rounded-full">
                    Organizaciones
                  </span>
                  <h2 className="text-2xl font-bold text-[#0F4C5C]">
                    ¿Tu equipo necesita avanzar?
                  </h2>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• ¿Quieres fortalecer la motivación y la colaboración?</li>
                    <li>• ¿Buscas mejorar la comunicación y el desempeño de tu equipo?</li>
                    <li>• ¿Deseas implementar programas de entrenamiento adaptados a tu organización?</li>
                  </ul>
                  <div className="bg-[#FAFDFC] p-5 rounded-2xl border border-teal-100 space-y-2">
                    <p className="font-bold text-[#0F4C5C] text-sm">
                      La mejora comienza cuando identificamos las necesidades y trabajamos con objetivos claros.
                    </p>
                    <p className="text-sm text-slate-600">
                      Diseñamos experiencias de entrenamiento para fortalecer la salud psicoemocional de las personas y organizaciones con <strong className="font-bold text-[#0F4C5C]">RESULTADOS</strong> medibles.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => openCommercial('organizaciones')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0F4C5C] hover:bg-[#1B9AAA] text-white font-semibold py-4 px-6 rounded-2xl transition-colors"
                >
                  Quiero información para mi organización
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= PÁGINA COMERCIAL PROVISIONAL ================= */}
        {activePage === 'comercial' && (
          <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigateTo('contacto')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0F4C5C] hover:text-[#1B9AAA] bg-white px-4 py-2.5 rounded-xl shadow-sm border border-teal-100 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Contacto
            </button>

            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-teal-100 space-y-8">
              <div className="space-y-3 border-b border-slate-100 pb-6">
                <span className="inline-block text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#1B9AAA] px-3 py-1 rounded-full">
                  {commercialInterest === 'personas'
                    ? 'Propuesta para Personas y Familias'
                    : 'Propuesta Corporativa para Organizaciones'}
                </span>
                <h1 className="text-3xl font-extrabold text-[#0F4C5C]">
                  Estamos preparando una experiencia personalizada para ti
                </h1>
                <p className="text-slate-600">
                  {commercialInterest === 'personas'
                    ? 'Esta sección comercial está lista para incorporar los detalles de nuestros cursos de identificación de señales de alerta y entrenamiento familiar.'
                    : 'Esta sección comercial está lista para incorporar los detalles de nuestros talleres corporativos, modalidades y planes de entrenamiento para equipos.'}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-2xl bg-[#FAFDFC] border border-dashed border-teal-300">
                  <strong className="text-[#0F4C5C] block mb-1">Detalles del Programa</strong>
                  <span className="text-slate-500">Espacio reservado para módulos y contenidos oficiales.</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAFDFC] border border-dashed border-teal-300">
                  <strong className="text-[#0F4C5C] block mb-1">Modalidad y Beneficios</strong>
                  <span className="text-slate-500">Espacio reservado para modalidad virtual/presencial e inversión.</span>
                </div>
              </div>

              {formSent ? (
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#52B788] mx-auto" />
                  <h3 className="font-bold text-[#0F4C5C] text-lg">¡Solicitud registrada!</h3>
                  <p className="text-sm text-slate-600">
                    Hemos recibido tu interés en la línea de{' '}
                    <strong>{commercialInterest === 'personas' ? 'Personas y Familias' : 'Organizaciones'}</strong>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSent(true);
                  }}
                  className="space-y-4"
                >
                  <h3 className="font-bold text-[#0F4C5C]">Déjanos tus datos para recibir información</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Nombre completo"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1B9AAA] text-sm"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Correo electrónico"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1B9AAA] text-sm"
                    />
                  </div>
                  <textarea
                    rows="3"
                    placeholder="Cuéntanos brevemente qué te gustaría fortalecer..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1B9AAA] text-sm"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#0F4C5C] hover:bg-[#1B9AAA] text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Solicitar información personalizada
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      {/* FOOTER GLOBAL */}
      <footer className="bg-white border-t border-teal-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center">
          <div>
            <span className="text-lg font-bold text-[#0F4C5C]">NOVA EMOTION</span>
            <p className="text-xs text-slate-500 mt-1">
              Centro de Entrenamiento para el Bienestar Emocional y Organizacional. Comprometidos con la salud psicoemocional de las personas y organizaciones en Latinoamérica.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-start md:justify-center text-sm font-medium text-slate-600">
            <button onClick={() => navigateTo('inicio')} className="hover:text-[#1B9AAA]">Inicio</button>
            <button onClick={() => navigateTo('nosotros')} className="hover:text-[#1B9AAA]">Nosotros</button>
            <button onClick={() => navigateTo('servicios')} className="hover:text-[#1B9AAA]">Servicios</button>
            <button onClick={() => navigateTo('equipo')} className="hover:text-[#1B9AAA]">Equipo</button>
            <button onClick={() => navigateTo('contacto')} className="hover:text-[#1B9AAA]">Contacto</button>
          </div>
          <div className="text-xs text-slate-400 md:text-right">
            © {new Date().getFullYear()} NOVA EMOTION. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
