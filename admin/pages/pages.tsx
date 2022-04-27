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
  AnchorButton,
  PersistButton,
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

export const pageCreate = (
  <CreatePage
    entity="Page"
    rendererProps={{ title: "Create Page" }}
    redirectOnSuccess="pageEdit(id: $entity.id)"
  >
    <TextField field="title" label={locale["Title"]} />
    <RichTextField field="content" label={locale["Content"]} />
    {/* <FieldView
      field="title"
      render={(fieldAccessor) => <>{fieldAccessor.value}</>}
    /> */}
  </CreatePage>
);

export const pageEdit = (
  <EditPage entity="Page(id = $id)" rendererProps={{ title: "Edit Page" }}>
    <TextField field="title" label={locale["Title"]} />
    <RichTextField field="content" label={locale["Content"]} />
  </EditPage>
);
