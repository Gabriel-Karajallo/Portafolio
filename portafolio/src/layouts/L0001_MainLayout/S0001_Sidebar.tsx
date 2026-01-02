// region imports
import { useState } from "react";
import { icons } from "../../assets/icons/iconos";
import { D0001_DialogoContacto } from "../../components/Dialogos/D0001_DialogoContacto";
// endregion

// region component
export function S0001_Sidebar() {
  // region state
  const [dialogoAbierto, setDialogoAbierto] = useState(false);
  // endregion

  return (
    <aside
      className="
        w-full
        md:w-64
        px-4
        flex
        flex-col
        items-center
        md:items-start
        gap-6
      "
    >
      {/* Identidad */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="relative w-20 h-20 md:w-24 md:h-24 group">
          {/* Foto principal */}
          <img
            src="./foto.png"
            alt="Foto de perfil de Gabi"
            className="
              absolute inset-0
              w-full h-full
              rounded-full
              object-cover
              ring-2 ring-neutral-600
              ring-offset-4 ring-offset-neutral-900
              shadow-md shadow-black/40
              transition-opacity duration-300
              opacity-100 group-hover:opacity-0
            "
          />

          {/* Foto hover */}
          <img
            src="./foto2.png"
            alt="Foto alternativa de Gabi"
            className="
              absolute inset-0
              w-full h-full
              rounded-full
              object-cover
              ring-2 ring-neutral-600
              ring-offset-4 ring-offset-neutral-900
              shadow-md shadow-black/40
              transition-opacity duration-300
              opacity-0 group-hover:opacity-100
            "
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-base font-semibold text-neutral-100">
            Gabriel Karajallo
          </p>
          <p className="text-sm text-neutral-400">
            Desarrollador de software
          </p>
        </div>
      </div>

      {/* Acciones */}
      <div className="flex flex-col gap-3 w-full">
        <a
          href="/cv-gabriel-karajallo.pdf"
          download
          className="
            w-full
            h-10
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-neutral-200
            text-neutral-900
            text-sm
            font-medium
            hover:bg-neutral-300
            transition
          "
        >
          <icons.fileText size={16} />
          Descargar CV
        </a>

        <button
          onClick={() => setDialogoAbierto(true)}
          className="
            w-full
            h-10
            inline-flex
            items-center
            justify-center
            rounded-lg
            border
            border-neutral-700
            text-sm
            text-neutral-200
            hover:bg-neutral-800
            transition
          "
        >
          Contacto
        </button>
      </div>

      {/* Redes */}
      <div className="flex gap-4 pt-2">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-neutral-200 transition"
        >
          <icons.instagram size={18} />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-neutral-200 transition"
        >
          <icons.linkedin size={18} />
        </a>

        <a
          href="mailto:c.gabrielkarajallo@gmail.com"
          className="text-neutral-400 hover:text-neutral-200 transition"
        >
          <icons.email size={18} />
        </a>

        <a
          href="https://github.com/Gabriel-Karajallo"
          className="text-neutral-400 hover:text-neutral-200 transition"
        >
          <icons.github size={18} />
        </a>
      </div>

      {/* Diálogo contacto */}
      <D0001_DialogoContacto
        abierto={dialogoAbierto}
        onCerrar={() => setDialogoAbierto(false)}
      >
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-neutral-400">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="
                rounded-lg
                bg-neutral-800
                border border-neutral-700
                px-3 py-2
                text-sm
                text-neutral-200
                placeholder:text-neutral-500
                focus:outline-none
                focus:ring-2
                focus:ring-neutral-600
              "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-neutral-400">Email</label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="
                rounded-lg
                bg-neutral-800
                border border-neutral-700
                px-3 py-2
                text-sm
                text-neutral-200
                placeholder:text-neutral-500
                focus:outline-none
                focus:ring-2
                focus:ring-neutral-600
              "
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-neutral-400">Mensaje</label>
            <textarea
              rows={4}
              placeholder="Cuéntame en qué puedo ayudarte…"
              className="
                resize-none
                rounded-lg
                bg-neutral-800
                border border-neutral-700
                px-3 py-2
                text-sm
                text-neutral-200
                placeholder:text-neutral-500
                focus:outline-none
                focus:ring-2
                focus:ring-neutral-600
              "
            />
          </div>

          <button
            type="submit"
            className="
              mt-2
              h-10
              rounded-lg
              bg-neutral-200
              text-neutral-900
              text-sm
              font-medium
              hover:bg-neutral-300
              transition
            "
          >
            Enviar mensaje
          </button>
        </form>

        <p className="text-sm text-neutral-400 mt-4">
          O escríbeme directamente a{" "}
          <a
            href="mailto:c.gabrielkarajallo@gmail.com"
            className="text-neutral-200 underline"
          >
            c.gabrielkarajallo@gmail.com
          </a>
        </p>
      </D0001_DialogoContacto>
    </aside>
  );
}
// endregion
