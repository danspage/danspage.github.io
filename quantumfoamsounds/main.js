function colorMatchingLinksRed() {
    var currentPath = window.location.pathname; // Get the path of the current page

    // Select all link elements
    var links = document.querySelectorAll('a');

    // Iterate through each link
    links.forEach(function (link) {
        // Create a new URL object from the link's href attribute
        var linkUrl = new URL(link.href, window.location.href);

        // Check if the pathname of the link matches the current path
        if (linkUrl.pathname === currentPath) {
            // Change the color to red
            link.style.color = '#D84951';
        }
    });
}

// Call the function to apply the changes
colorMatchingLinksRed();



function insertNavbarSeparators() {
    var parentDiv = document.querySelector('#navbar'); // Replace '#myDiv' with your div's ID or any selector
    var children = parentDiv.children;
    var numberOfChildren = children.length;

    // Loop through all children except the last one
    for (var i = 0; i < numberOfChildren - 1; i++) {
        var separator = document.createElement('p'); // Create a new paragraph element
        separator.textContent = `\xa0|\xa0`; // Set its text content to the "|" symbol
        separator.style.margin = '0';

        // Insert the separator after the current child
        parentDiv.insertBefore(separator, children[i * 2].nextSibling);
    }
}

// Call the function
insertNavbarSeparators();

if (document.getElementById("posts") != null) getSheetsJSON();