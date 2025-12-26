//region imports
import { C0000_TarjetaInteractivaBase } from "../../../../components/Tarjetas/C0000_TarjetaInteractivaBase";
//endregion
// region types 
interface C0001_ExperienciaProps {
  activa: boolean;
  onToggle: () => void;
}
// endregion

// region types
interface C0001_ExperienciaProps {
  activa: boolean;
  onToggle: () => void;
}
// endregion

// region component
export function C0001_Experiencia(props: C0001_ExperienciaProps) {
  return (
    <C0000_TarjetaInteractivaBase
      titulo="Experiencia"
      resumen="Desarrollo de aplicaciones web en entornos reales."
      activa={props.activa}
      onToggle={props.onToggle}
    >
      <p>
        <strong>Software Developer — Wortach</strong>
      </p>

      <p>
        Desarrollo de aplicaciones web internas orientadas a la gestión
        de datos y procesos.
      </p>

      <ul className="list-disc list-inside text-neutral-400">
        <li>React · TypeScript · .NET</li>
        <li>Implementación de nuevas vistas y lógica de negocio</li>
        <li>Optimización de rendimiento en búsquedas y grids</li>
      </ul>
    </C0000_TarjetaInteractivaBase>
  );
}
// endregion