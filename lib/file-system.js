
const fs = require('fs').promises;

const mkdirp = path => {
  return fs.mkdir(path, { recursive: true });
};

const writeJSON = (path, obj) => {
  return fs.writeFile(path, JSON.stringify(obj))
    .then(() => obj);
};

const readJSON = path => {
  return fs.readFile(path)
    .then(contents => JSON.parse(contents));
};

const readDirectoryJSON = path => {
  return fs.readdir(path)
    .then(files => {
      return Promise.all(files.map(file => readJSON(`${path}/${file}`)));
    });
};

const updateJSON = (path, obj) => {
  return readJSON(path)
    .then(json => {
      const updatedJSON = { ...json, ...obj };
      return writeJSON(path, updatedJSON);
    });
};

const deleteFile = path => fs.unlink(path);

module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
};








// const fs = require('fs').promises;

// // mkdirp - make a directory and all parent directories
// jest.mock('fs', () => ({
//     promises: {
//         mkdir: jest.fn(() => Promise.resolve())
//     }
// }));



// fs.mikdir('my/cool/directory' , { recursive : true} )
// .then console.log ('done')
// // writeJSON - write an object to a file

 

// // const writeJSON = (data, require) => {
// //   try {
// //       fs.writeFileSystems=(path, JSON )
// //   }  
// // };

// //test: 
// describe('file system functions', () => {
//     it('made dir and parent dir', () => {
//         return mkdirp ('./my/cool/directory/path')
//         .then(() => {
//             expect(fs.mkdir)
//             .toHaveBeenCalled('./my/cool/directory/path', {recursive: true}); 

//         }
        
        
        
//         //fs.stat('.my/cool/directory/path'))
//         //.then(start => {
//             //expect(stat.isDirectory()).toBeTruthy();

//         })
//     })
// })


// // readJSON - read an object from a file

// // readDirectoryJSON - read all files in a directory as objects

// // updateJSON - update a files JSON

// // deleteFile - delete a file

