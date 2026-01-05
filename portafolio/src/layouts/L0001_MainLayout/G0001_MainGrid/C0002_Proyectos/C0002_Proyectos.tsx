// region imports
import { useState } from "react";
import { C0000_TarjetaInteractivaBase } from "../../../../components/Tarjetas/C0000_TarjetaInteractivaBase";
import { D0002_DialogoDetalle } from "../../../../components/Dialogos/D0002_DialogoDetalle";
import { icons } from "../../../../assets/icons/iconos";

// endregion

// region types
interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  demoUrl: string;
  githubUrl: string;
  imagenes: string[];
}
// endregion

// region data
const proyectos: Proyecto[] = [
  {
    titulo: "Reservo",
    descripcion:
      "Reservo es una aplicación web tipo PWA diseñada para que reservar una cita sea rápido, claro y sin fricción, tanto para clientes como para negocios.",
    tecnologias: ["React", "TypeScript", "Tailwind", "LucideIcons", "Firebase"],
    demoUrl: "https://demo-reservo.com",
    githubUrl: "https://github.com/Gabriel-Karajallo/reservo",
    imagenes: ["./public/proyectos/reservo1.png", "./public/proyectos/reservo2.png", "./public/proyectos/reservo3.png"],
  },
  {
    titulo: "TodoApp",
    descripcion:
      "Aplicación de lista de tareas que permite a los usuarios crear, editar y eliminar tareas, con funcionalidades de categorización y recordatorios.",
    tecnologias: ["React", "Tailwind", "Typescript"],
    demoUrl: "https://gabi.dev",
    githubUrl: "https://github.com/Gabriel-Karajallo/To-Do-App",
    imagenes: ["./public/proyectos/todoapp1.png", "./public/proyectos/todoapp2.png"],
  },
];


// endregion

// region component
export function C0002_Proyectos() {
  const [dialogoAbierto, setDialogoAbierto] = useState(false);
  const [indiceProyecto, setIndiceProyecto] = useState(0);
  const [galeriaAbierta, setGaleriaAbierta] = useState(false);
  const [indiceImagen, setIndiceImagen] = useState(0);

  const proyectoActual = proyectos[indiceProyecto];

  return (
    <>
      <C0000_TarjetaInteractivaBase
        titulo="Proyectos"
        resumen="Algunos de los proyectos más relevantes que he desarrollado."
        onAbrir={() => setDialogoAbierto(true)}
      />

      <D0002_DialogoDetalle
        abierto={dialogoAbierto}
        titulo="Proyectos destacados"
        subtitulo="Aplicaciones desarrolladas por iniciativa propia y profesional."
        onCerrar={() => setDialogoAbierto(false)}
      >
        <div className="flex flex-col gap-6">
          {/* Título */}
          <h3 className="text-xl font-semibold text-neutral-100">
            {proyectoActual.titulo}
          </h3>

          {/* Descripción */}
          <p className="text-sm text-neutral-400">
            {proyectoActual.descripcion}
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2">
            {proyectoActual.tecnologias.map((tecnologia) => (
              <span
                key={tecnologia}
                className="
                  px-3
                  py-1
                  text-xs
                  rounded-full
                  bg-neutral-800
                  text-neutral-300
                "
              >
                {tecnologia}
              </span>
            ))}
          </div>

          {/* Acciones */}
          <div className="flex gap-3">
            <a
              href={proyectoActual.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
      flex
      items-center
      justify-center
      w-10
      h-10
      rounded-full
      bg-neutral-800
      text-neutral-200
      hover:bg-neutral-700
      hover:scale-105
      transition
    "
              aria-label="Ver proyecto"
            >
              <icons.externalLink size={18} />
            </a>

            <a
              href={proyectoActual.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
      flex
      items-center
      justify-center
      w-10
      h-10
      rounded-full
      bg-neutral-800
      text-neutral-200
      hover:bg-neutral-700
      hover:scale-105
      transition
    "
              aria-label="Ver código en GitHub"
            >
              <icons.github size={18} />
            </a>
          </div>

          {/* Galería */}
          <div className="flex gap-4">
            {proyectoActual.imagenes.map((imagen, index) => (
              <button
                key={imagen}
                onClick={() => {
                  setIndiceImagen(index);
                  setGaleriaAbierta(true);
                }}
                className="focus:outline-none"
              >
                <img
                  src={imagen}
                  alt={`Imagen del proyecto ${proyectoActual.titulo}`}
                  className="
          w-30
          h-30
          object-cover
          rounded-md
          border
          border-neutral-800
          hover:scale-105
          transition
        "
                />
              </button>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 pt-4">
            {proyectos.map((_, index) => (
              <button
                key={index}
                onClick={() => setIndiceProyecto(index)}
                className={`
                  w-2
                  h-2
                  rounded-full
                  transition-colors
                  ${index === indiceProyecto
                    ? "bg-neutral-100"
                    : "bg-neutral-600 hover:bg-neutral-400"}
                `}
              />
            ))}
          </div>
        </div>
      </D0002_DialogoDetalle>
      {galeriaAbierta && (
        <div
          className="
      fixed
      inset-0
      z-50
      bg-black/80
      flex
      items-center
      justify-center
    "
          onClick={() => setGaleriaAbierta(false)}
        >
          <div
            className="relative max-w-4xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen */}
            <img
              src={proyectoActual.imagenes[indiceImagen]}
              alt="Imagen ampliada del proyecto"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Botón cerrar */}
            <button
              onClick={() => setGaleriaAbierta(false)}
              className="
          absolute
          top-4
          right-4
          text-neutral-300
          hover:text-white
        "
            >
              ✕
            </button>

            {/* Navegación */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={() =>
                  setIndiceImagen((prev) =>
                    prev === 0
                      ? proyectoActual.imagenes.length - 1
                      : prev - 1
                  )
                }
                className="px-4 text-3xl text-neutral-300 hover:text-white"
              >
                ‹
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={() =>
                  setIndiceImagen((prev) =>
                    prev === proyectoActual.imagenes.length - 1
                      ? 0
                      : prev + 1
                  )
                }
                className="px-4 text-3xl text-neutral-300 hover:text-white"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// endregion
