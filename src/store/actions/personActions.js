import { createActions } from 'redux-actions'

export const { createPerson } = createActions({
    CREATE_PERSON: (id, name) => ({ id, name }),
});