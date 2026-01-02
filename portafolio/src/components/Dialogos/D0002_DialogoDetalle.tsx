import type { ReactNode } from "react";
import { icons } from "../../assets/icons/iconos";

interface D0002_DialogoDetalleProps {
  abierto: boolean;
  titulo: string;
  subtitulo: string;
  onCerrar: () => void;
  children: ReactNode;
}

export function D0002_DialogoDetalle(props: D0002_DialogoDetalleProps) {
  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm
        transition-opacity duration-300
        ${props.abierto ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      onClick={props.onCerrar}
    >
      <div
        className={`
          w-full max-w-3xl
          max-h-[85vh]
          rounded-3xl
          bg-neutral-900
          border border-neutral-800
          p-10
          text-neutral-100
          overflow-y-auto

          transform transition-all duration-300 ease-out
          ${props.abierto
            ? "scale-100 translate-y-0"
            : "scale-95 translate-y-6"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-xl font-medium">
              {props.titulo}
            </h2>
            <p className="text-neutral-400 text-sm">
              {props.subtitulo}
            </p>
          </div>

          <button
            onClick={props.onCerrar}
            className="text-neutral-400 hover:text-neutral-200 transition"
          >
            <icons.X size={20} />
          </button>
        </div>

        {/* Contenido */}
        <div className="space-y-6 text-sm text-neutral-300">
          {props.children}
        </div>
      </div>
    </div>
  );
}
