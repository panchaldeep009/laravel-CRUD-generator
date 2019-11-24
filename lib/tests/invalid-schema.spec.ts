import { CRUD } from '../src';
import { ValidationError } from 'yup';

describe('Schema Initialization Check', () => {
    it('initialize validate schema', () => {
        const crud = new CRUD([{ name: 'test_test' }]);
        expect(crud.schema[0].name).toBe('TestTest');
    });

    it('rejects invalidate schema', () => {
        const invalidValues = [
            'falsy',
            [1],
            [{ name: '' }],
            [{ invalid: 'invalid' }],
        ];

        invalidValues.forEach((invalidSchemaValues: any) => {
            try {
                new CRUD(invalidSchemaValues);
                fail('Should failed');
            } catch (error) {
                expect(error.name).toBe(ValidationError.name);
            }
        });
    });
});
