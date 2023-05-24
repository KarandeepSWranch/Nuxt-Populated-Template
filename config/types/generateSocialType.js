const fs = require('fs');
const shell = require('shelljs');
const path = require('path');

// Path to your social icons from command-line arguments
const dirPath = process.argv[2] || '~/components/icon/social/';

// Output file path from command-line arguments
const outputFilePath = process.argv[3] || '~/types/socialIcons.d.ts';

// Ensure the output directory exists
shell.mkdir('-p', path.dirname(outputFilePath));

// Read the names of the files in the directory
fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    // Filter the Vue files and get the names
    const vueFiles = files.filter((file) => file.endsWith('.vue')).map((file) => file.replace('.vue', ''));

    // Create TypeScript types
    const types = `export type SocialIcon = ${vueFiles.map((file) => `'${file}'`).join(' | ')};`;

    // Write the types to a TypeScript file
    shell.ShellString(types).to(outputFilePath);
});
