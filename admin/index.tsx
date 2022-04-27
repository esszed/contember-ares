import * as React from "react";
import {
  ApplicationEntrypoint,
  LoginEntrypoint,
  Pages,
  runReactApp,
} from "@contember/admin";
import { Layout } from "./components/Layout";
import "@contember/admin/style.css";

const apiBaseUrl = import.meta.env.VITE_CONTEMBER_ADMIN_API_BASE_URL as string;
const loginToken = import.meta.env.VITE_CONTEMBER_ADMIN_LOGIN_TOKEN as string;
const projectSlug = import.meta.env.VITE_CONTEMBER_ADMIN_PROJECT_NAME as string;
import { csCZ } from "@contember/admin-i18n";

// if (window.location.pathname === "/") {
  if (window.location.hash === "#login") {
  // Login page
  runReactApp(
    <LoginEntrypoint
      apiBaseUrl={apiBaseUrl}
      loginToken={loginToken}
      projects={[projectSlug]}
      formatProjectUrl={(it) => `/${it.slug}/`}
      heading="ARES admin panel login"
    />
  );
} else if (window.location.pathname.startsWith("/")) {
  runReactApp(
    <ApplicationEntrypoint
      basePath={import.meta.env.BASE_URL}
      apiBaseUrl={apiBaseUrl}
      sessionToken={import.meta.env.VITE_CONTEMBER_ADMIN_SESSION_TOKEN}
      project={projectSlug}
      stage="live"
      defaultLocale={"cs-CZ"}
      dictionaries={{
        "cs-CZ": csCZ,
      }}
      children={
        <Pages
          layout={Layout}
          children={Object.assign(
            {},
            ...Object.values(import.meta.globEager("./pages/*.tsx"))
          )}
        />
      }
    />
  );
} else {
  // Page not found - redirect to login
  window.location.href = "/";
}
