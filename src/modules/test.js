var initial_state = 0;
var ACTION_TYPES = {
    SET_REFER_DAY: 'hoge',
    IS_SHOW_FORM: 'fuga'
};
//Action Creator
export function action1(value) {
    return {
        type: ACTION_TYPES.SET_REFER_DAY,
        value: value
    };
}
export function action2(hoge) {
    return {
        type: ACTION_TYPES.IS_SHOW_FORM,
        hoge: hoge
    };
}
//Reducer
export default function reducer(state, action) {
    if (state === void 0) { state = initial_state; }
    switch (action.type) {
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
//# sourceMappingURL=test.js.map