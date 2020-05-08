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
        //icon: contact.icon
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
        name: contact.name,
        number: contact.number,
        isContact: contact.isContact,
        //icon: contact.icon
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