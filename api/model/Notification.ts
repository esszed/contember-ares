import { SchemaDefinition as def } from '@contember/schema-definition'
import { Page } from "./Page"


export const NotificationEnum = def.createEnum("success", "info", "warning", "error");

export class Notification {
    content = def.stringColumn()
    from = def.dateColumn()
    to = def.dateTimeColumn()
    type = def.enumColumn(NotificationEnum).notNull().default("info");
    pages = def.manyHasMany(Page, "notifications")
}