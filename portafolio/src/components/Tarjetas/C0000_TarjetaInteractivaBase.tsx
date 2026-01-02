interface C0000_TarjetaInteractivaBaseProps {
  titulo: string;
  resumen: string;
  onAbrir: () => void;
}

export function C0000_TarjetaInteractivaBase(props: C0000_TarjetaInteractivaBaseProps) {
  return (
    <section
      onClick={props.onAbrir}
      className="
        cursor-pointer
        rounded-xl
        border border-neutral-800
        bg-neutral-900/60
        px-6 py-8
        min-h-[180px]

        transition-all
        hover:bg-neutral-900/80
        hover:-translate-y-0.5
      "
    >
      <h2 className="text-lg font-medium text-neutral-200 mb-3">
        {props.titulo}
      </h2>

      <p className="text-sm text-neutral-400 leading-relaxed">
        {props.resumen}
      </p>
    </section>
  );
}
