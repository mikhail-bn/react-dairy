export const initialState = {
    isValid: { title: true, post: true, date: true },
    values: { title: undefined, post: undefined, date: undefined },
    isFormReadyToSubmit: false,
};
export function formReducer(state, action) {
    switch (action.type) {
        case 'RESET_VALIDITY':
            return { ...state, isValid: initialState.isValid };
        case 'SUBMIT': {
            const postValidity = action.payload.post?.trim().length;
            const titleValidity = action.payload.title?.trim().length;
            const dateValidity = action.payload.date;
            return {
                values: action.payload,
                isValid: {
                    post: postValidity,
                    title: titleValidity,
                    date: dateValidity
                },
                isFormReadyToSubmit: postValidity && titleValidity && dateValidity
            }
        }
    }
}
