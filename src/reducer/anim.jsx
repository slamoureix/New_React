const initialState = {
    statut : {
        VISIBLE: 1,
        HIDDEN: 2,
        ENTERING: 3,
        FINISH: 4,
        LEAVING: 5,
    },
    class : {
        Visible : 'Visible',
        Hidden : 'Hidden',
        Scale : 'ToScaleTransition',
        MoveTo : 'MoveTo',

    }
}

export default function AnimReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_VISIBLE':
                return( console.log(state.class.Visible) );
        case 'ADD_HIDDEN':
                return(
                    console.log(state.class.Hidden)
                );
        default:
            return state;
    }
}
