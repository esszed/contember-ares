import * as React from "react";
import {
  TextField,
  RichTextField,
  CreatePage,
  DateTimeField,
} from "@contember/admin";
import locale from "../locales";

export const pageCreate = (
  <CreatePage
    entity="Page"
    rendererProps={{
      title: locale["Create new page"],
      side: (
        <DateTimeField
          field="createdAt"
          label={locale["Created"]}
          defaultValue={new Date().toISOString()}
          disabled={true}
        />
      ),
    }}
    redirectOnSuccess="pageEdit(id: $entity.id)"
  >
    <TextField field="name" label={locale["Page name"]} />
    <TextField field="title" label={locale["Title"]} />
    <RichTextField field="content" label={locale["Content"]} />
    {/* <FieldView
        field="title"
        render={(fieldAccessor) => <>{fieldAccessor.value}</>}
      /> */}
  </CreatePage>
);
