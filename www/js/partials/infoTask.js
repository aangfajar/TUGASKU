export function showInfoTask(){
    const buttonAddTask = $('#button-addTask');
    const addTaskContainer = $('#addTask');
    const fadeContainer = document.querySelector('.fade-container');

    buttonAddTask.on('click', function (e) {
        e.stopPropagation(); // Mencegah event bubbling
        addTaskContainer.toggle('open'); // Tampilkan atau sembunyikan dropdown
        fadeContainer.style.display = 'block';
    });

    $(document).on('click', function (e) {
        if (fadeContainer.contains(e.target)) {
            addTaskContainer.hide();
            fadeContainer.style.display = 'none';
        }
    });
}
