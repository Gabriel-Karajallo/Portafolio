// region imports
import { L0001_MainLayout } from "./layouts/L0001_MainLayout/L0001_MainLayout";
import { S0001_Sidebar } from "./layouts/L0001_MainLayout/S0001_Sidebar";
import { G0001_MainGrid } from "./layouts/L0001_MainLayout/G0001_MainGrid/G0001_MainGrid";
// endregion

export default function App() {
  return (
    <L0001_MainLayout>
      <S0001_Sidebar />
      <G0001_MainGrid />
    </L0001_MainLayout>
  );
}
