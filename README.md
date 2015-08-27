FSU Technole's homepage
===============================
Live: 

## Structure
- `public/` - Static resources
    +   `bower_components/` -  installed bower dependencies
    +   `css/` - compiled written sass (bult with gulp)
    +   `fonts/` - extra fonts/symbols
    +   `js/` - compiled coffeescript (built with gulp)
    +   `img/` - image dependencies
    +   
- `src/` - Source files, built into public/ with gulp
    +   `coffee/` - coffeescript source
    +   `jade/` - jade source. Files with underscore prefix are templates
    +   `sass/` -  sass source

## Deployment
1. `git clone <repo>`
2. an `.htaccess` file may be required to make public/ the DocumentRoot
3. copy artwork images into `public/artwork`

## Building
1. an `.htaccess` file may be required to make public/ the DocumentRoot
2. `npm install`
3. `npm install gulp -g`
3. `bower install`
4. `gulp`
5. copy artwork images into `public/artwork`

# Contributors
Logan Isitt
Matt O'Hagan
Jared Bennett
??