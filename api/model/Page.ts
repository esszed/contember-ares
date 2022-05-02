import { SchemaDefinition as def } from '@contember/schema-definition'
import { Notification } from './Notification'
export class Page {
    name = def.stringColumn()
    title = def.stringColumn()
    content = def.stringColumn()
    notifications = def.manyHasManyInverse(Notification, "pages")
    createdAt = def.dateTimeColumn()
    updatedAt = def.dateTimeColumn()
}