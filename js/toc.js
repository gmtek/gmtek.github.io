/*jslint
    white: true,
    browser: true,
    vars: true
*/

function htmlTableOfContents (documentRef) {
    var documentRef = documentRef || document;
    var toc = documentRef.getElementById('toc_container');
    var headings = [].slice.call(documentRef.body.querySelectorAll('h2, h3, h4, h5, h6'));
    headings.forEach(function (heading, index) {
        heading.setAttribute('id', 'toc_' + index);
        
        var link = documentRef.createElement('a');
        link.setAttribute('href', '#toc_' + index);
        link.textContent = heading.textContent;
        
        var div = documentRef.createElement('div');
        div.setAttribute('class', heading.tagName.toLowerCase());
        
        div.appendChild(link);
        toc.appendChild(div);
    });
}

try {
     module.exports = htmlTableOfContents;
} catch (e) {
    // module.exports is not defined
}
