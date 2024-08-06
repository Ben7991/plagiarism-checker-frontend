import { Outlet } from "react-router-dom";

import styles from "./AuthLayout.module.css";
import AppLogo from "../../molecules/AppLogo/AppLogo";

export default function AuthLayout() {
  return (
    <main className={styles.main}>
      <section className={styles.mainContent}>
        <div className="mb-1">
          <AppLogo />
        </div>
        <Outlet />
      </section>
    </main>
  );
}