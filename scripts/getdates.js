const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();


const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;