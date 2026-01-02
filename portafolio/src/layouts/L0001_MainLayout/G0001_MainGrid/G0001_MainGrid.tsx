// region imports
import { C0001_Experiencia } from "./C0001_Experiencia/C0001_Experiencia";
import { C0002_Proyectos } from "./C0002_Proyectos/C0002_Proyectos";
import { C0003_Stack } from "./C0003_Stack/C0003_Stack";
import { C0004_Educacion } from "./C0004_Educacion/C0004_Educacion";
import { C0005_SobreMi } from "./C0005_SobreMi/C0005_SobreMi";
// endregion

// region component
export function G0001_MainGrid() {
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
        <C0001_Experiencia />
        <C0002_Proyectos />
        <C0003_Stack />
        <C0004_Educacion />
        <C0005_SobreMi />
      </div>
    </div>
  );
}
// endregion
