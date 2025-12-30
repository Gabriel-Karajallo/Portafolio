// region types
interface C0000_TarjetaInteractivaBaseProps {
  titulo: string;
  resumen: string;
  activa: boolean;
  onToggle: () => void;
  onClose?: () => void;
  children: React.ReactNode;
}
// endregion

// region component
export function C0000_TarjetaInteractivaBase(
  props: C0000_TarjetaInteractivaBaseProps
) {
  return (
    <section
      onClick={!props.activa ? props.onToggle : undefined}
      className={`
        relative
        rounded-xl
        border
        border-neutral-800
        bg-neutral-900/60
        px-4
        py-6
        min-h-[180px]
        w-full
        transition-colors

        ${
          props.activa
            ? "md:col-span-2 md:row-span-2 cursor-default"
            : "cursor-pointer hover:bg-neutral-900/80"
        }
      `}
    >
      {/* Botón cerrar */}
      {props.activa && props.onClose && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            props.onClose?.();
          }}
          className="
            absolute
            top-4
            right-4
            text-neutral-400
            hover:text-neutral-200
            text-lg
          "
          aria-label="Cerrar"
        >
          ✕
        </button>
      )}

      {/* Título */}
      <h2 className="text-lg font-medium text-neutral-200 mb-3">
        {props.titulo}
      </h2>

      {/* Contenido */}
      {props.activa ? (
        <div className="text-sm text-neutral-300 space-y-3">
          {props.children}
        </div>
      ) : (
        <p className="text-sm text-neutral-400 leading-relaxed">
          {props.resumen}
        </p>
      )}
    </section>
  );
}
// endregion