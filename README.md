# Ebay Interview Test - Gumtree Australia Front-end 

## To do
Implement the content box widget in the screenshot. URL is [here](http://gumtreefrontendtest.azurewebsites.net/dist)

###Requirements:
- Use React Framework  
    Code generated using yeoman with generator [generator-react-sass-es2015](https://www.npmjs.com/package/generator-react-sass-es2015). As this is only a simple context box, I did not bring in flux/redux for the application state checking.
- Do not use any open source plugin to achieve this  
    At the very beginning I thought of using materialize CSS framework as the widget is exactly an collapsible control. Under this requirement I went back to write plain css (in SASS of course) and wrote my own React components.
- The content must come from .json file  
    This is a little bit tricky. There is an encoding error in the content.json. Without the right to touch anything on the .json file, I sanitize the \u0096 character using string replace for quick fix. Looking forward to any library that could fix the [list](http://konfiguracja.c0.pl/webpl/index_en.html) though.
- Must be functional; the Previous and Next buttons must be clickable and update the content, the content box must be collapsible/expandable
    For the prev/next buttons, it is implemented as the user can always use the prev/next buttons. Once the start/end of contents is reached, the prev/next button will loop back to the end/start of contents array. Please let me know if I need to stop the user from browsing though the list. The content box is expanable/collapsible, but if the content box is collapsed, prev/next buttons are removed from screen.
- Must be responsive  
    For this I only demostrated on the ipad-mini content. You may notice the paragraph next to the thumbnail wrap below it when the screen size is below 400px.
- Error handling  
    I wonder what kind of error is expected...
- Add as many comments as possible to explain your code  
    Done.

###Bonus points:
- Server side rendering  
    The development environment was prepared by yeoman. I have gulp-connect as web server at development. Then it is clear that all scripts delivered to the browser is already compiled.  
    With the help of es6, it is easy to import the .json contents and bundle with other js files. No extra HTTP request is issued to fetch the json object.  
    To deliver a sample page to you, I make use of a free Azure WebSite service and used git to push the complied web files to Azure.  
    Hope that you don't need me to push the contents to a Database which save me the cost of finding a public accessible database.
- Use of SASS where appropriate  
    As requested. The generated gulpfile.js manifest file recognise the SCSS syntax as default though. It shouldn't be an issue.
- Any optimisation to reduce load time  
    The thumbnail image was resized to fit the rendered image size. JS/CSS files were minified with the help of gulp plugins.
- Search engines friendly  
    Added META tag in the HEAD tag for content keywords. I don't have much experience for the search engine optimisation now as they keep changing the evaluation algorithms.
- UEX optimisation  
    I bind the collapsible event handler to the whole panel title so user don't have to click that small triangle on screen. I am happy with the design for now. 