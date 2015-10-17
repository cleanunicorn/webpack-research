require("../css/normalize.css");
require("../css/main.css");

var img = document.createElement('img');
img.src = require('../img/webpack-hot1.png');
img.width = 200;
document.getElementById('content').appendChild(img);
//document.write('<img src="' + img + '" style="width: 200px;">');

document.write(require('./content.js'));
