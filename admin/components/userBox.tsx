import * as React from "react";
import { useIdentity, UserMiniControl } from "@contember/admin";

export const UserBox: React.FunctionComponent = () => {
  const { email } = useIdentity();

  return <UserMiniControl name={email} note="Přihlášený uživatel" />;
};
