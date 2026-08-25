export function calculateStats(projects, tasks) {
    const stats = {
        totalProjects: 0,
        totalTasks: 0,
        activeTasks: 0
    };

    // Calculate baseline stats
    stats.totalProjects = projects.length;
    stats.totalTasks = tasks.length;

    // Calculate active tasks
    stats.activeTasks = tasks.filter(
        task => task.status === "Active"
    ).length;

    return stats;
}