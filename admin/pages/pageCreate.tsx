import * as React from "react";
import { TextField, RichTextField, CreatePage } from "@contember/admin";
import locale from "../locales";

export const pageCreate = (
  <CreatePage
    entity="Page"
    rendererProps={{ title: locale["Create new page"] }}
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
