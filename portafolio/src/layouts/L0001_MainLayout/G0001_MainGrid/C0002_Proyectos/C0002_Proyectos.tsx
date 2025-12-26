// region imports
import { C0000_TarjetaInteractivaBase } from "../../../../components/Tarjetas/C0000_TarjetaInteractivaBase";
// endregion

// region types
interface C0002_ProyectosProps {
  activa: boolean;
  onToggle: () => void;
}
// endregion

// region component
export function C0002_Proyectos(props: C0002_ProyectosProps) {
  return (
    <C0000_TarjetaInteractivaBase
      titulo="Proyectos"
      resumen="Aplicaciones desarrolladas por iniciativa propia."
      activa={props.activa}
      onToggle={props.onToggle}
    >
      <p><strong>Reservo</strong></p>
      <p>
        Aplicación de reservas para negocios con gestión automática de citas.
      </p>
      <ul className="list-disc list-inside text-neutral-400">
        <li>React · TypeScript · Firebase</li>
        <li>Roles: empresa y cliente</li>
        <li>PWA sin aprobación manual</li>
      </ul>
    </C0000_TarjetaInteractivaBase>
  );
}
// endregion
