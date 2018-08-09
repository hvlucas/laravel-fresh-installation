const puppeteer = require('puppeteer');

function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
    });
    //parse arguments
    var args = process.argv;
    var indexes = [2, 3, 4];
    var arg_index = {};
    arg_index[2] = 'URL';
    arg_index[3] = 'File Path';
    arg_index[4] = 'Display';
    indexes.forEach(function(index){
        if(typeof args[index] == 'undefined'){
            var parameter = arg_index[index];
            console.log('Missing Parameter: ' + parameter);
            process.exit(1);
        }
    });
    var url = args[2];
    var file_path = args[3];
    var display = args[4];
    var window_width = 1920;
    var window_height = 1080;
    if(display == 'mobile'){
        var window_width = 375;
        var window_height = 667;
    }

    const page = await browser.newPage();
    await page.setViewport({width: window_width, height: window_height});
    await page.goto(url, {waitUntil: 'networkidle0'});
    await page.waitFor(1500);
    await page.screenshot({path: file_path, type: 'png', fullPage: true});

    await browser.close();
})();
