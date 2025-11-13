// const UserRole = {
//     Admin: 'Admin',
//     Editor: 'Editor',
//     Viewer: 'Viewer'
// } as const;


// const canEdit = (role: keyof typeof UserRole) => {
//     if (role === UserRole.Admin || role === UserRole.Editor) {
//         return true
//     } else {
//         return false;
//     };
// };

// const result = canEdit(UserRole.Viewer);

// console.log(result);



//? Method 2 More real;

const UserRole = {
    Admin: 'ADMIN',
    Editor: 'EDITOR',
    Viewer: 'VIEWER'
} as const;




const canEdit = (role: typeof UserRole[keyof typeof UserRole]) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true
    } else {
        return false;
    };
};

const result = canEdit(UserRole.Viewer);

console.log(result);

