"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  // Handle redirection based on session status
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      {/* Loading animation */}
      {status === "loading" && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
        </div>
      )}

      {/* Login options */}
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          <img
            src="/google-logo.png"
            alt="Google Logo"
            className={styles.googleLogo}
          />
          Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
