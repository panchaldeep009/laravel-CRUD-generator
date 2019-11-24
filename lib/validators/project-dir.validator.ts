import fs from 'fs';

export const validProjectPath = (path: string) => {
    // TODO : check if project is actual Laravel
    if (!fs.lstatSync(path).isDirectory()) {
        throw new Error('Invalid Laravel Project Directory');
    }
    return path;
};
