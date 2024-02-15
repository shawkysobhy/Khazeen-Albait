function handleNavClick(event) {
	document.querySelectorAll('.sidebar-item a').forEach(function (link) {
		link.classList.remove('active');
	});

	event.target.closest('a').classList.add('active');
}
document.querySelectorAll('.sidebar-item a').forEach(function (link) {
	link.addEventListener('click', handleNavClick);
});
