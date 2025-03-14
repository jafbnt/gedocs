import Image from "next/image";
import { Element, Link } from "react-scroll";
import "swiper/css";
import "swiper/css/pagination";
import system from "../../public/system.gif";

export default function Sobre() {
  return (
    <Element name="sobre" className="h-screen flex items-center justify-center  bg-white">
      <div className="max-w-screen mx-20 w-full bg-white shadow-md border-[1px] border-gray-100 rounded-2xl p-10 flex flex-col md:flex-row items-center transition-all duration-300">
        {/* Texto sobre o Licenciamento */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Torne-se um <span className="text-blue-600">Licenciado GED</span> e Expanda Seus Negócios
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Estamos buscando parceiros para licenciar e distribuir nosso Sistema de Gestão Eletrônica de Documentos
            (GED). Se você quer oferecer uma solução completa e inovadora para seus clientes, essa é a oportunidade
            ideal!
          </p>

          <h3 className="text-2xl font-semibold text-gray-800">Vantagens de ser um Licenciado:</h3>
          <ul className="pl-6 text-gray-700 space-y-2 list-none">
            <li>✔ Comercialize um sistema de alto desempenho e credibilidade</li>
            <li>✔ Proporcione soluções eficientes para empresas e escritórios</li>
            <li>✔ Tenha suporte e treinamento dedicados</li>
            <li>✔ Expanda seu portfólio com um produto inovador</li>
            <li>✔ Maximize seus lucros com um mercado em crescimento</li>
          </ul>

          {/* Chamada para ação (CTA) */}
          <div className="mt-6">
            <Link
              to="contato"
              smooth={true}
              duration={500}
              className="bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
            >
              Quero ser um Licenciado
            </Link>
          </div>
        </div>

        {/* Imagem ilustrativa */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src={system}
            alt="Ilustração do sistema GED"
            height={400}
            className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </Element>
  );
}
