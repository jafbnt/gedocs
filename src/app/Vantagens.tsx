import { Icon } from "@iconify-icon/react";
import { Element, Link } from "react-scroll";
import "swiper/css";
import "swiper/css/pagination";

export default function Vantagens() {
  const benefits = [
    {
      id: 1,
      title: "Mercado em Expansão",
      icon: "mdi:chart-line",
      description:
        "A necessidade de digitalização e automação cresce diariamente. Sendo um licenciado, você terá um produto altamente demandado, pronto para impactar diversas empresas.",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Modelo de Negócio Escalável",
      icon: "mdi:trending-up",
      description:
        "Nosso sistema permite um crescimento sustentável, seja para pequenas ou grandes empresas. Como licenciado, você pode expandir suas vendas conforme sua estratégia.",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Alta Rentabilidade",
      icon: "mdi:cash-multiple",
      description:
        "Com um modelo baseado em licenciamento e suporte, seu retorno sobre investimento será rápido. Isso proporciona uma fonte de renda recorrente confiável.",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Suporte e Treinamento Exclusivos",
      icon: "mdi:help-circle",
      description:
        "Nossa equipe oferece suporte técnico e treinamentos constantes para que você tenha total autonomia na implementação e venda do sistema.",
      color: "bg-red-500",
    },
    {
      id: 5,
      title: "Produto Já Testado e Aprovado",
      icon: "mdi:check-decagram",
      description:
        "Nosso software já é utilizado por diversas empresas e possui um ambiente estável e seguro, pronto para ser comercializado pelos licenciados.",
      color: "bg-purple-500",
    },
    {
      id: 6,
      title: "Atuação em Diversos Segmentos",
      icon: "mdi:domain",
      description:
        "Nosso software é versátil e pode ser adaptado para atender as necessidades de diferentes setores, como saúde, educação, finanças, jurídico, e muitos outros. Isso permite que você amplie seu alcance e explore múltiplos mercados.",
      color: "bg-orange-500",
    },
  ];

  return (
    <Element name="vantagens" className="min-h-screen flex flex-col items-center justify-center px-6 pb-12 pt-25">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">Vantagens para Licenciados</h2>
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Veja por que vale a pena se tornar um licenciado do nosso sistema GED
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white shadow-2xl rounded-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className={`w-14 h-14 flex items-center justify-center rounded-full ${benefit.color} text-white`}>
              <Icon icon={benefit.icon} height={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{benefit.title}</h3>
            <p className="text-gray-700 mt-2 text-base leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Chamada para ação (CTA) */}
      <div className="mt-10">
        <Link
          to="contato"
          smooth={true}
          duration={500}
          className="bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
        >
          Quero ser um Licenciado
        </Link>
      </div>
    </Element>
  );
}
