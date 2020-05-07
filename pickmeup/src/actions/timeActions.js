export const addTime = () => {
    return {
        type: "ADD_TIME"
    }
}

export const removeTime = (key) => {
    return {
        type: "REMOVE_TIME",
        key: key
    }
}

export const updateTime = (time) => {
    return {
        type: "UPDATE_TIME",
        time: time
    }
}

//export const getTime