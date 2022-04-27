import * as React from "react";
import {
  DataGridPage,
  TextCell,
  TextField,
  RichTextField,
  CreatePage,
  EditPage,
  GenericCell,
  DeleteEntityButton,
  Link,
  EntitySubTree,
  DataBindingProvider,
  Repeater,
  FieldView,
  DateTimeField,
  SelectField,
  MultiSelectField,
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
  </CreatePage>
);

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
