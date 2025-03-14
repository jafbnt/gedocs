import { Element, Link } from "react-scroll";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Contact from "./illustration/Contact";
import Extraction from "./illustration/Extraction";
import Welcome from "./illustration/Welcome";

export default function Inicio() {
  const slides = [
    {
      id: 1,
      title: "Torne-se um Licenciado",
      text: "Descubra como você pode transformar seu negócio com nosso software de gestão de documentos. Junte-se a nós como licenciado e aproveite uma oportunidade única de crescimento e inovação!",
      image: <Welcome height={500} />,
      button: "Saiba Mais",
      link: "sobre",
    },
    {
      id: 2,
      title: "Soluções Inteligentes",
      text: "Nosso software de gestão de documentos automatiza processos, reduz custos e melhora a produtividade.",
      image: <Extraction height={500} />,
      button: "Conhecer Benefícios",
      link: "vantagens",
    },
    {
      id: 3,
      title: "Entre em Contato",
      text: "Quer saber mais? Entre em contato e descubra como se tornar um licenciado do nosso software!",
      image: <Contact height={500} />,
      button: "Fale Conosco",
      link: "contato",
    },
  ];

  return (
    <Element name="home" className="h-screen flex items-center justify-center px-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-[80vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex flex-row w-full items-center justify-center px-8">
            <div className="flex items-center justify-center h-full px-10">
              <div className="md:w-1/2 flex flex-col text-center md:text-left space-y-6">
                <h2 className="text-4xl font-extrabold text-gray-900">{slide.title}</h2>
                <p className="text-lg text-gray-700">{slide.text}</p>
                <Link
                  to={slide.link}
                  smooth={true}
                  duration={500}
                  className="bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 self-center md:self-start"
                >
                  {slide.button}
                </Link>
              </div>

              <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">{slide.image}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Element>
  );
}
