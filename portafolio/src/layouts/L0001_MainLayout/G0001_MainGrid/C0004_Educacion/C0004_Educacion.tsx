// region imports
import { C0000_TarjetaInteractivaBase } from "../../../../components/Tarjetas/C0000_TarjetaInteractivaBase";
// endregion

// region types
interface C0004_EducacionProps {
  activa: boolean;
  onToggle: () => void;
  onClose: () => void;
}
// endregion

// region component
export function C0004_Educacion(props: C0004_EducacionProps) {
  return (
    <C0000_TarjetaInteractivaBase
      titulo="Educación"
      resumen="Formación técnica y aprendizaje continuo."
      activa={props.activa}
      onToggle={props.onToggle}
      onClose={props.onClose}
    >
      <p><strong>Desarrollo de Aplicaciones Web</strong></p>
      <p>Formación Profesional</p>

      <ul className="list-disc list-inside text-neutral-400">
        <li>Bases de programación</li>
        <li>Desarrollo web y bases de datos</li>
        <li>Aprendizaje autodidacta continuo</li>
      </ul>
    </C0000_TarjetaInteractivaBase>
  );
}
// endregion
