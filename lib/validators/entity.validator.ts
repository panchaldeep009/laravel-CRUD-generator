import { Entity } from '../types/Entity';
import { pascalCase } from 'change-case';
import { object, array, string } from 'yup';

export const validSchema = (schema: Entity[]) =>
    array()
        .of(
            object<Entity>({
                name: string()
                    .trim()
                    .required()
                    .min(3)
                    .transform(val => pascalCase(val)),
            })
        )
        .validateSync(schema);
