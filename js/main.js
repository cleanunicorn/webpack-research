require("../css/normalize.css");
require("../css/main.css");

var img = require("../img/webpack-hot1.png");
document.write('<img src="' + img + '" style="width: 200px;">');

document.write(require('./content.js'));
