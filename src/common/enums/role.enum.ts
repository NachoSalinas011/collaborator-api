export interface Role {
    name: string,
    id: string,
}

const UserRole = {
    ADMIN: {
        name: 'Administrador',
        id: '65b801a28605e61a7318e6eb'
    },
    COLLABORATOR: {
        name: 'Colaborador',
        id: '65b801e48605e61a7318e6ed'
    },
    AUDIT: {
        name: 'Auditoria',
        id: '65b801e88605e61a7318e6ef'
    }
}

export default UserRole;