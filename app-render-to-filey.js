const Handlebars = require("handlebars");
const fs = require("fs");
const path = "/home/brent/src/handlebars-learn/";
const file = path + "index.tmp"
// https://melvingeorge.me/blog/get-all-the-contents-from-file-as-string-nodejs
const buffer = fs.readFileSync(file);
const fileContent = buffer.toString();
console.log(fileContent);

const template = Handlebars.compile(fileContent);
const rendered =template({ title: "The Title", body: "the body"});
console.log(rendered);
// https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/

const dest_file = path + "index.html"
fs.writeFile(dest_file, rendered, function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

// const string1 = '<div class="entry"> \
//     <h1>{{title}}</h1> \
//     <div class="body"> \
//       {{body}} \
//     </div> \
//   </div>' 

// const string2 = "This is a very long string which needs " +
// "to wrap across multiple lines because " +
// "otherwise my code is unreadable."
// const template = Handlebars.compile(string1);
// console.log(template({ title: "The Title", body: "the body"}));

// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));
// https://code.visualstudio.com/docs/nodejs/nodejs-debugging