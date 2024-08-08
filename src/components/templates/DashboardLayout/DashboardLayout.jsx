import { useContext } from "react";

// context
import { StoreContext } from "../../../store/context/store.context";

export default function DashboardLayout() {
  const { auth } = useContext(StoreContext);
  console.log(auth.user);

  return (
    <h1>DashboardLayout</h1>
  );
}