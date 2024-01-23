document.addEventListener('DOMContentLoaded', function () {
    const folderToggles = document.querySelectorAll('.folder-toggle');

    folderToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const fileList = this.parentElement.querySelector('.file-list');
            const filePath = this.parentElement.getAttribute('data-path');
            const lines = this.parentElement.querySelectorAll('.line');

            if (fileList) {
                fileList.classList.toggle('show');

                const folderIcon = this.querySelector('img');

                if (folderIcon) {
                    folderIcon.src = fileList.classList.contains('show') ? 'opened_folder.svg' : 'opened_folder.svg';
                    folderIcon.alt = fileList.classList.contains('show') ? 'Opened Folder Icon' : 'Closed Folder Icon';
                }
                // this.textContent = fileList.classList.contains('show') ? '🔽' : '▶';

                // Simulate command line output
                const indentation = getIndentation(filePath);
                console.log(indentation + filePath);

                // Update lines
                lines.forEach(line => {
                    line.classList.toggle('show', fileList.classList.contains('show'));
                });

                // Display lines for files
                const fileLines = fileList.querySelectorAll('.line-file');
                fileLines.forEach(fileLine => {
                    fileLine.classList.toggle('show', fileList.classList.contains('show'));
                });
            }
        });
    });

    function getIndentation(path) {
        const parts = path.split('/');
        return '    '.repeat(parts.length - 1);
    }
});
