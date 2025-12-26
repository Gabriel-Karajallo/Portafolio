// region imports
import type { ReactNode } from "react";
// endregion

// region types
interface D0001_DialogoContactoProps {
  abierto: boolean;
  onCerrar: () => void;
  children: ReactNode;
}
// endregion

// region component
export function D0001_DialogoContacto(props: D0001_DialogoContactoProps) {
  if (!props.abierto) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        backdrop-blur-sm
      "
      onClick={props.onCerrar}
    >
      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          bg-neutral-900
          border
          border-neutral-800
          p-6
          text-neutral-100
        "
        onClick={(evento) => evento.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">
            Contacto
          </h2>

          <button
            onClick={props.onCerrar}
            className="text-neutral-400 hover:text-neutral-200 transition"
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        {props.children}
      </div>
    </div>
  );
}
// endregion
