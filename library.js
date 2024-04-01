const projects = [
    { path: './projects/collatz/index.html' },
    { path: './projects/fourier/index.html' },
    { path: './projects/gift-wrapper/index.html' },
    { path: './projects/unicorn-pi/index.html' },
    { path: './projects/terrain-gen/index.html' },
    { path: './projects/line-simpl/index.html' },
    { path: './projects/leibniz-pi/index.html' },

    // Add more projects as needed
];

const projectList = document.getElementById('project-list');

// Add each project as a new list item
projects.forEach(project => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    
    // Split the path string into an array of substrings
    const pathParts = project.path.split('/');
    // Get the last element of the array, which is the folder name
    const folderName = pathParts[pathParts.length - 2];
    
    link.textContent = folderName;
    link.href = project.path;
    listItem.appendChild(link);
    projectList.appendChild(listItem);
});