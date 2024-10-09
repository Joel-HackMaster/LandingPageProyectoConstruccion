import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons/faWhatsappSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function blogcard({ image, author, date, title, subtitle, content, tags }) {
  return (
    <div className="flex flex-col h-auto w-full sm:flex-row shadow-lg bg-white rounded-lg overflow-hidden">
      {/* Sección de imagen */}
      <div className="relative h-64 sm:h-auto sm:w-1/3">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform transform hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>

      {/* Sección de contenido */}
      <div className="p-6 sm:w-2/3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="text-lg text-gray-600">{subtitle}</h2>
        <p className="mt-4 text-gray-700">{content}</p>
        <div className="mt-4">
          <span className="text-sm text-gray-500">Asesor: {author}</span> |{" "}
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <div className="mt-4">
          <ul className="flex space-x-2">
            {tags.map((tag, index) => (
              <li key={index}>
                <a href="#" className="text-sm text-blue-500">
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
            <p className="mt-4 text-right text-gray-600">¿Quieres saber mas sobre este servicio? </p>
            <div className="flex justify-end">
                <a target="_blank" href={`https://wa.me/51994745930?text=Hola%20Maestro%20Mario%2C%20tengo%20una%20consulta%20sobre%20el%20servicio%20de%20${title}`} className="flex items-center px-2 py-1 text-2xl text-center text-green-500 hover:text-green-700 rounded-full ring-2 ring-green-500/10 hover:ring-green-700/20">
                    <FontAwesomeIcon icon={faWhatsappSquare}/>
                    <span className="pl-2 text-sm">Contactanos</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}
