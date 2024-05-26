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
import CreateRoutine from "./ui/CreateRoutine";
import WeeklyBenefits from "./ui/WeeklyBenefits";
import ProductDetails from "./ui/ProductDetails";
import ReminderChannel from "./ui/ReminderChannel";
import AssignCaregiver from "./ui/AssignCaregiver";

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
      {
        path: "/routine/create",
        element: <CreateRoutine />,
      },
      {
        path: "/routine/create/weekly-benefits",
        element: <WeeklyBenefits />,
      },
      {
        path: "/routine/create/add-reminder/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/routine/create/add-reminder-channels",
        element: <ReminderChannel />,
      },
      {
        path: "/routine/create/assign-caregiver",
        element: <AssignCaregiver />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
