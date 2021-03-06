import * as React from "react";
import {
  TextField,
  CreatePage,
  DateTimeField,
  SelectField,
  MultiSelectField,
} from "@contember/admin";
import locale from "../locales";

export const notificationCreate = (
  <CreatePage
    entity="Notification"
    rendererProps={{ title: locale["Create notification"] }}
    redirectOnSuccess="notificationEdit(id: $entity.id)"
  >
    <TextField field="content" label={locale["Content"]} />
    {/* <FieldView
        field="title"
        render={(fieldAccessor) => <>{fieldAccessor.value}</>}
      /> */}
    <table>
      <td>
        <DateTimeField field="from" label={locale["From"]} />
      </td>
      <td>
        <DateTimeField field="to" label={locale["To"]} />
      </td>
    </table>
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
  </CreatePage>
);
