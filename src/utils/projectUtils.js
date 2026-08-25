export function getProjects(projects, filters = {}) {
    let filteredProjects = [...projects];

    // Project search
    if (filters.search) {
        const searchText = filters.search.toLowerCase().trim();

        filteredProjects = filteredProjects.filter(project =>
            project.name &&
            project.name.toLowerCase().includes(searchText)
        );
    }

    return filteredProjects.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
}