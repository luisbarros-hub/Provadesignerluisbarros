import { Car, Truck, Zap, Shield, Briefcase, Users } from "lucide-react";
import { Card } from "./ui/card";

const categories = [
  {
    id: 1,
    name: "Econômico",
    icon: Car,
    count: 245,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    name: "SUV",
    icon: Truck,
    count: 189,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    name: "Elétrico",
    icon: Zap,
    count: 78,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    name: "Luxo",
    icon: Shield,
    count: 156,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 5,
    name: "Executivo",
    icon: Briefcase,
    count: 123,
    color: "bg-slate-100 text-slate-600",
  },
  {
    id: 6,
    name: "Familiar",
    icon: Users,
    count: 201,
    color: "bg-rose-100 text-rose-600",
  },
];

export function Categories() {
  return (
    <section className="container mx-auto px-4 py-16 bg-slate-50">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
          <span className="text-blue-600">Categorias</span>
          <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
        </div>
        <h2 className="text-3xl md:text-4xl text-slate-900 mb-3">
          Explore por Categoria
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Encontre o veículo ideal para cada ocasião e necessidade.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card 
              key={category.id} 
              className="p-6 hover:shadow-lg transition-all cursor-pointer group hover:-translate-y-1"
              style={{ borderRadius: '12px' }}
            >
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-slate-900 mb-1">{category.name}</h3>
              <p className="text-sm text-slate-600">{category.count} carros</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}