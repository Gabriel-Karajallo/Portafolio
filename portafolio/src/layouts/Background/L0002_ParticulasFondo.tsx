// region imports
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
// endregion

// region component
export function L0002_ParticulasFondo() {
  const inicializar = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={inicializar}
      className="absolute inset-0 z-0"
      options={{
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 4,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
// endregion
