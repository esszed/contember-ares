import { SchemaDefinition as def } from '@contember/schema-definition'

export class Page {
    title = def.stringColumn()
    content = def.stringColumn()
}