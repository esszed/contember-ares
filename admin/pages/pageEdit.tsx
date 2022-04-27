import * as React from "react";
import { TextField, RichTextField, EditPage } from "@contember/admin";
import locale from "../locales";

export const pageEdit = (
  <EditPage
    entity="Page(id = $id)"
    rendererProps={{ title: locale["Edit page"] }}
  >
    <TextField field="title" label={locale["Title"]} />
    <RichTextField field="content" label={locale["Content"]} />
  </EditPage>
);
