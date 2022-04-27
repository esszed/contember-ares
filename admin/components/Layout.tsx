import * as React from "react";
import { ReactNode } from "react";
import { Layout as ContemberLayout, Link } from "@contember/admin";
import { Navigation } from "./Navigation";
import locale from "../locales";
export const Layout = (props: { children?: ReactNode }) => (
  <ContemberLayout
    scheme="light"
    theme="positive"
    // titleTheme="tertiary"
    sidebarHeader={
      <span style={{ fontSize: 24 }}>
        <Link to="index">{locale["App title"]}</Link>
      </span>
    }
    navigation={<Navigation />}
    children={props.children}
  />
);
