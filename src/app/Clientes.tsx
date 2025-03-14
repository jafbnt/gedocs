import { Element } from "react-scroll";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Clientes() {
  const clients = [
    {
      id: 1,
      logo: "https://www.celula.net.br/wp-content/uploads/2023/04/logo-celula.webp",
      testimonial: "A empresa nos ajudou a organizar todos os nossos documentos de maneira eficiente!",
      name: "Célula Gestão de Documentos",
    },
    {
      id: 2,
      logo: "https://stockdoc.com.br/wp-content/uploads/2021/08/logo_lg-2048x206.png",
      testimonial: "Com o GED, reduzimos custos e otimizamos nossos processos internos.",
      name: "Stock Doc",
    },
  ];

  return (
    <Element name="clientes" className="h-screen flex flex-col items-center justify-center px-6 py-12 ">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">Nossos Clientes</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full max-w-3xl"
      >
        {clients.map((client) => (
          <SwiperSlide key={client.id} className="flex flex-col items-center justify-center text-center py-10 px-6">
            <div className="bg-white shadow-md border-[1px] border-gray-100 rounded-xl p-8 transition-transform duration-300 hover:scale-105">
              {/* Logo do Cliente */}
              <div className="flex justify-center items-center w-full mb-6">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain max-h-20 w-auto" // Ajusta logos para um tamanho uniforme
                />
              </div>

              {/* Depoimento */}
              <p className="text-gray-600 italic text-lg leading-relaxed">{client.testimonial}</p>

              {/* Nome do Cliente */}
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{client.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Element>
  );
}
