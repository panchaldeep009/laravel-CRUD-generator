import { join } from 'path';
import mock = require('mock-fs');

export const mockLaravelDir = () => {
    const rootPath = '/path/to/fake/laravel/dir';

    // TODO : expand more file system
    const fakeFs = {
        rootPath,
        notExistFakeDir: '/path/to/not/exist/dir',
        rootFiles: { '.env': 'some_content' },
        envFilePath: join(rootPath, '.env'),
    };

    mock({
        [rootPath]: {
            ...fakeFs.rootFiles,
        },
    });

    return fakeFs;
};
