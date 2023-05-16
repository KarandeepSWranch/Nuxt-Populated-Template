const { parsers } = require('prettier/parser-typescript');

module.exports = {
    parsers: {
        typescript: {
            ...parsers.typescript,
            preprocess(text) {
                return sortImports(text);
            }
        }
    }
};

function sortImports(text) {
    const lines = text.split('\n');

    const importLines = lines.filter((line) => line.startsWith('import') && !line.startsWith('import {') && !line.startsWith('import type'));
    const importModules = lines.filter((line) => line.startsWith('import {'));
    const importTypes = lines.filter((line) => line.startsWith('import type'));

    const nonImportLines = lines.filter((line) => !line.startsWith('import'));

    const sortedImportLines = importLines.sort((a, b) => a.length - b.length);
    const sortedImportModules = importModules.sort((a, b) => a.length - b.length);
    const sortedImportTypes = importTypes.sort((a, b) => a.length - b.length);

    const sortedImports = [...sortedImportLines, '\n', ...sortedImportModules, '\n', ...sortedImportTypes];

    return [...sortedImports, ...nonImportLines].join('\n');
}
