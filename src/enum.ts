enum UserRole {
    Admin = 'admin',
    Editor = 'editor',
    viewer = 'viewer',
};

const canEdit = (role: UserRole) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    } else {
        return false
    };
};

const result = canEdit(UserRole.Admin);

console.log(result);
