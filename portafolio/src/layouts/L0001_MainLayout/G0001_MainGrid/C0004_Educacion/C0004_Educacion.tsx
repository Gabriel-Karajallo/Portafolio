// region imports
import { useState } from "react";
import { C0000_TarjetaInteractivaBase } from "../../../../components/Tarjetas/C0000_TarjetaInteractivaBase";
import { D0002_DialogoDetalle } from "../../../../components/Dialogos/D0002_DialogoDetalle";
import { icons } from "../../../../assets/icons/iconos";
// endregion

// region component
export function C0004_Educacion() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <C0000_TarjetaInteractivaBase
        titulo="Educación"
        resumen="Mi formación técnica y aprendizaje continuo."
        onAbrir={() => setAbierto(true)}
      />

      <D0002_DialogoDetalle
  abierto={abierto}
  titulo="Educación"
  subtitulo="Formación técnica, aprendizaje continuo e idiomas."
  onCerrar={() => setAbierto(false)}
>
  {/* Formación reglada */}
  <section className="space-y-4">
    <div className="flex items-start gap-4">
      <icons.GraduationCap size={20} className="text-blue-400 mt-1" />

      <div>
        <p className="text-base font-semibold text-neutral-100">
          Ciclo Formativo de Grado Superior
        </p>
        <p className="text-sm text-neutral-300">
          Administración de Sistemas Informáticos en Red (ASIR)
        </p>
      </div>
    </div>

    <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
      Formación orientada a sistemas, redes, servidores y bases técnicas
      sólidas, que me permitió adquirir una base robusta en entornos
      informáticos profesionales.
    </p>
  </section>

  {/* Separador */}
  <div className="my-10 h-px bg-neutral-800" />

  {/* Formación complementaria */}
  <section className="space-y-4">
    <div className="flex items-start gap-4">
      <icons.BookOpen size={20} className="text-blue-400 mt-1" />

      <div>
        <p className="text-base font-semibold text-neutral-100">
          Formación complementaria
        </p>
        <p className="text-xs text-neutral-500">
          Aprendizaje continuo
        </p>
      </div>
    </div>

    <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
      Realizo cursos de desarrollo de software en plataformas como Udemy
      y otras, centrados principalmente en frontend, backend y buenas
      prácticas de desarrollo.
    </p>
  </section>

  {/* Separador */}
  <div className="my-10 h-px bg-neutral-800" />

  {/* Idiomas */}
  <section className="space-y-4">
    <div className="flex items-start gap-4">
      <icons.globe size={20} className="text-blue-400 mt-1" />

      <div>
        <p className="text-base font-semibold text-neutral-100">
          Idiomas
        </p>
        <p className="text-xs text-neutral-500">
          En progreso
        </p>
      </div>
    </div>

    <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
      Actualmente me estoy preparando el nivel <strong>B1 de inglés</strong>,
      siguiendo la certificación de <strong>Cambridge</strong>, con el objetivo
      de mejorar mi comunicación en entornos profesionales y técnicos.
    </p>
  </section>
</D0002_DialogoDetalle>
    </>
  );
}
// endregion
