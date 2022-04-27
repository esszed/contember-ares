import * as React from "react";
import { ReactNode } from "react";
import { Layout as ContemberLayout } from "@contember/admin";
import { Navigation } from "./Navigation";
import locale from "../locales";
export const Layout = (props: { children?: ReactNode }) => (
  <ContemberLayout
    scheme="light"
    theme="warn"
    // titleTheme="tertiary"
    sidebarHeader={locale["App title"]}
    navigation={<Navigation />}
    children={props.children}
  />
);
