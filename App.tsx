import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ChevronDown, 
  Clock, 
  ShieldCheck, 
  Users, 
  Star, 
  ArrowRight, 
  Target, 
  BookOpen, 
  Heart, 
  MessageCircle,
  Palette,
  Layout,
  Calendar,
  Layers
} from 'lucide-react';

// Reusable Button Component
const Button: React.FC<{ 
  children: React.ReactNode, 
  onClick?: () => void, 
  className?: string, 
  variant?: 'primary' | 'secondary' 
}> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-[#B48F4A]",
    secondary: "bg-white text-dark hover:bg-gray-100"
  };
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// Section Header Component
const SectionTitle: React.FC<{ 
  title: React.ReactNode, 
  subtitle?: string, 
  centered?: boolean, 
  right?: boolean,
  light?: boolean,
  hideDefaultBar?: boolean
}> = ({ title, subtitle, centered = true, right = false, light = false, hideDefaultBar = false }) => (
  <div className={`mb-8 ${centered ? 'text-center' : right ? 'text-right' : 'text-left'}`}>
    <h2 className={`text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter ${light ? 'text-white' : 'text-dark'}`}>
      {title}
    </h2>
    {subtitle && !hideDefaultBar && (
      <div className={`w-32 md:w-48 h-1.5 bg-primary mb-4 ${centered ? 'mx-auto' : right ? 'ml-auto' : 'mr-auto'}`}></div>
    )}
    {subtitle && (
      <p className={`text-base md:text-lg font-medium max-w-2xl ${centered ? 'mx-auto' : right ? 'ml-auto' : 'mr-auto'} ${light ? 'text-gray-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes timer

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToOffer = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    window.location.href = 'https://pay.celetus.com/4MKM9L02';
  };

  return (
    <div className="flex flex-col w-full">
      {/* Timer Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-bold flex items-center justify-center gap-2 sticky top-0 z-50">
        <Clock size={16} />
        OFERTA POR TEMPO LIMITADO: ESSA PÁGINA EXPIRA EM {formatTime(timeLeft)}
      </div>

      {/* Hero Section (Dark Contrast) */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark text-white px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img 
            src="https://images.unsplash.com/photo-1510154221590-ff63e90a136f?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Fundo" 
          />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Para Pais que Buscam o Melhor
          </span>
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8">
            Você faz de tudo para garantir um bom futuro para o seu filho… <br/>
            <span className="text-primary">mas já parou para pensar no destino eterno dele?</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Não adianta oferecer o mundo, se você não os apresentar a quem criou o mundo. Descubra como direcionar o coração dos seus filhos para a eternidade.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToOffer} className="w-full md:w-auto text-lg py-5 px-10">
              SIM, QUERO GARANTIR O LEGADO <ArrowRight size={20} />
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-4 md:mt-0">
              <ShieldCheck size={18} className="text-green-500" />
              Compra 100% segura e acesso imediato
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section (Light Contrast) */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title={
              <span>
                O Perigo da <span className="relative inline-block whitespace-nowrap">
                  "Boa Educação"
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary rounded-full"></span>
                </span>
              </span>
            } 
            subtitle="Muitos pais estão tão focados em faculdades e carreiras que se esquecem do que realmente importa."
            hideDefaultBar={true}
          />
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="p-8 border-b-4 border-red-500 bg-slate-50 rounded-xl hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">O Foco Errado</h3>
              <p className="text-slate-600 leading-relaxed">
                Você gasta milhares com inglês e esportes, mas quanto tempo dedica para a saúde espiritual deles? O sucesso terreno é passageiro.
              </p>
            </div>

            <div className="p-8 border-b-4 border-red-500 bg-slate-50 rounded-xl hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">A Influência do Mundo</h3>
              <p className="text-slate-600 leading-relaxed">
                Se você não educar seus filhos na verdade, a internet e as escolas o farão com base nos valores deles, não nos seus.
              </p>
            </div>

            <div className="p-8 border-b-4 border-red-500 bg-slate-50 rounded-xl hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">O Silêncio em Casa</h3>
              <p className="text-slate-600 leading-relaxed">
                A falta de ferramentas práticas faz com que os pais se calem diante das dúvidas dos filhos, perdendo a oportunidade de guiar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution (Soft Colored Background) */}
      <section className="bg-slate-100 py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16">
          {/* Left Block: The Method */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <SectionTitle 
              title="O Método Legado Eterno" 
              subtitle="Uma jornada prática para transformar sua casa em um ambiente de discipulado real."
              centered={true}
              right={false}
            />
            <ul className="space-y-4 text-left w-full">
              {[
                "Como criar rotinas de devocional que os filhos amam.",
                "Respostas bíblicas para as 20 maiores dúvidas das crianças.",
                "Estratégias para combater a influência negativa das telas.",
                "O papel do pai e da mãe na formação do caráter cristão."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full shrink-0">
                    <CheckCircle className="text-primary" size={20} />
                  </div>
                  <span className="text-lg font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 w-full flex justify-center md:justify-start">
              <Button onClick={scrollToOffer} className="w-full md:w-auto">
                QUERO CONHECER O MÉTODO <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          {/* Right Block: What you will receive */}
          <div className="md:w-1/2 bg-white p-8 md:p-10 rounded-[32px] shadow-xl border border-slate-200">
            <SectionTitle 
              title="O que você receberá neste método" 
              subtitle="Tudo o que você precisa para cuidar da espiritualidade do seu filho hoje."
              centered={true}
            />
            <div className="space-y-3">
              {[
                { title: "Livro digital - Colorindo com Jesus", format: "PDF", icon: <Palette size={22} className="text-primary" /> },
                { title: "Livro digital - Aventuras Bíblicas", format: "PDF", icon: <BookOpen size={22} className="text-primary" /> },
                { title: "Livro digital - Aprendendo com Alegria", format: "PDF", icon: <Heart size={22} className="text-primary" /> },
                { title: "Livro digital - Passatempos Bíblicos", format: "PDF", icon: <Layers size={22} className="text-primary" /> },
                { title: "Calendário cristão infantil", detail: "com uma missão por dia", format: "PDF", icon: <Calendar size={22} className="text-primary" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/50 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 leading-tight">
                      {item.title} 
                      {item.detail && <span className="block text-xs font-medium text-slate-500 mt-0.5">{item.detail}</span>}
                    </h4>
                  </div>
                  <span className="bg-slate-200 text-slate-500 text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
                    {item.format}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-3 text-slate-400">
               <ShieldCheck size={20} className="text-green-500" />
               <span className="text-xs font-bold uppercase tracking-widest">Acesso imediato após a compra</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (White) */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Quem já está mudando a história da família" 
            subtitle="Veja o depoimento de pais que decidiram priorizar o que é eterno."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Mariana Silva", 
                role: "Mãe de 2", 
                text: "Eu achava que dar conforto era tudo, mas percebi que faltava a base. O Legado Eterno abriu meus olhos para o que realmente importa.",
                img: "https://picsum.photos/id/64/100/100"
              },
              { 
                name: "Ricardo Mendes", 
                role: "Pai de 3", 
                text: "Ferramentas práticas que eu não encontrava em lugar nenhum. Meu relacionamento com meus filhos mudou completamente através da palavra.",
                img: "https://picsum.photos/id/91/100/100"
              },
              { 
                name: "Cláudia Rocha", 
                role: "Mãe e Educadora", 
                text: "Essencial para os tempos de hoje. O guia sobre telas e internet é simplesmente libertador para nós pais.",
                img: "https://picsum.photos/id/65/100/100"
              }
            ].map((test, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <img src={test.img} className="w-20 h-20 rounded-full mb-6 border-4 border-white shadow-md" alt={test.name} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#C5A059" color="#C5A059" />)}
                </div>
                <p className="italic text-slate-600 mb-6 font-medium">"{test.text}"</p>
                <h4 className="font-bold text-dark">{test.name}</h4>
                <span className="text-sm text-slate-400 font-bold uppercase tracking-widest">{test.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (Dark Contrast) */}
      <section id="pricing" className="bg-dark py-24 px-4 text-white relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionTitle 
            title="Sua Decisão Hoje Muda o Futuro Deles" 
            subtitle="Um investimento único por um legado que dura para sempre."
            light
          />
          
          <div className="bg-white text-dark p-8 md:p-16 rounded-[40px] shadow-3xl relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-8 py-2 rounded-full font-black text-sm uppercase tracking-widest">
              OFERTA EXCLUSIVA
            </div>
            
            <div className="mb-8">
              <span className="text-slate-400 line-through text-2xl font-bold">R$ 97,00</span>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-6xl md:text-8xl font-black text-dark tracking-tighter">R$ 12,00</span>
              </div>
              <p className="text-lg font-bold text-primary mt-4">Acesso Vitalício Imediato</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10 text-left max-w-lg mx-auto">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle size={18} className="text-green-500" /> Acesso Vitalício
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle size={18} className="text-green-500" /> Guia de Devocionais
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle size={18} className="text-green-500" /> Bônus: Filhos e Telas
              </div>
            </div>

            <Button 
              onClick={handleCheckout}
              className="w-full text-2xl py-8 mb-6 uppercase tracking-wider"
            >
              GARANTIR MINHA VAGA AGORA
            </Button>
            
            <p className="text-sm text-slate-400 font-medium">
              Garantia incondicional de 7 dias. Não gostou? Devolvemos 100% do seu dinheiro.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-70">
            <div className="flex flex-col items-center">
              <ShieldCheck size={32} className="text-primary mb-2" />
              <span className="text-xs font-bold uppercase tracking-widest">Segurança</span>
            </div>
            <div className="flex flex-col items-center">
              <Star size={32} className="text-primary mb-2" />
              <span className="text-xs font-bold uppercase tracking-widest">Qualidade</span>
            </div>
            <div className="flex flex-col items-center">
              <Users size={32} className="text-primary mb-2" />
              <span className="text-xs font-bold uppercase tracking-widest">Comunidade</span>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen size={32} className="text-primary mb-2" />
              <span className="text-xs font-bold uppercase tracking-widest">Vitalício</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Light) */}
      <section className="bg-slate-50 py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionTitle 
            title="Dúvidas Frequentes" 
            subtitle="Tire suas dúvidas e sinta-se seguro para começar."
          />
          <div className="space-y-4">
            {[
              { q: "Como vou receber o acesso?", a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com todos os dados de acesso à nossa plataforma exclusiva." },
              { q: "Serve para crianças de qual idade?", a: "O método é adaptável para crianças desde os 3 anos até os 8 anos, com linguagens e atividades específicas para cada fase." },
              { q: "Preciso ter conhecimento bíblico profundo?", a: "Não! O material foi feito justamente para guiar pais que querem ensinar, mas muitas vezes não sabem por onde começar." },
              { q: "Posso parcelar no boleto?", a: "O parcelamento está disponível via cartão de crédito. No boleto e PIX, apenas pagamento à vista." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary transition-colors group cursor-pointer shadow-sm">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-lg text-dark group-hover:text-primary transition-colors">{faq.q}</h4>
                  <ChevronDown className="text-slate-400 group-hover:text-primary transition-transform group-hover:rotate-180" />
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Footer (Dark) */}
      <footer className="bg-dark py-12 px-4 border-t border-slate-800 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-primary font-black text-2xl mb-8 tracking-tighter uppercase italic">Legado Eterno</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest">
            <div>© 2024 Legado Eterno - Todos os Direitos Reservados</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
          <p className="mt-12 text-slate-700 text-[10px] max-w-4xl mx-auto leading-relaxed uppercase">
            ESTE SITE NÃO É DO FACEBOOK: Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca registrada da FACEBOOK, Inc.
          </p>
        </div>
      </footer>

      {/* Floating Sticky CTA Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 z-50">
        <Button onClick={scrollToOffer} className="w-full py-4 text-lg">
          QUERO GARANTIR O FUTURO <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default App;