// region imports
import type { ReactNode } from "react";
import { L0002_ParticulasFondo } from "../../components/Background/L0002_ParticulasFondo";
// endregion

// region types
interface L0001_MainLayoutProps {
  children: ReactNode;
}
// endregion

// region component
export function L0001_MainLayout(props: L0001_MainLayoutProps) {
  return (
    <div
      className="
        relative
        w-screen
        h-screen
        bg-neutral-900
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        <L0002_ParticulasFondo />
      </div>

      {/* Contenido */}
      <div
        className="
          relative
          z-10
          w-full
          h-full
          md:max-w-7xl
          md:h-[85%]
          mx-auto
          flex
          flex-col
          md:flex-row
          bg-neutral-900
          border
          border-neutral-800
          rounded-none
          md:rounded-2xl
          p-4
          md:p-6
          gap-6
          overflow-y-auto
          md:overflow-hidden
        "
      >
        {props.children}
      </div>
    </div>
  );
}
// endregion
