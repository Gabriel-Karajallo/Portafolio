import { useState } from "react";
import { D0002_DialogoDetalle } from "../../../../components/Dialogos/D0002_DialogoDetalle";
import { C0000_TarjetaInteractivaBase } from "../../../../components/Tarjetas/C0000_TarjetaInteractivaBase";
import { icons } from "lucide-react";

export function C0001_Experiencia() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <C0000_TarjetaInteractivaBase
        titulo="Experiencia laboral"
        resumen="Conoce toda mi trayectoria profesional, dónde he trabajado y qué he logrado."
        onAbrir={() => setAbierto(true)}
      />

      <D0002_DialogoDetalle
  abierto={abierto}
  titulo="Experiencia profesional"
  subtitulo="Mi recorrido como desarrollador."
  onCerrar={() => setAbierto(false)}
>
  {/* Experiencia 1 */}
  <section className="space-y-5">
    <div className="flex items-start gap-4">
      <icons.Briefcase size={20} className="text-blue-400 mt-1" />

      <div>
        <p className="text-base font-semibold text-neutral-100">
          Desarrollador de software — Wortach
        </p>
        <p className="text-xs text-neutral-500 mt-0.5">
          Julio 2025 — Actualidad
        </p>
      </div>
    </div>

    <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
      Desarrollo de aplicaciones web internas orientadas a la gestión de datos
      y procesos empresariales, participando en el diseño, implementación y
      mejora continua de funcionalidades clave.
    </p>

    <div className="flex flex-wrap gap-2 pt-1">
      {[
        ".NET",
        "Entity Framework",
        "SQL Server",
        "React",
        "TypeScript",
      ].map((tech) => (
        <span
          key={tech}
          className="
            px-3 py-1
            rounded-full
            bg-neutral-800
            text-[11px]
            text-neutral-400
          "
        >
          {tech}
        </span>
      ))}
    </div>
  </section>

  {/* Separador */}
  <div className="my-10 h-px bg-neutral-800" />

  {/* Experiencia 2 */}
  <section className="space-y-5">
    <div className="flex items-start gap-4">
      <icons.Code size={20} className="text-blue-400 mt-1" />

      <div>
        <p className="text-base font-semibold text-neutral-100">
          Desarrollador Frontend — Insinno
        </p>
        <p className="text-xs text-neutral-500 mt-0.5">
          Julio 2024 — Diciembre 2024
        </p>
      </div>
    </div>

    <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
      Desarrollo de interfaces frontend con Angular, creando distintos proyectos
      y funcionalidades enfocadas en experiencia de usuario, componentes
      reutilizables y estructura escalable.
    </p>

    <div className="flex flex-wrap gap-2 pt-1">
      {[
        "Angular",
        "TypeScript",
        "HTML",
        "CSS / SCSS",
      ].map((tech) => (
        <span
          key={tech}
          className="
            px-3 py-1
            rounded-full
            bg-neutral-800
            text-[11px]
            text-neutral-400
          "
        >
          {tech}
        </span>
      ))}
    </div>
  </section>
</D0002_DialogoDetalle>
    </>
  );
}
