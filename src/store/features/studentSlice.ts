
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
const studentData = localStorage.getItem("studentdetails")
const studentInfo = studentData !==null ? JSON.parse(studentData) : []


 interface Address {
    province: string;
    district: string;
    municipality: string;
    ward: string;
    tole: string;
  }

 interface Student{
    id:number
    name: string;
    email: string;
    phone: number;
    citizenship: string;
    address:Array<Address>,
    }

 

type studentState={
   students:Student[]
}

const initialState:studentState = {
   students:studentInfo
}



export const studentSlice = createSlice({
    name:"registerstudent",
    initialState,
    reducers:{
        registerStudents:(state,action:PayloadAction<Student>)=>{
            state.students.push(action.payload)
            localStorage.setItem("studentdetails", JSON.stringify(state.students));
        }

        
    }
})


export const {registerStudents} = studentSlice.actions;
export default studentSlice.reducer
