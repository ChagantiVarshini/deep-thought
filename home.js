// Open the sidebar when the open arrow is clicked
document.getElementById('openSidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const openButton = document.getElementById('openSidebar');
    
    sidebar.classList.remove('sidebar-closed');
    sidebar.classList.add('sidebar-open');
    
    // Hide the open arrow when sidebar is open
    openButton.style.display = 'none';
});

// Close the sidebar when the close arrow inside the sidebar is clicked
document.getElementById('closeSidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const openButton = document.getElementById('openSidebar');
    
    sidebar.classList.remove('sidebar-open');
    sidebar.classList.add('sidebar-closed');
    
    // Show the open arrow when sidebar is closed
    openButton.style.display = 'flex';
});
function closeNoticeBoard() {
    const noticeBoard = document.querySelector('.notice-board');
    noticeBoard.style.display = 'none'; // Hides the notice board
}

document.querySelectorAll('.expandable').forEach(item => {
    item.addEventListener('click', function() {
        this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    });
});
document.querySelector('.dropdown-btn').addEventListener('click', function() {
    var content = this.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

