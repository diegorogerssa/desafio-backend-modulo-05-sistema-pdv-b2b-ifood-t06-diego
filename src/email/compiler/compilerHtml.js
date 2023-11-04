const fs = require('fs/promises');
const handlebars = require('handlebars');

const compileHtml = async (file, context) => {
  const html = await fs.readFile(file);
  const compilador = handlebars.compile(html.toString());
  const htmlString = compilador(context);
  return htmlString;
};

module.exports = compileHtml;
