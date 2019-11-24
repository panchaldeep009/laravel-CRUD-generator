import { Entity } from '../types/Entity';
import { validSchema } from '../validators/entity.validator';
import { validProjectPath } from '../validators/project-dir.validator';

export class CRUD {
    public schema: Entity[] = [];
    private projectDir?: string;

    constructor(laravelProjectDir: string) {
        this.projectDir = validProjectPath(laravelProjectDir);
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
