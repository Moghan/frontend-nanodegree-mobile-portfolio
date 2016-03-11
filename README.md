# frontend-nanodegree-mobile-portfolio

This is project 4 in my Front-End Developer Nanodegree program.

The challange:
_Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884)._

The project repo is available at https://github.com/Moghan/frontend-nanodegree-mobile-portfolio.git

Have a look at the mobile-portfolio sight at http://riots.se/mobile-portfolio/ 

## Getting started
Publish the files in the 'dist' folder on your website,

or run on a local server using Python and ngrok.

```bash
  $> cd /path/to/your-project-folder
  $> cd dist
  $> python -m http.server 8080
  ```

``` bash
  $> cd /path/to/your-project-folder
  $> cd dist
  $> ngrok http 8080
  ```

## Build the project

In your project folder:

Install the npm-modules listed as devDependencies in the package.json file. At the moment they are the following.
* gulp
* gulp-cleancss
* gulp-gm
* gulp-htmlmin
* gulp-jshint
* gulp-uglify
* gulp-util
* jshint

e.g.
```
$> cd /path/to/your-project-folder
$> npm install gulp-uglify --save-dev
```
Start the build with
```
$> cd /path/to/your-project-folder
$> gulp
```
## Details
Evalution and Submission for the project.
https://www.udacity.com/course/viewer#!/c-nd001/l-2735848561/m-2686388535

## License
MIT

## Updates
### 2016-03-11
* Enable 'hardware-accelerated CCS' on class 'mover'.
