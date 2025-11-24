import { Users, Luggage, Fuel, Gauge } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const cars = [
  {
    id: 1,
    name: "BMW Série 5",
    category: "Luxo",
    image: "https://images.unsplash.com/photo-1559930449-9211652bac34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBmcm9udHxlbnwxfHx8fDE3NjI5NjM2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: 299,
    passengers: 5,
    luggage: 3,
    transmission: "Automático",
    fuel: "Gasolina",
    featured: true,
  },
  {
    id: 2,
    name: "SUV Premium",
    category: "SUV",
    image: "https://images.unsplash.com/photo-1758217209786-95458c5d30a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdXYlMjB2ZWhpY2xlfGVufDF8fHx8MTc2Mjg5NTEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: 259,
    passengers: 7,
    luggage: 4,
    transmission: "Automático",
    fuel: "Diesel",
    featured: false,
  },
  {
    id: 3,
    name: "Esportivo Vermelho",
    category: "Esportivo",
    image: "https://images.unsplash.com/photo-1696581081913-3529170053d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjByZWR8ZW58MXx8fHwxNzYyOTQ0NTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: 399,
    passengers: 2,
    luggage: 1,
    transmission: "Manual",
    fuel: "Gasolina",
    featured: true,
  },
  {
    id: 4,
    name: "Compacto Urbano",
    category: "Econômico",
    image: "https://images.unsplash.com/photo-1701314860844-cd2152fa9071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYWN0JTIwY2l0eSUyMGNhcnxlbnwxfHx8fDE3NjI4NTkxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: 89,
    passengers: 5,
    luggage: 2,
    transmission: "Manual",
    fuel: "Flex",
    featured: false,
  },
  {
    id: 5,
    name: "Elétrico Moderno",
    category: "Elétrico",
    image: "https://images.unsplash.com/photo-1714557632393-64ed972394ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhciUyMG1vZGVybnxlbnwxfHx8fDE3NjI5MjA2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: 199,
    passengers: 5,
    luggage: 2,
    transmission: "Automático",
    fuel: "Elétrico",
    featured: true,
  },
  {
    id: 6,
    name: "Sedan Executivo",
    category: "Executivo",
    image: "https://images.unsplash.com/photo-1646644431825-e5171c8cba53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhbiUyMGNhciUyMGVsZWdhbnR8ZW58MXx8fHwxNzYyOTMyMjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: 179,
    passengers: 5,
    luggage: 3,
    transmission: "Automático",
    fuel: "Gasolina",
    featured: false,
  },
];

export function FeaturedCars() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
          <span className="text-blue-600">Frota Premium</span>
        </div>
        <h2 className="text-3xl md:text-4xl text-slate-900 mb-3">
          Carros em Destaque
        </h2>
        <p className="text-slate-600 max-w-2xl">
          Explore nossa seleção de veículos premium com as melhores condições e preços imbatíveis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Card key={car.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2" style={{ borderRadius: '12px' }}>
            <div className="relative h-56 overflow-hidden bg-slate-100">
              {car.featured && (
                <Badge className="absolute top-4 left-4 z-10 bg-[#007BFF] hover:bg-[#007BFF]">
                  ⭐ Destaque
                </Badge>
              )}
              <ImageWithFallback
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {car.category}
                  </Badge>
                  <h3 className="text-xl text-slate-900">{car.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl text-slate-900">R$ {car.price}</div>
                  <div className="text-sm text-slate-600">/dia</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{car.passengers} passageiros</span>
                </div>
                <div className="flex items-center gap-2">
                  <Luggage className="w-4 h-4" />
                  <span>{car.luggage} malas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="w-4 h-4" />
                  <span>{car.fuel}</span>
                </div>
              </div>

              <Button className="w-full bg-[#007BFF] hover:bg-[#0066FF] text-white">
                Reservar Agora
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Ver Todos os Carros
        </Button>
      </div>
    </section>
  );
}