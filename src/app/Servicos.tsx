import { Icon } from "@iconify-icon/react";
import { Element } from "react-scroll";
import "swiper/css";
import "swiper/css/pagination";

export default function GEDServicos() {
  const services = [
    {
      id: 1,
      title: "Armazenamento Seguro em Nuvem",
      icon: "mdi:cloud-lock",
      description: "Armazene seus documentos de forma segura e estruturada na nuvem.",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Acesso Seguro",
      icon: "mdi:shield-lock",
      description: "Controle total sobre quem acessa seus documentos, garantindo segurança.",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Organização de Documentos",
      icon: "mdi:file-document-box",
      description: "Organize documentos físicos e digitais por departamento, tipo e tags.",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Arquitetura Personalizada",
      icon: "mdi:cube-outline",
      description: "Estruture o armazenamento de acordo com as necessidades da sua empresa.",
      color: "bg-purple-500",
    },
    {
      id: 5,
      title: "Acesso Personalizado",
      icon: "mdi:account-lock",
      description: "Defina permissões individuais ou em grupo para melhor controle de acesso.",
      color: "bg-red-500",
    },
    {
      id: 6,
      title: "Facilidade de Localização",
      icon: "mdi:magnify",
      description: "Pesquise documentos com facilidade por filtros avançados e indexação.",
      color: "bg-indigo-500",
    },
    {
      id: 7,
      title: "Versionamento de Documentos",
      icon: "mdi:file-compare",
      description: "Acompanhe mudanças e versões de documentos com rastreamento completo.",
      color: "bg-teal-500",
    },
    {
      id: 8,
      title: "Controle de Armazenamento Físico",
      icon: "mdi:archive",
      description: "Gerencie documentos físicos e digitais de forma integrada.",
      color: "bg-orange-500",
    },
    {
      id: 9,
      title: "Indexação Inteligente",
      icon: "mdi:database-search",
      description: "Documentos organizados com indexação para fácil recuperação.",
      color: "bg-pink-500",
    },
    {
      id: 10,
      title: "Controle de Riscos",
      icon: "mdi:alert",
      description: "Minimize riscos com auditorias e monitoramento de acessos.",
      color: "bg-gray-500",
    },
    {
      id: 11,
      title: "Controle de Expurgo",
      icon: "mdi:delete",
      description: "Automatize regras para descarte seguro de documentos obsoletos.",
      color: "bg-lime-500",
    },
    {
      id: 12,
      title: "Suporte Técnico",
      icon: "mdi:headset",
      description: "Equipe especializada para suporte e manutenção da plataforma.",
      color: "bg-cyan-500",
    },
    {
      id: 13,
      title: "Plataforma Multicanal",
      icon: "mdi:devices",
      description: "Disponível para Web, Mobile e Desktop para maior flexibilidade.",
      color: "bg-amber-500",
    },
    {
      id: 14,
      title: "Gestão de CEDOC",
      icon: "mdi:folder-multiple",
      description: "Centralize a gestão documental e otimize o controle de arquivos.",
      color: "bg-fuchsia-500",
    },
    {
      id: 15,
      title: "Relatórios Personalizados",
      icon: "mdi:chart-bar",
      description: "Gere relatórios detalhados para análise e tomada de decisões.",
      color: "bg-blue-700",
    },
    {
      id: 16,
      title: "Permissões por Usuário ou Grupo",
      icon: "mdi:account-group",
      description: "Gerencie acessos individualmente ou por grupos de clientes.",
      color: "bg-green-700",
    },
    {
      id: 17,
      title: "Dashboard Personalizável",
      icon: "mdi:view-dashboard",
      description: "Visualize informações essenciais com widgets e gráficos customizáveis.",
      color: "bg-purple-700",
    },
    {
      id: 18,
      title: "Pesquisa Avançada",
      icon: "mdi:filter-search",
      description: "Encontre documentos rapidamente com filtros e buscas inteligentes.",
      color: "bg-red-700",
    },
    {
      id: 19,
      title: "Extração de Dados",
      icon: "mdi:database-export",
      description: "Extraia dados essenciais de documentos de forma automatizada e precisa.",
      color: "bg-blue-600",
    },
  ];

  return (
    <Element name="servicos" className="min-h-screen flex flex-col items-center justify-center px-6 pb-12 pt-25">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">Serviços do Nosso GED</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md border-[1px] border-gray-100 rounded-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className={`w-14 h-14 flex items-center justify-center rounded-full ${service.color} text-white`}>
              <Icon icon={service.icon} height={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{service.title}</h3>
            <p className="text-gray-700 mt-2 text-base leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </Element>
  );
}
