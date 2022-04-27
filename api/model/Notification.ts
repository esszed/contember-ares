import { SchemaDefinition as def } from '@contember/schema-definition'

export const NotificationEnum = def.createEnum("success", "info", "warning", "error");
import { Page } from "./Page"
export class Notification {
    content = def.stringColumn()
    from = def.dateColumn()
    to = def.dateTimeColumn()
    type = def.enumColumn(NotificationEnum).notNull().default("info");
    pages = def.manyHasMany(Page, "notifications")
}