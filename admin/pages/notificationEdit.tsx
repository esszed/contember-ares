import * as React from "react";
import {
  TextField,
  EditPage,
  DateTimeField,
  SelectField,
  MultiSelectField,
} from "@contember/admin";
import locale from "../locales";

export const notificationEdit = (
  <EditPage
    entity="Notification(id = $id)"
    rendererProps={{ title: locale["Edit notification"] }}
  >
    <TextField field="content" label="Content" />
    <DateTimeField field="from" label={locale["From"]} />
    <DateTimeField field="to" label={locale["To"]} />
    <SelectField
      field="type"
      label={locale["Select notification type"]}
      options={[
        { label: "Success", value: "success" },
        { label: "Info", value: "info" },
        { label: "Warning", value: "warning" },
        { label: "Danger", value: "danger" },
      ]}
    />
    <MultiSelectField
      field="pages"
      label={locale["Select pages"]}
      options="Page.title"
    />
  </EditPage>
);
