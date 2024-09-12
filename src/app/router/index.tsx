import { AddPage } from "~pages/AddPage";
import { EditPage } from "~pages/EditPage";
import { MainPage } from "~pages/MainPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { element: <MainPage />, path: "/" },
  { element: <EditPage />, path: "edit/:employeeId" },
  { element: <AddPage />, path: "add" },
]);
