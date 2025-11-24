import { Shield, HeadphonesIcon, CreditCard, MapPin, Award, Clock, Gift } from "lucide-react";
import { Card } from "./ui/card";

const benefits = [
  {
    id: 1,
    icon: Shield,
    title: "Seguro Completo",
    description: "Todos os veículos com cobertura total e assistência 24h",
  },
  {
    id: 2,
    icon: HeadphonesIcon,
    title: "Suporte 24/7",
    description: "Atendimento especializado a qualquer hora e lugar",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Sem Taxas Ocultas",
    description: "Preço final transparente, sem surpresas na devolução",
  },
  {
    id: 4,
    icon: MapPin,
    title: "50+ Localizações",
    description: "Retire e devolva em diversas cidades e aeroportos",
  },
  {
    id: 5,
    icon: Award,
    title: "Frota Premium",
    description: "Veículos novos e sempre em perfeito estado",
  },
  {
    id: 6,
    icon: Clock,
    title: "Reserva Instantânea",
    description: "Confirmação imediata e processo 100% digital",
  },
];

export function Benefits() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
          <span className="text-blue-600">Vantagens</span>
          <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
        </div>
        <h2 className="text-3xl md:text-4xl text-slate-900 mb-3">
          Por Que Escolher a RentCar?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Oferecemos a melhor experiência em locação de veículos com serviços premium e atendimento diferenciado.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <Card key={benefit.id} className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-blue-600">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </Card>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-[#007BFF] to-[#0066FF] rounded-2xl p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl text-white mb-4">
          Pronto para começar sua jornada?
        </h3>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Cadastre-se agora e ganhe 10% de desconto na sua primeira reserva
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-[#007BFF] rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
            <Gift className="w-5 h-5" />
            Criar Conta Grátis
          </button>
          <button className="px-8 py-3 bg-[#0066FF] text-white rounded-lg hover:bg-blue-600 transition-colors border-2 border-white/20">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
}