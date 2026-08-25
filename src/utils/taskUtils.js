export function getTasks(tasks, filters = {}) {
    let filteredTasks = [...tasks];

    // Status filter
    if (filters.status && filters.status !== "All") {
        filteredTasks = filteredTasks.filter(task =>
            task.status === filters.status
        );
    }

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