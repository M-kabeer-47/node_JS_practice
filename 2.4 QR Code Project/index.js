/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer"
import image from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "URL: ",
        name: "URL"
    },
  ])
  .then((answers) => {
  const URL = answers.URL;
    var qr_svg = image.image(URL);
    qr_svg.pipe(fs.createWriteStream("image.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
