import { Entity } from '../types/Entity';
import { validSchema } from '../validators/entity.validator';

// type Entity = {
//     name: string;
//     method?: 'all' | ('GET' | 'POST' | 'PUT/PATCH' | 'DELETE')[];
// };
// type Schema = Entity[];

export class CRUD {
    public schema: Entity[] = [];

    constructor(schema?: Entity[]) {
        schema && this.setSchema(schema);
    }

    /**
     * change Schema
     */
    public setSchema = (schema: Entity[]) => {
        this.schema = validSchema(schema);
    };

    /**
     * generate
     */
    public generate() {
        return this.schema;
    }
}
