// region imports
import { useState } from "react";
import { C0001_Experiencia } from "./C0001_Experiencia/C0001_Experiencia";
import { C0002_Proyectos } from "./C0002_Proyectos/C0002_Proyectos";
import { C0003_Stack } from "./C0003_Stack/C0003_Stack";
import { C0004_Educacion } from "./C0004_Educacion/C0004_Educacion";
// endregion

type TarjetaActiva =
  | "experiencia"
  | "proyectos"
  | "stack"
  | "educacion"
  | null;

// region component
export function G0001_MainGrid() {
  const [tarjetaActiva, setTarjetaActiva] =
    useState<TarjetaActiva>(null);

  const alternarTarjeta = (clave: TarjetaActiva) => {
    setTarjetaActiva(
      tarjetaActiva === clave ? null : clave
    );
  };

  return (
    <div
      className="
        w-full
        max-w-6xl
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        md:grid-rows-2
        md:gap-8
        md:h-[70%]
      "
    >
      <C0001_Experiencia
        activa={tarjetaActiva === "experiencia"}
        onToggle={() => alternarTarjeta("experiencia")}
      />

      <C0002_Proyectos
        activa={tarjetaActiva === "proyectos"}
        onToggle={() => alternarTarjeta("proyectos")}
      />

      <C0003_Stack
        activa={tarjetaActiva === "stack"}
        onToggle={() => alternarTarjeta("stack")}
      />

      <C0004_Educacion
        activa={tarjetaActiva === "educacion"}
        onToggle={() => alternarTarjeta("educacion")}
      />
    </div>
  );
}
// endregion
