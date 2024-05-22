import { useContext } from "react";
import { SidebarToggleContext } from "../context/SidebarToggleContext";

export default function useSidebarToggle() {
  const context = useContext(SidebarToggleContext);
  if (context === undefined) {
    throw new Error(
      "useSidebarToggle must be used within  SidebarToggleProvider",
    );
  }
  return context;
}
