const Handlebars = require("handlebars");
const fs = require("fs");


const path = "/home/brent/src/handlebars-learn/";
const data_file = path + "data-1.json"
// https://melvingeorge.me/blog/get-all-the-contents-from-file-as-string-nodejs
const data_buffer = fs.readFileSync(data_file);
const data_fileContent = data_buffer.toString();
console.log(data_fileContent);
const json =JSON.parse(data_fileContent);

const template_file = path + "template-1.hnd"

const template_buffer = fs.readFileSync(template_file);
const template_fileContent = template_buffer.toString();
console.log(template_fileContent);

const template = Handlebars.compile(template_fileContent);
const rendered =template(json);
// const template = Handlebars.compile(template_fileContent);
// const rendered =template(data_fileContent);
console.log(rendered);
// https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/

const dest_file = path + "index-1.html"
fs.writeFile(dest_file, rendered, function (err,data) {
  if (err) {
    return console.log(err);
  }
  // console.log(data);
});

// https://code.visualstudio.com/docs/nodejs/nodejs-debugging