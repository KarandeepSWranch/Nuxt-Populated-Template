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
    // Split the text into lines
    const lines = text.split('\n');

    // Categorize lines into different types of imports and non-imports
    const importLinesRegular = [];
    const importLinesModules = [];
    const importLinesTypes = [];
    const nonImportLines = [];

    lines.forEach((line) => {
        if (line.startsWith('import ')) {
            if (line.startsWith('import {')) {
                importLinesModules.push(line);
            } else if (line.startsWith('import type')) {
                importLinesTypes.push(line);
            } else {
                importLinesRegular.push(line);
            }
        } else {
            nonImportLines.push(line);
        }
    });

    // Function to sort lines based on their length
    const sortByLength = (a, b) => a.length - b.length;

    // Sort each type of import line
    const sortedRegularImports = importLinesRegular.sort(sortByLength);
    const sortedModuleImports = importLinesModules.sort(sortByLength);
    const sortedTypeImports = importLinesTypes.sort(sortByLength);

    // Combine all imports, separating types with a new line
    const sortedImports = [...sortedRegularImports, '\n', ...sortedModuleImports, '\n', ...sortedTypeImports];

    // Combine sorted imports with non-import lines and join them into a single string
    return [...sortedImports, ...nonImportLines].join('\n');
}
