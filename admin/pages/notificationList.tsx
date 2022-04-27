import * as React from "react";
import {
  DataGridPage,
  TextCell,
  GenericCell,
  DeleteEntityButton,
  Link,
} from "@contember/admin";
import locale from "../locales";

export const notificationList = (
  <DataGridPage
    entities="Notification"
    rendererProps={{ title: locale["Notifications"] }}
  >
    <TextCell field="content" header={locale["Content"]} />
    <TextCell field="type" header={locale["Notification type"]} />
    <TextCell field="from" header={locale["From"]} />
    <TextCell field="to" header={locale["To"]} />
    <GenericCell shrunk>
      <Link to="notificationEdit(id: $entity.id)">{locale["Edit"]}</Link>
    </GenericCell>
    <GenericCell shrunk>
      <DeleteEntityButton immediatePersist />
    </GenericCell>
  </DataGridPage>
);
