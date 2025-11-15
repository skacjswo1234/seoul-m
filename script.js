// 햄버거 메뉴 토글
const menuToggle = document.querySelector('.menu-toggle');
const sidebarMenu = document.querySelector('.sidebar-menu');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const sidebarClose = document.querySelector('.sidebar-close');

function openSidebar() {
    sidebarMenu.classList.add('active');
    sidebarOverlay.classList.add('active');
    menuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// 사이드바 메뉴 링크 클릭 시 닫기
const sidebarLinks = document.querySelectorAll('.sidebar-nav-menu a, .sidebar-buttons a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

