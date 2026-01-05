// region imports
import { useState } from "react";
import { icons } from "../../../../assets/icons/iconos";

import { C0000_TarjetaInteractivaBase } from "../../../../components/Tarjetas/C0000_TarjetaInteractivaBase";
import { D0002_DialogoDetalle } from "../../../../components/Dialogos/D0002_DialogoDetalle";
// endregion

// region component
export function C0005_SobreMi() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <C0000_TarjetaInteractivaBase
        titulo="Sobre mí"
        resumen="Perfil profesional, intereses y aficiones."
        onAbrir={() => setAbierto(true)}
      />

      <D0002_DialogoDetalle
  abierto={abierto}
  titulo="Sobre mí"
  subtitulo="Perfil profesional y áreas de interés."
  onCerrar={() => setAbierto(false)}
>
  <div className="flex flex-col gap-10 text-sm text-gray-300">

    {/* ================= DESCRIPCIÓN GENERAL ================= */}
    <p className="leading-relaxed text-gray-200 max-w-3xl">
      Desarrollador de software con enfoque en frontend moderno.
      Me interesa crear aplicaciones claras, mantenibles y orientadas
      a producto, cuidando tanto la lógica como la experiencia de usuario.
    </p>

    {/* ================= INTERESES / HOBBIES ================= */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

      {/* ===== INTERESES ===== */}
      <section className="flex flex-col gap-4">
        <h4 className="text-white font-medium">
          Intereses
        </h4>

        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-3">
            <icons.code className="w-4 h-4 text-gray-400" />
            <span>Desarrollo Full-Stack</span>
          </li>

          <li className="flex items-center gap-3">
            <icons.layers className="w-4 h-4 text-gray-400" />
            <span>Arquitecturas limpias y código mantenible</span>
          </li>

          <li className="flex items-center gap-3">
            <icons.layout className="w-4 h-4 text-gray-400" />
            <span>Diseño de producto y experiencia de usuario</span>
          </li>

          <li className="flex items-center gap-3">
            <icons.sparkles className="w-4 h-4 text-gray-400" />
            <span>Uso práctico de inteligencia artificial</span>
          </li>
        </ul>
      </section>

      {/* ===== HOBBIES ===== */}
      <section className="flex flex-col gap-4">
        <h4 className="text-white font-medium">
          Hobbies
        </h4>

        <ul className="flex flex-col gap-3">

          <li className="flex items-center gap-3">
            <icons.activity className="w-4 h-4 text-gray-400" />
            <span>Deporte</span>
          </li>
          
          <li className="flex items-center gap-3">
            <icons.gamepad className="w-4 h-4 text-gray-400" />
            <span>Videojuegos</span>
          </li>

          <li className="flex items-center gap-3">
            <icons.bookOpenCheck className="w-4 h-4 text-gray-400" />
            <span>Aprender tecnologías nuevas</span>
          </li>

          <li className="flex items-center gap-3">
            <icons.globe className="w-4 h-4 text-gray-400" />
            <span>Cine</span>
          </li>
        </ul>
      </section>

    </div>
  </div>
</D0002_DialogoDetalle>
    </>
  );
}
// endregion
