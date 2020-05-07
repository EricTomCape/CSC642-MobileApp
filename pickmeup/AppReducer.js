const initState = {
    times: [{
        conPerms: "All",
        tbc: "3",
        cb: "3",
        startTime: '00:00',
        endTime: '00:00',
        key: "1",
      },],
    contacts: [],
    blocked: [
        {
          key: '1',
          name: 'Matthew "Cookie" Davis',
          number: "1-650-576-9102",
        },
    
        {
          key: '2',
          name: 'Matthew "Cookie" Davis',
          number: "1-650-576-9102",    
        },
    
        {
          key: '3',
          name: 'Matthew "Cookie" Davis',
          number: "1-650-576-9102",    
        },
    
        {
          key: '4',
          name: 'Matthew "Cookie" Davis',
          number: "1-650-576-9102",    
        },
    
        {
          key: '5',
          name: 'Matthew "Cookie" Davis',
          number: "1-650-576-9102",    
        },
    
        {
          key: '6',
          name: 'Matthew "Cookie" Davis',
          number: "1-650-576-9102",    
        },
      ],
    recent: [],
    conPerms: 'All',
    tbc: "3",
    cb: "3"
};

const appReducer = (state = initState, action) => {

    let key = ''

    console.log(action);

    switch (action.type) {
    
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacs
            }

        case 'REMOVE_BLOCKED':
            let newBlocked = state.blocked.filter(con => con.key !== action.key);
            return {
                ...state,
                blocked: newBlocked
            }

        case 'REMOVE_CONTACT':
            let newContacts = state.contacts.filter(con => con.key !== action.key);
            return {
                ...state,
                contacts: newContacts
            }

        case 'REMOVE_RECENT':
            let newRecent = state.recent.filter(con => con.key !== action.key);
            return {
                ...state,
                recent: newRecent
            }

        case 'ADD_CONTACT':
            key = makeKey();
            return {
                ...state,
                contacts: [...state.contacts, 
                    {
                        key: key,
                        name: action.name,
                        number: action.number,
                        isContact: action.isContact
                    }]
            }

        case 'ADD_BLOCKED':
            key = makeKey();
            return {
                ...state,
                blocked: [...state.blocked, 
                    {
                        key: key,
                        name: action.name,
                        number: action.number,
                        isContact: action.isContact
                    }]
            }

        case 'ADD_RECENT':
            key = makeKey();
            return {
                ...state,
                recent: [...state.recent, 
                    {
                        key: key,
                        name: action.name,
                        number: action.number,
                        isContact: action.isContact
                    }]
            }

        case 'UPDATE_PERMISSIONS':
            console.log(action.conPerms);
            return {
                ...state,
                conPerms: action.conPerms
            }

        case 'UPDATE_CB':
            return {
                ...state,
                cb: action.cb
            }

        case 'UPDATE_TBC':
            
            return {
                ...state,
                tbc: action.tbc
            }

        case 'ADD_TIME':
            key = makeKey();
            return {
                ...state,
                times: [...state.times, {
                    key: key,
                    startTime: '00:00',
                    endTime: '00:00',
                    conPerms: 'All',
                    cb: '3',
                    tbc: '3'
                }]
            }

        case 'REMOVE_TIME':
            let newTimes = state.times.filter(con => con.key !== action.key);
            return {
                ...state,
                times: newTimes
            }

        case 'UPDATE_TIME':
            let updateTimes = [...state.times];
            let index = updateTimes.findIndex(time => time.key === action.time.key);
            updateTimes[index] = action.time;
            return {
                ...state,
                times: updateTimes
            }

        default:
            return state;
    }
};

const makeKey = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export default appReducer;