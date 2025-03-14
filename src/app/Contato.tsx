import { Icon } from "@iconify-icon/react";
import { Element } from "react-scroll";

export default function Contato() {
  return (
    <Element name="contato" className="h-screen flex items-center justify-center  px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 border-[1px] border-gray-100 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl p-8">
        {/* Informações de Contato */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Entre em Contato</h2>
          <p className="text-gray-600">Fale conosco através das informações abaixo ou preencha o formulário.</p>

          <div className="flex items-center space-x-3">
            <Icon icon="ic:baseline-email" className="text-blue-500" height={24} />
            <span className="text-gray-700">email@exemplo.com</span>
          </div>

          <div className="flex items-center space-x-3">
            <Icon icon="ic:baseline-phone" className="text-blue-500" height={24} />
            <span className="text-gray-700">+55 32 99999-9999</span>
          </div>

          <div className="flex items-center space-x-3">
            <Icon icon="mdi:map-marker" className="text-blue-500" height={24} />
            <span className="text-gray-700">Juiz de Fora - MG, Brasil</span>
          </div>

          {/* Mapa */}
          <iframe
            className="w-full h-60 rounded-lg mt-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.5687685434155!2d-43.35057088504314!3d-21.760152285605267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989ba135b9e8ff%3A0x7a13d31f3cddfa1d!2sAv%20Bar%C3%A3o%20do%20Rio%20Branco%2C%201871%20-%20Centro%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036013-003%2C%20Brazil!5e0!3m2!1spt-BR!2sbr!4v1649900000000!5m2!1spt-BR!2sbr"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        {/* Formulário */}
        <div className=" p-6 ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Envie sua Mensagem</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Telefone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Observação"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">Enviar</button>
          </form>
        </div>
      </div>
    </Element>
  );
}
