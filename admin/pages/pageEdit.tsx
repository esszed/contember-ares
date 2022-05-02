import * as React from "react";
import {
  TextField,
  RichTextField,
  EditPage,
  DateTimeField,
} from "@contember/admin";
import locale from "../locales";

export const pageEdit = (
  <EditPage
    entity="Page(id = $id)"
    rendererProps={{
      title: locale["Edit page"],
      side: (
        <>
          <DateTimeField
            field="createdAt"
            label={locale["Created"]}
            defaultValue={new Date().toISOString()}
            disabled={true}
            readOnly={true}
          />
          <DateTimeField
            field="updatedAt"
            label={locale["Last update"]}
            defaultValue={new Date().toISOString()}
            value={new Date().toISOString()}
          />
        </>
      ),
    }}
  >
    <TextField field="title" label={locale["Title"]} />
    <RichTextField field="content" label={locale["Content"]} />
  </EditPage>
);
