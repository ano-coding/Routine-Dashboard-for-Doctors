import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import RoutineDashboard from "./pages/RoutineDashboard";
import Error from "./ui/Error";
import AddRoutine from "./ui/AddRoutine";
import PatientProfile from "./ui/PatientProfile";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Navigate replace to="/routine" />,
      },
      {
        path: "/patient/:id",
        element: <PatientProfile />,
      },
      {
        path: "/routine",
        element: <RoutineDashboard />,
      },
      {
        path: "/routine/add",
        element: <AddRoutine />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
