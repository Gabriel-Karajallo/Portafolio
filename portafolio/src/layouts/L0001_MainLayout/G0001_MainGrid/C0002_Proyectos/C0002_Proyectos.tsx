// region imports
import { useState } from "react";
import { C0000_TarjetaInteractivaBase } from "../../../../components/Tarjetas/C0000_TarjetaInteractivaBase";
import { D0002_DialogoDetalle } from "../../../../components/Dialogos/D0002_DialogoDetalle";
// endregion

// region component
export function C0002_Proyectos() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <C0000_TarjetaInteractivaBase
        titulo="Proyectos"
        resumen="Estos son los proyectos más importantes que he desarrollado."
        onAbrir={() => setAbierto(true)}
      />

      <D0002_DialogoDetalle
        abierto={abierto}
        titulo="Proyectos destacados"
        subtitulo="Aplicaciones y productos desarrollados por iniciativa propia o profesional."
        onCerrar={() => setAbierto(false)}
      >
        <p>
          Aquí puedes listar proyectos, explicar objetivos, tecnologías usadas
          y qué problemas resolvía cada uno.
        </p>
      </D0002_DialogoDetalle>
    </>
  );
}
// endregion
