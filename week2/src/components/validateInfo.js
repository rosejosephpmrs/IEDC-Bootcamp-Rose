export function validateInfo(state){
    let errors={}

    if (!state.date){
        errors.date="Please enter the date"
    }
    if(!state.category){
        errors.category="Please select a category"
    }
    if (!state.amount){
        errors.amount="Please fill in the amount"
    }
    return errors
} 