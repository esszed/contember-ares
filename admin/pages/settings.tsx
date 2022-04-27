import * as React from "react";
import { GenericPage, LogoutLink } from "@contember/admin";
import locale from "../locales";

export const settings = () => (
  <div>
    <GenericPage>{locale["Settings"]}</GenericPage>
    <LogoutLink>Logout - neklikat</LogoutLink>
  </div>
);
