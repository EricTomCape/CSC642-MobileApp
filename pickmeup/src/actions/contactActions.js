export const removeBlocked = (key) => {
    return {
        type: 'REMOVE_BLOCKED', 
        key: key
    }
}

export const removeContact = (key) => {
    return {
        type: 'REMOVE_CONTACT', 
        key: key
    }
}

export const removeRecent = (key) => {
    return {
        type: 'REMOVE_RECENT', 
        key: key
    }
}

export const addContact = (contact) => {
    return {
        type: 'ADD_CONTACT',
        contact: contact,
        isContact: true
    }
}

export const addBlocked = (contact) => {
    return {
        type: 'ADD_BLOCKED',
        contact: contact
    }
}

export const addRecent = (contact) => {
    return {
        type: 'ADD_RECENT',
        contact: contact,
        //isContact: contact.isContact,
    }
}

export const addTime = () => {
    return{
        type: 'ADD_TIME',
    }
}

export const setTime = (time) => {
    return {
        type: 'SET_TIME',

    }
}

export const setContacts = (contacts) => {
    return {
        type: "SET_CONTACTS",
        contacts: contacts
    }
}

export const trimRecent = () => {
    return {
        type: "TRIM_RECENT"
    } 
}