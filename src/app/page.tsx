"use client";

import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../public/gedocs.png";
import Clientes from "./Clientes";
import Contato from "./Contato";
import Inicio from "./Inicio";
import Servicos from "./Servicos";
import Sobre from "./Sobre";
import Visao from "./Visao";
import Vantagens from "./Vantagens";

export default function Home() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "sobre", label: "Sobre" },
    { id: "vantagens", label: "Vantagens" },
    { id: "compromisso", label: "Compromisso" },
    { id: "servicos", label: "Serviços" },
    { id: "clientes", label: "Clientes" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <div className="flex flex-col items-center bg-white select-none">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-lg backdrop-blur-md h-16 flex items-center z-50">
        <div className="flex items-center justify-between w-full container mx-auto px-6">
          {/* Left - Logo & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-gray-700 cursor-pointer"
              aria-label="Abrir menu"
            >
              <Icon icon="ph:list-bold" height={28} />
            </button>
            <Image src={logo} alt="Logo" height={35} className="transition-transform hover:scale-105" />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className="cursor-pointer transition text-gray-600 text-sm font-medium hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botão Contato */}
          <Link
            to="contato"
            smooth={true}
            duration={500}
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all"
          >
            Contato
          </Link>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`fixed top-16 left-0 w-full bg-white shadow-md transition-transform duration-300 z-40 
          md:hidden ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        <ul className="py-4 px-6 space-y-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                className="block text-gray-700 text-lg font-medium hover:bg-gray-100 py-3 px-4 rounded-md transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Conteúdo Principal */}
      <div className="pt-16 container mx-auto">
        <Inicio />
        <Sobre />
        <Vantagens />
        <Visao />
        <Servicos />
        <Clientes />
        <Contato />
      </div>
    </div>
  );
}
