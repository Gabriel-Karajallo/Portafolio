// region imports
import { C0000_TarjetaInteractivaBase } from "../../../../components/Tarjetas/C0000_TarjetaInteractivaBase";
// endregion

// region types
interface C0003_StackProps {
  activa: boolean;
  onToggle: () => void;
  onClose: () => void;
}
// endregion

// region component
export function C0003_Stack(props: C0003_StackProps) {
  return (
    <C0000_TarjetaInteractivaBase
      titulo="Stack tecnológico"
      resumen="Tecnologías que utilizo en proyectos reales."
      activa={props.activa}
      onToggle={props.onToggle}
      onClose={props.onClose}
    >
      <p><strong>Frontend</strong></p>
      <p>React · TypeScript · Tailwind</p>

      <p><strong>Backend</strong></p>
      <p>.NET · Entity Framework · SQL Server</p>

      <p><strong>Otros</strong></p>
      <p>Git · Firebase · Vite</p>
    </C0000_TarjetaInteractivaBase>
  );
}
// endregion
