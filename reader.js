/*
const fs = require('fs'); 
const path = require('path'); 
// Function to get current filenames 
// in directory with specific extension 
const folder = "C:\\Users\\acer\\Desktop\\231\\363\HTML Class Exercise\\back-end\\folder1";
let directory = "folder1";
let dirBuf = Buffer.from(directory);
fs.readdir(dirBuf, (err, files) => { 
  if (err) 
    console.log(err); 
  else { 
    console.log(files);
    
    console.log("\Filenames with the .txt extension:"); 
    files.forEach(file => { 
      if (path.extname(file) == ".txt") {
        console.log(file); 
        var fss = require("fs-extra");
        fss.copy('folder1', 'folder2', function (err) {
            if (err) return console.error(err)
            console.log('success!')
          });
      }
        
    }) 
    
} 
}) 

/*var fs = require("fs-extra");

fs.copy('/path/to/source', '/path/to/destination', function (err) {
  if (err) return console.error(err)
  console.log('success!')
});*/

/**/

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);

async function copyFilesWithExtensions(sourceDir, targetDir, extensions) {
  try {
    // Read the contents of the source directory
    const files = await readdir(sourceDir);

    // Ensure the target directory exists
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Filter for files with specific extensions and copy them to the target directory
    for (const file of files) {
      const sourceFilePath = path.join(sourceDir, file);
      const ext = path.extname(file).toLowerCase();

      if (extensions.includes(ext)) {
        const targetFilePath = path.join(targetDir, file);
        await copyFile(sourceFilePath, targetFilePath);
        console.log(`Copied ${file} to ${targetDir}`);
      }
    }

    console.log('Copy operation completed successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}

if (process.argv.length !== 4) {
  console.error('Usage: node copyFiles.js <sourceDirectory> <targetDirectory>');
} else {
  const sourceDir = process.argv[2];
  const targetDir = process.argv[3];
  const extensions = ['.txt', '.jpg']; // extensions to filter for

  copyFilesWithExtensions(sourceDir, targetDir, extensions);
}





