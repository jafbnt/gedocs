import { Element } from "react-scroll";

export default function Compromisso() {
  const sections = [
    {
      title: "Compromisso com a Inovação",
      description:
        "Nosso foco é oferecer soluções modernas e eficientes que transformam a gestão de documentos, trazendo segurança, automação e acessibilidade para empresas e licenciados.",
      borderColor: "border-blue-600",
    },
    {
      title: "Suporte aos Nossos Licenciados",
      description:
        "Apoiamos nossos parceiros com treinamentos, materiais de vendas e suporte especializado. Queremos que nossos licenciados tenham sucesso e cresçam junto conosco.",
      borderColor: "border-green-500",
    },
    {
      title: "Crescimento Sustentável",
      description:
        "Acreditamos no desenvolvimento sustentável e na digitalização para reduzir o uso de papel e otimizar processos. Cada licenciado se torna parte dessa mudança inovadora.",
      borderColor: "border-yellow-500",
    },
    {
      title: "Parceria de Longo Prazo",
      description:
        "Valorizamos relações sólidas e transparentes. Trabalhamos lado a lado com nossos licenciados, garantindo que tenham as melhores ferramentas para prosperar no mercado.",
      borderColor: "border-red-500",
    },
  ];

  return (
    <Element name="compromisso" className="h-screen flex flex-col items-center justify-center px-6 py-12 ">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Nosso Compromisso</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-8 text-center border-t-4 ${section.borderColor} transform transition-transform duration-300 hover:scale-105`}
          >
            <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">{section.description}</p>
          </div>
        ))}
      </div>
    </Element>
  );
}
