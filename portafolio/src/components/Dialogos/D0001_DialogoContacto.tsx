// region imports
import { icons } from "lucide-react";
import type { ReactNode } from "react";
// endregion

// region types
interface D0001_DialogoContactoProps {
  abierto: boolean;
  onCerrar: () => void;
  children?: ReactNode;
}
// endregion

// region component
export function D0001_DialogoContacto(props: D0001_DialogoContactoProps) {
  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm

        transition-all duration-300 ease-out
        ${props.abierto ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      onClick={props.onCerrar}
    >
      <div
        className={`
          w-full max-w-3xl
          rounded-3xl
          bg-neutral-900
          border border-neutral-800
          p-8 md:p-10
          text-neutral-100

          transform transition-all duration-300 ease-out
          ${props.abierto
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-6"}
        `}
        onClick={(evento) => evento.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-medium">
            ¿Hablamos?
          </h2>

          <button
            onClick={props.onCerrar}
            className="text-neutral-400 hover:text-neutral-200 transition"
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Lado visual */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-5">
          

            <p className="text-neutral-300 text-sm leading-relaxed max-w-sm">
              ¿Tienes una idea, un proyecto o simplemente quieres decir hola?
              Escríbeme directamente y te respondo sin bots ni formularios eternos.
            </p>

            <a
              href="mailto:c.gabrielkarajallo@gmail.com"
               className="
                inline-flex
                items-center
                gap-1.5
                text-blue-400
                hover:text-blue-300
                transition
                text-sm
                font-medium
              "
            >
              c.gabrielkarajallo@gmail.com  <icons.ArrowRight size={16} />
            </a>

              <img
              src="./mano.png"
              alt="Gabi señalando el contacto"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Formulario */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="
                bg-neutral-800/50
                rounded-xl
                px-4 py-3
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <input
              type="email"
              placeholder="Tu email"
              className="
                bg-neutral-800/50
                rounded-xl
                px-4 py-3
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <textarea
              placeholder="Cuéntame qué tienes en mente…"
              rows={4}
              className="
                bg-neutral-800/50
                rounded-xl
                px-4 py-3
                text-sm
                resize-none
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <button
              type="submit"
              className="
                mt-2
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                transition
                py-3
                text-sm
                font-medium
              "
            >
              Enviar mensaje
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
// endregion
