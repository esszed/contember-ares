import * as React from "react";
import { GenericPage, LogoutLink } from "@contember/admin";
import locale from "../locales";

export const settings = () => (
  <GenericPage title={locale["Settings"]}>
    <LogoutLink>Logout - neklikat</LogoutLink>
  </GenericPage>
);
