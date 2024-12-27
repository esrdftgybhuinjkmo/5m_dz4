import {createReducer, createAction} from '@reduxjs/toolkit';



const INCREMENT_NUM=  'INCREMENT_NUM';
const INCREMENT_NUMFIVE=  'INCREMENT_NUMFIVE';
const DECREMENT_NUM=  'DECREMENT_NUM';
const DECREMENT_NUMFIVE=  'DECREMENT_NUMFIVE';
const RESET_NUM=  'RESET_NUM';


export const incrementNum = createAction (INCREMENT_NUM);
export const incrementNumFive = createAction (INCREMENT_NUMFIVE);
export const decrementNum = createAction (DECREMENT_NUM);
export const decrementNumFive = createAction (DECREMENT_NUMFIVE);
export const reset = createAction (RESET_NUM);

 
const ininitialState = {
    num: 0,
}

export default createReducer(ininitialState, (builder) =>{
    builder
    .addCase(INCREMENT_NUM, (state, action)=>{
         if(state.num < 15) state.num++
    })
    .addCase(DECREMENT_NUM, (state, action)=>{
        if(state.num > 0) state.num--
    })
    .addCase(INCREMENT_NUMFIVE, (state, action)=>{
        if(state.num + 5 <= 15){
            state.num += 5  
        }else{
            state.num = 15
        }
            
    })
    .addCase(DECREMENT_NUMFIVE, (state, action)=>{
        if(state.num - 5 >= 0){
            state.num -=5
        }else{
            state.num = 0
        }

    })
    .addCase(RESET_NUM, (state, action)=>{
        state.num = 0 
    })
})