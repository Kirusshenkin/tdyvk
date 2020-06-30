import { createPerson } from './personActions'
import { push } from 'connected-react-router'

export default store => next => action => {
    next(action)

    if(action.type === createPerson.toString()) {
        store.dispatch(push('/persons/' + action.payload.id))
    }
}