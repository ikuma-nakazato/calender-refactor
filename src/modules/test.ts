const initial_state = 0;

const ACTION_TYPES = {
    SET_REFER_DAY: 'hoge',
    IS_SHOW_FORM: 'fuga'
}


//Action Creator
export function action1(value: number){
    return {
        type: ACTION_TYPES.SET_REFER_DAY,
        value
    }
}

export function action2(hoge: string){
    return {
        type: ACTION_TYPES.IS_SHOW_FORM,
        hoge
    }
}


//Reducer
export default function reducer(state = initial_state, action: any){
    switch(action.type){
        case 'isShowForm':
            return Object.assign({}, state, {
                is_showForm: true
            });
        case 'SetReferDay':
            return Object.assign({}, state, {
                refer_day: action.value
            });
        default:
            return state;
    }
}