export function getTasks(tasks, filters = {}) {
    let filteredTasks = [...tasks];

<<<<<<< HEAD
    // Status filter
    if (filters.status && filters.status !== "All") {
        filteredTasks = filteredTasks.filter(task =>
            task.status === filters.status
        );
    }
=======
   if (filters.priority) {
    filteredTasks = filteredTasks.filter(
        task =>
            task.priority?.toLowerCase() ===
            filters.priority.toLowerCase()
    );
}

    // TODO: Apply filters here based on the filters object
    // Developers will add priority, search, status, and assignee filters here.
>>>>>>> 366a985f5e1b4cb2c052445b0ab5644ee3ca5ee2

    return filteredTasks.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
}

export function createTask(taskData, existingTasks) {
    if (!taskData.title) {
        throw new Error("Task title is required");
    }

    const newTask = {
        id: `T-${Date.now()}`,
        ...taskData,
        status: taskData.status || "Active",
        createdAt: new Date().toISOString()
    };

    return [...existingTasks, newTask];
}