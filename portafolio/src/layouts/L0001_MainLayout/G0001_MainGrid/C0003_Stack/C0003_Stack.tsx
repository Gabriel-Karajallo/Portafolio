// region imports
import { useState } from "react";
import { C0000_TarjetaInteractivaBase } from "../../../../components/Tarjetas/C0000_TarjetaInteractivaBase";
import { D0002_DialogoDetalle } from "../../../../components/Dialogos/D0002_DialogoDetalle";
import { icons } from "lucide-react";
// endregion

// region component
export function C0003_Stack() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <C0000_TarjetaInteractivaBase
        titulo="Stack tecnológico"
        resumen="Tecnologías que utilizo en proyectos reales, no solo en pruebas."
        onAbrir={() => setAbierto(true)}
      />

      <D0002_DialogoDetalle
  abierto={abierto}
  titulo="Stack tecnológico"
  subtitulo="Herramientas y tecnologías con las que trabajo habitualmente."
  onCerrar={() => setAbierto(false)}
>
  {/* Tecnologías principales */}
  <section className="space-y-6">
    <h3 className="text-sm font-semibold text-neutral-200">
      Tecnologías principales
    </h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {[
        { nombre: ".NET", icono: icons.Code },
        { nombre: "C#", icono: icons.Terminal },
        { nombre: "React", icono: icons.Component },
        { nombre: "TypeScript", icono: icons.Braces },
        { nombre: "SQL Server", icono: icons.Database },
        { nombre: "Entity Framework", icono: icons.Layers },
      ].map((tech) => (
        <div
          key={tech.nombre}
          className="flex flex-col items-center gap-2"
        >
          <tech.icono size={28} className="text-blue-400" />
          <span className="text-xs text-neutral-300 text-center">
            {tech.nombre}
          </span>
        </div>
      ))}
    </div>
  </section>

  {/* Separador */}
  <div className="my-10 h-px bg-neutral-800" />

  {/* Conocimientos adicionales */}
  <section className="space-y-6">
    <h3 className="text-sm font-semibold text-neutral-200">
      También tengo conocimientos de
    </h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {[
        { nombre: "Angular", icono: icons.LayoutGrid },
        { nombre: "HTML", icono: icons.FileText },
        { nombre: "CSS / SCSS", icono: icons.Palette },
        { nombre: "Git", icono: icons.GitBranch },
        { nombre: "Firebase", icono: icons.Flame },
      ].map((tech) => (
        <div
          key={tech.nombre}
          className="flex flex-col items-center gap-2 opacity-80"
        >
          <tech.icono size={24} className="text-neutral-400" />
          <span className="text-xs text-neutral-400 text-center">
            {tech.nombre}
          </span>
        </div>
      ))}
    </div>
  </section>
</D0002_DialogoDetalle>
    </>
  );
}
// endregion
