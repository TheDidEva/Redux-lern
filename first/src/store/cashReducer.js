
const defaulState = {
    cash: 0,
}

const INCRIMENT_CASH = "INCRIMENT_CASH";
const DECEIMENT_CASH = "DICRIMENT_CASH";

export const cashReducer = (state = defaulState, action) => {
    switch (action.type) {
        case INCRIMENT_CASH:
            return { ...state, cash: state.cash + action.payload }

        case DECEIMENT_CASH:
            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}

export const incrimentCashActrion = (payload) => ({ type: INCRIMENT_CASH, payload })
export const decrementCashActrion = (payload) => ({ type: DECEIMENT_CASH, payload }) 