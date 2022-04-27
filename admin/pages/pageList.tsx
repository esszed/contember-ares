import * as React from "react";
import {
  DataGridPage,
  TextCell,
  GenericCell,
  DeleteEntityButton,
  Link,
} from "@contember/admin";
import locale from "../locales";

export const pageList = (
  <div>
    <DataGridPage entities="Page" rendererProps={{ title: locale["Pages"] }}>
      <TextCell field="title" header={locale["Title"]} />
      <GenericCell shrunk>
        <Link to="pageEdit(id: $entity.id)">{locale["Edit"]}</Link>
      </GenericCell>
      <GenericCell shrunk>
        <DeleteEntityButton immediatePersist />
      </GenericCell>
    </DataGridPage>
  </div>
);
