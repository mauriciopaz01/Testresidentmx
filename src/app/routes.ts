import { createBrowserRouter } from 'react-router';
import LoginPage from './pages/LoginPage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminFinanzas from './pages/admin/AdminFinanzas';
import AdminUsuarios from './pages/admin/AdminUsuarios';
import AdminAreasComunes from './pages/admin/AdminAreasComunes';
import AdminComunicados from './pages/admin/AdminComunicados';
import AdminProveedores from './pages/admin/AdminProveedores';
import AdminChat from './pages/admin/AdminChat';
import AdminResidencias from './pages/admin/AdminResidencias';
import ResidentLayout from './pages/resident/ResidentLayout';
import ResidentInicio from './pages/resident/ResidentInicio';
import ResidentCuotas from './pages/resident/ResidentCuotas';
import ResidentReservaciones from './pages/resident/ResidentReservaciones';
import ResidentComunicados from './pages/resident/ResidentComunicados';
import GuardPage from './pages/guard/GuardPage';

export const router = createBrowserRouter([
  { path: '/', Component: LoginPage },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: 'finanzas', Component: AdminFinanzas },
      { path: 'usuarios', Component: AdminUsuarios },
      { path: 'residencias', Component: AdminResidencias },
      { path: 'areas-comunes', Component: AdminAreasComunes },
      { path: 'proveedores', Component: AdminProveedores },
      { path: 'chat', Component: AdminChat },
      { path: 'comunicados', Component: AdminComunicados },
    ],
  },
  {
    path: '/resident',
    Component: ResidentLayout,
    children: [
      { index: true, Component: ResidentInicio },
      { path: 'cuotas', Component: ResidentCuotas },
      { path: 'reservaciones', Component: ResidentReservaciones },
      { path: 'comunicados', Component: ResidentComunicados },
    ],
  },
  { path: '/guard', Component: GuardPage },
]);
