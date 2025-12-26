// region types
interface C0000_TarjetaInteractivaBaseProps {
  titulo: string;
  activa: boolean;
  onToggle: () => void;
  resumen: string;
  children: React.ReactNode;
}
// endregion

// region component
export function C0000_TarjetaInteractivaBase(
  props: C0000_TarjetaInteractivaBaseProps
) {
  return (
    <section
      onClick={props.onToggle}
      className={`
        cursor-pointer
        rounded-xl
        border
        border-neutral-800
        bg-neutral-900/60
        p-6
        transition-all
        duration-300

        ${props.activa
          ? "md:col-span-2 md:row-span-2"
          : "hover:bg-neutral-900/80"}
      `}
    >
      <h2 className="text-lg font-medium text-neutral-200 mb-4">
        {props.titulo}
      </h2>

      {props.activa ? (
        <div className="text-sm text-neutral-300 space-y-3">
          {props.children}
        </div>
      ) : (
        <p className="text-sm text-neutral-400">
          {props.resumen}
        </p>
      )}
    </section>
  );
}
// endregion
