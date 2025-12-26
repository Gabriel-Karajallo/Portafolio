// region imports
import type { ReactNode } from "react";
// endregion

// region types
interface L0001_MainLayoutProps {
  children: ReactNode;
}
// endregion

// region component
export function L0001_MainLayout(props: L0001_MainLayoutProps) {
  return (
    <div className="
  w-screen
  h-screen
  bg-neutral-900
  flex
  items-center
  justify-center
  overflow-hidden
  md:overflow-hidden
">
      
      <div className="
  w-full
  h-full
  md:max-w-7xl
  md:h-[85%]
  flex
  flex-col
  md:flex-row
  border
  border-neutral-800
  rounded-none
  md:rounded-2xl
  p-4
  md:p-6
  gap-6
  overflow-y-auto
  md:overflow-hidden
">
        {props.children}
      </div>

    </div>
  );
}
// endregion