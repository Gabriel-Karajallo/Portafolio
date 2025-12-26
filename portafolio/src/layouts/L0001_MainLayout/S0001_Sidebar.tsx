// region imports
import { icons } from "../../assets/icons/iconos";
import { useState } from "react";
import { D0001_DialogoContacto } from "../../components/Dialogos/D0001_DialogoContacto";
// endregion





// region component
export function S0001_Sidebar() {
  // region declaraciones
  const [dialogoAbierto, setDialogoAbierto] = useState(false);
  
  // endregion
  return (
    <aside
      className="
        w-full
        md:w-64
        flex
        flex-col
        items-center
        md:items-start
        gap-6
        md:gap-4
      "
      >

      {/* Identidad */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <img
          src="./foto2.png"
          alt="Foto de perfil de Gabi"
          className="
            w-20 h-20 md:w-24 md:h-24
            rounded-full
            object-cover
            ring-2 ring-neutral-600
            ring-offset-4 ring-offset-neutral-900
            shadow-md shadow-black/40
          "
        />

        <div>
          <p className="text-base font-semibold text-neutral-100 text-center md:text-left">
            Gabriel
          </p>
          <p className="text-sm text-neutral-400">
            Desarrollador de software
          </p>
        </div>
      </div>

      {/* Sobre mí */}
      <div className="
            flex
            flex-col
            items-center
            text-center
            gap-9
            md:items-start
            md:text-left
          ">

        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
            Enfocado en crear interfaces limpias,
            funcionales y bien estructuradas.
          </p>

          <button
            onClick={() => setDialogoAbierto(true)}
            className="
              w-full
              max-w-xs
              rounded-lg
              border
              border-neutral-700
              py-2
              text-sm
              text-neutral-200
              hover:bg-neutral-800
              transition
            "
          >
            Contacto
          </button>
        </div>
      </div>

      {/* Redes */}
      <div className="flex gap-4 mt-2">
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
      <D0001_DialogoContacto
  abierto={dialogoAbierto}
  onCerrar={() => setDialogoAbierto(false)}
>
  {/* Texto directo */}
  
  {/* Formulario */}
  <form className="flex flex-col gap-4">
    
    {/* Nombre */}
    <div className="flex flex-col gap-1">
      <label className="text-xs text-neutral-400">
        Nombre
      </label>
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

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label className="text-xs text-neutral-400">
        Email
      </label>
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

    {/* Mensaje */}
    <div className="flex flex-col gap-1">
      <label className="text-xs text-neutral-400">
        Mensaje
      </label>
      <textarea
        placeholder="Cuéntame en qué puedo ayudarte…"
        rows={4}
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

    {/* Botón enviar */}
    <button
      type="submit"
      className="
        mt-2
        rounded-lg
        bg-neutral-200
        text-neutral-900
        py-2
        text-sm
        font-medium
        hover:bg-neutral-300
        transition
      "
    >
      Enviar mensaje
    </button>

  </form>
  <p className="text-sm text-neutral-400 mb-6 mt-4">
    O puedes escribirme directamente a{" "}
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
