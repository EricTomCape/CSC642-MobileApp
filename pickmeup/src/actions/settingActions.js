export const updatePermissions = (conPerms) => {
    return {
        type: 'UPDATE_PERMISSIONS', 
        conPerms: conPerms
    }
}

export const updateTBC = (tbc) => {
    return {
        type: 'UPDATE_TBC', 
        tbc: tbc
    }
}

export const updateCB = (cb) => {
    return {
        type: 'UPDATE_CB', 
        cb: cb
    }
}

