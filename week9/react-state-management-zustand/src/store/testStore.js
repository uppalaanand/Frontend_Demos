import { create } from 'zustand';

//Create Store
export const useTest = create((set) => ({
    //state
    x:10,
    y:20,
    user:{
        name:"Anand",
        age:21
    },
    //functions to modify state
    incrementX:() => set((state) => ({x:state.x+1})),
    decrementY:() => set(state=>({x:state.x-1})),
    incrementY:() => set((state) => ({y:state.y+1})),
    decrementY:() => set(state=>({y:state.y-1})),
    incrementXByValue:(val) => set(state => ({x:state.x+val})),
    changeUserName:() =>  set(state => ({user:{...state.user, name:"Anand Kumar"}})),
    changeAge:(val) => set(state=>({user:{...state.user, age:val}})),
}));   //=>  returns hook