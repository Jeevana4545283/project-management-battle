export function getUsers(users, filters = {}) {
    let filteredUsers = [...users];

    if (filters.search) {
        const searchText = filters.search.toLowerCase();

        filteredUsers = filteredUsers.filter(user =>
            user.name.toLowerCase().includes(searchText)
        );
    }

    return filteredUsers;
}