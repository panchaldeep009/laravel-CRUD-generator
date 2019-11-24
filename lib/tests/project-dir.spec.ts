import { CRUD } from '..';
import { mockLaravelDir } from '../utils/mock-laravel-dir';

const fakeFs = mockLaravelDir();

describe('Project Path Check', () => {
    it('valid project dir', () => {
        new CRUD(fakeFs.rootPath);
    });

    it('rejects invalid project dir', () => {
        const invalidPaths = [fakeFs.envFilePath, fakeFs.notExistFakeDir];

        invalidPaths.forEach(invalidPath => {
            try {
                new CRUD(invalidPath);
                fail('Should failed');
            } catch (error) {
                expect(error.name).toBe(Error.name);
            }
        });
    });
});
