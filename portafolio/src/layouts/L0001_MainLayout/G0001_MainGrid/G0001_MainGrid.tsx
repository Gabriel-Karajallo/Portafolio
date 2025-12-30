// region imports
import { useState } from "react";
import { C0001_Experiencia } from "./C0001_Experiencia/C0001_Experiencia";
import { C0002_Proyectos } from "./C0002_Proyectos/C0002_Proyectos";
import { C0003_Stack } from "./C0003_Stack/C0003_Stack";
import { C0004_Educacion } from "./C0004_Educacion/C0004_Educacion";
// endregion

// region types
type TarjetaActiva =
  | "experiencia"
  | "proyectos"
  | "stack"
  | "educacion"
  | null;
// endregion

// region component
export function G0001_MainGrid() {
  const [tarjetaActiva, setTarjetaActiva] =
    useState<TarjetaActiva>(null);

  const cerrarTarjeta = () => setTarjetaActiva(null);

  return (
    <div
      className="
        w-full
        h-full
        flex
        items-center
        justify-center
        p-6
        md:p-10
      "
    >
      <div
        className="
          w-full
          max-w-5xl
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "
      >
        {(tarjetaActiva === null || tarjetaActiva === "experiencia") && (
          <C0001_Experiencia
            activa={tarjetaActiva === "experiencia"}
            onToggle={() => setTarjetaActiva("experiencia")}
            onClose={cerrarTarjeta}
          />
        )}

        {(tarjetaActiva === null || tarjetaActiva === "proyectos") && (
          <C0002_Proyectos
            activa={tarjetaActiva === "proyectos"}
            onToggle={() => setTarjetaActiva("proyectos")}
            onClose={cerrarTarjeta}
          />
        )}

        {(tarjetaActiva === null || tarjetaActiva === "stack") && (
          <C0003_Stack
            activa={tarjetaActiva === "stack"}
            onToggle={() => setTarjetaActiva("stack")}
            onClose={cerrarTarjeta}
          />
        )}

        {(tarjetaActiva === null || tarjetaActiva === "educacion") && (
          <C0004_Educacion
            activa={tarjetaActiva === "educacion"}
            onToggle={() => setTarjetaActiva("educacion")}
            onClose={cerrarTarjeta}
          />
        )}
      </div>
    </div>
  );
}
// endregion
