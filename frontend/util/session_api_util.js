
export const signUp = user => {
    return (
        $.ajax({
            url: `/api/users`,
            method: 'POST',
            data: { user },
        })
    );
}

export const fetchUser = userId => {
    return (
        $.ajax({
            url: `/api/users${userId}`,
            method: 'GET',
        })
    )
}

export const fetchUsers = () => {
    return (
        $.ajax({
            url: `/api/users`,
            method: 'GET',
        })
    )
}

export const updateUser = user => {
    return (
        $.ajax({
            url: `/api/users/${user.id}`,
            method: 'PATCH',
            data: { user },
        })
    );
}

export const deleteUser = userId => {
    return (
        $.ajax({
            url: `/api/users/${userId}`,
            method: 'DELETE',
        })
    )
}

export const login = user => {
    return (
        $.ajax({
            url: `/api/session`,
            method: `POST`,
            data: { user },
        })
    );
}

export const logout = () => {
    return (
        $.ajax({
            url: `/api/session`,
            method: 'DELETE',
        })
    );
}