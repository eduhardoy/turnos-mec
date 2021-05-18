import * as actions from '../Shift'
import * as types from '../ActionTypes'

describe('addShift returns action', () => {
    it('return an action', () => {
        const payload = {direccion: 'NivelSecundario'}
        expect(actions.addShift(payload)).toMatchSnapshot()
    })
})