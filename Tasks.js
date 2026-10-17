const tasks = ["Color Grading", "Audio Mixing", "Adding Subtitles"];
const videos = ["YouTube Video", "Gaming Montage", "Instagram Reel"];
const status = ["In Progress", "Pending", "Completed"];
const showTasks = () => {
    
    tasks.forEach((task, index) => {
        console.log(
            `${index} - Task: ${task} - Video: ${videos[index]} - Status: ${status[index]}`
        );
    });
};
const addTask = () => {
    let newTask = prompt("Enter new editing task");
    let newVideo = prompt("Enter video type");
    let newStatus = prompt("Enter task status");

    tasks.push(newTask);
    videos.push(newVideo);
    status.push(newStatus);

    showTasks();
};
const removeTask = () => {
    let taskIndex = +prompt("Enter task index you want to remove");

    tasks.splice(taskIndex, 1);
    videos.splice(taskIndex, 1);
    status.splice(taskIndex, 1);

    showTasks();
};
const updateTask = () => {
    let taskIndex = +prompt("Enter task index you want to update");
    let newTask = prompt("Enter new task name");

    tasks.splice(taskIndex, 1, newTask);

    showTasks();
};
const updateVideo = () => {
    let taskIndex = +prompt("Enter task index you want to update");
    let newVideo = prompt("Enter new video type");

    videos.splice(taskIndex, 1, newVideo);

    showTasks();
};
const updateStatus = () => {
    let taskIndex = +prompt("Enter task index you want to update");
    let newStatus = prompt("Enter new status");

    status.splice(taskIndex, 1, newStatus);

    showTasks();
};
