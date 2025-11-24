import { Menu, User, ArrowRight, MapPin, Calendar, Clock, Search } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { useState } from "react";

export function Hero() {
  const [differentLocation, setDifferentLocation] = useState(false);

  return (
    <div className="relative min-h-[800px] md:min-h-[850px] bg-slate-900 overflow-hidden">
      {/* Background Image with Gradient */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1610809589386-9ea41901eb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzdW5zZXQlMjByb2FkfGVufDF8fHx8MTc2Mjk2NTgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury car on scenic road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 backdrop-blur-md bg-slate-900/30 shadow-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#007BFF] rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-white text-xl">RentCar</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Carros</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Reservas</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:bg-white/10">
              <User className="w-5 h-5" />
            </Button>
            <Button className="hidden md:flex bg-[#007BFF] hover:bg-[#0066FF] text-white px-6">
              Entrar
            </Button>
            <Button className="bg-[#007BFF] hover:bg-[#0066FF] text-white px-6 md:px-8">
              Cadastre-se
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-12 md:pt-20">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
            ✨ Ofertas especiais para novos clientes
          </div>
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            Alugue o carro perfeito para sua viagem
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10">
            Mais de 1.000 veículos disponíveis. Preços competitivos, sem taxas ocultas. 
            Atendimento 24/7.
          </p>

          {/* Integrated Search Form */}
          <Card className="p-6 md:p-8 shadow-2xl bg-white/95 backdrop-blur-sm border-0" style={{ borderRadius: '16px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="lg:col-span-1">
                <label className="block text-sm text-slate-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#007BFF]" />
                  Local de Retirada
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input 
                    placeholder="Cidade ou aeroporto" 
                    className="pl-10 h-12 border-slate-300"
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <label className="block text-sm text-slate-700 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#007BFF]" />
                  Data de Retirada
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input 
                    type="date" 
                    className="pl-10 h-12 border-slate-300"
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <label className="block text-sm text-slate-700 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#007BFF]" />
                  Data de Devolução
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input 
                    type="date" 
                    className="pl-10 h-12 border-slate-300"
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <label className="block text-sm text-slate-700 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#007BFF]" />
                  Horário
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input 
                    type="time" 
                    className="pl-10 h-12 border-slate-300"
                    defaultValue="10:00"
                  />
                </div>
              </div>
            </div>

            {/* Different Location Checkbox */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="different-location" 
                  className="w-4 h-4 rounded border-slate-300 text-[#007BFF] focus:ring-[#007BFF]"
                  checked={differentLocation}
                  onChange={(e) => setDifferentLocation(e.target.checked)}
                />
                <label htmlFor="different-location" className="text-sm text-slate-700 cursor-pointer">
                  Devolver em local diferente
                </label>
              </div>
            </div>

            {/* Different Return Location Field */}
            {differentLocation && (
              <div className="mb-6">
                <label className="block text-sm text-slate-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#007BFF]" />
                  Local de Devolução
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input 
                    placeholder="Cidade ou aeroporto" 
                    className="pl-10 h-12 border-slate-300"
                  />
                </div>
              </div>
            )}

            {/* Search Button */}
            <Button className="w-full bg-[#007BFF] hover:bg-[#0066FF] text-white h-14 text-lg shadow-lg">
              <Search className="mr-2 w-5 h-5" />
              Buscar Carros Disponíveis
            </Button>
          </Card>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button size="lg" variant="ghost" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              Como Funciona
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6">
              <div className="text-2xl md:text-3xl text-white mb-1">1000+</div>
              <div className="text-white/70 text-sm">Veículos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6">
              <div className="text-2xl md:text-3xl text-white mb-1">50+</div>
              <div className="text-white/70 text-sm">Localizações</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6">
              <div className="text-2xl md:text-3xl text-white mb-1">98%</div>
              <div className="text-white/70 text-sm">Satisfação</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6">
              <div className="text-2xl md:text-3xl text-white mb-1">24/7</div>
              <div className="text-white/70 text-sm">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}