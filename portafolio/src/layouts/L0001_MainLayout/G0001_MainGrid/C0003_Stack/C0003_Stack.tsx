// region imports
import { useState } from "react";
import { C0000_TarjetaInteractivaBase } from "../../../../components/Tarjetas/C0000_TarjetaInteractivaBase";
import { D0002_DialogoDetalle } from "../../../../components/Dialogos/D0002_DialogoDetalle";
// endregion

// region types
type PaginaStack = "stack" | "herramientas";
// endregion

// region component
export function C0003_Stack() {
  const [abierto, setAbierto] = useState(false);
  const [paginaActiva, setPaginaActiva] =
    useState<PaginaStack>("stack");

  return (
    <>
      <C0000_TarjetaInteractivaBase
        titulo="Stack tecnológico"
        resumen="Tecnologías y herramientas que utilizo en proyectos reales."
        onAbrir={() => {
          setPaginaActiva("stack");
          setAbierto(true);
        }}
      />

      <D0002_DialogoDetalle
        abierto={abierto}
        titulo="Stack tecnológico"
        subtitulo="Tecnologías y herramientas con las que trabajo habitualmente."
        onCerrar={() => setAbierto(false)}
      >
        <div className="flex flex-col gap-10">

          {/* ================= CONTENIDO ================= */}
          {paginaActiva === "stack" && (
            <section className="space-y-6">
              <h3 className="text-sm font-semibold text-white">
                Tecnologías principales
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  { nombre: ".NET", imagen: "/stack/net.png" },
                  { nombre: "C#", imagen: "/stack/c.png" },
                  { nombre: "React", imagen: "/stack/react.png" },
                  { nombre: "TypeScript", imagen: "/stack/ts.png" },
                  { nombre: "SQL Server", imagen: "/stack/sqlserver.png" },
                  { nombre: "Entity Framework", imagen: "/stack/efcore.png" },
                ].map((tech) => (
                  <div
                    key={tech.nombre}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={tech.imagen}
                      alt={tech.nombre}
                      className="h-30 w-30 object-contain"
                    />
                    <span className="text-xs text-gray-300 text-center">
                      {tech.nombre}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {paginaActiva === "herramientas" && (
            <section className="space-y-6">
              <h3 className="text-sm font-semibold text-white">
                Herramientas utilizadas
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {[
                  { nombre: "Git", imagen: "/tools/git.png" },
                  { nombre: "Firebase", imagen: "/tools/firebase.png" },
                  { nombre: "VS Code", imagen: "/tools/vscode.png" },
                  { nombre: "Figma", imagen: "/tools/figma.png" },
                  { nombre: "Postman", imagen: "/tools/postman.png" },
                ].map((tool) => (
                  <div
                    key={tool.nombre}
                    className="flex flex-col items-center gap-3 opacity-90"
                  >
                    <img
                      src={tool.imagen}
                      alt={tool.nombre}
                      className="h-9 w-9 object-contain"
                    />
                    <span className="text-xs text-gray-400 text-center">
                      {tool.nombre}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ================= PAGINACIÓN ================= */}
          <div className="flex justify-center gap-2 pt-4">
            <button
              onClick={() => setPaginaActiva("stack")}
              className={`h-2 w-2 rounded-full transition
                ${
                  paginaActiva === "stack"
                    ? "bg-white"
                    : "bg-white/30"
                }`}
            />

            <button
              onClick={() => setPaginaActiva("herramientas")}
              className={`h-2 w-2 rounded-full transition
                ${
                  paginaActiva === "herramientas"
                    ? "bg-white"
                    : "bg-white/30"
                }`}
            />
          </div>
        </div>
      </D0002_DialogoDetalle>
    </>
  );
}
// endregion
