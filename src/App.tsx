import { DashboardLayout } from './components/layout/DashboardLayout';
import { DashboardPage } from './features/dashboard/DashboardPage';

export default function App() {
  return (
    <DashboardLayout>
      <DashboardPage />
    </DashboardLayout>
  );
}