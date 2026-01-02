// region imports
import { useState } from "react";
import { C0000_TarjetaInteractivaBase } from "../../../../components/Tarjetas/C0000_TarjetaInteractivaBase";
import { D0002_DialogoDetalle } from "../../../../components/Dialogos/D0002_DialogoDetalle";
// endregion

// region component
export function C0005_SobreMi() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <C0000_TarjetaInteractivaBase
        titulo="Sobre mí"
        resumen="Un poco más sobre quién soy, cómo trabajo y qué me motiva."
        onAbrir={() => setAbierto(true)}
      />

      <D0002_DialogoDetalle
        abierto={abierto}
        titulo="Sobre mí"
        subtitulo="Forma de trabajar, mentalidad y valores como desarrollador."
        onCerrar={() => setAbierto(false)}
      >
        <p>
          Aquí puedes contar quién eres, cómo te gusta trabajar,
          qué te motiva y qué te diferencia.
        </p>
      </D0002_DialogoDetalle>
    </>
  );
}
// endregion
