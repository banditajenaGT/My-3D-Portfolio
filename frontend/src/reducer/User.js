import {createReducer} from '@reduxjs/toolkit'

const initialState={
    loading:true
}

export const userReducer=createReducer(initialState,{
    "getUserRequest":(state)=>{
        state.loading=true
    },
    "getUserSuccess":(state,action)=>{
        state.loading=false
        state.user=action.payload
    },
    "getUserFailure":(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    "clearErrors":(state)=>{
        state.error=null
    }
})
export const loginReducer=createReducer({},{
    "loginRequest":(state)=>{
        state.loading=true
        state.isAuthenticated=false
    },
    "loginSuccess":(state,action)=>{
        state.loading=false
        state.message=action.payload
        state.isAuthenticated=true
    },
    "loginFailure":(state,action)=>{
        state.loading=false
        state.error=action.payload
        state.isAuthenticated=false
    },
    "logoutRequest":(state)=>{
        state.loading=true
        state.isAuthenticated=true
    },
    "logoutSuccess":(state,action)=>{
        state.loading=false
        state.message=action.payload
        state.user=null
        state.isAuthenticated=false
    },
    "logoutFailure":(state,action)=>{
        state.loading=false
        state.error=action.payload
        state.isAuthenticated=true
    },
    "loadUserRequest":(state)=>{
        state.loading=true
        state.isAuthenticated=false
    },
    "loadUserSuccess":(state,action)=>{
        state.loading=false
        state.user=action.payload
        state.isAuthenticated=true
    },
    "loadUserFailure":(state,action)=>{
        state.loading=false
        state.error=action.payload
        state.isAuthenticated=false
    },
    "clearErrors":(state)=>{
        state.error=null
    },
    "clearMessage":(state)=>{
        state.message=null
    }
})



export const updateReducer=createReducer( {},{
    "updateUserRequest":(state)=>{
        state.loading=true
    },
    "updateUserSuccess":(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    "updateUserFailure":(state,action)=>{
        state.loading=false
        state.error=action.payload
    },


    "addTimelineRequest":(state)=>{
        state.loading=true
    },
    "addTimelineSuccess":(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    "addTimelineFailure":(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    "deleteTimelineRequest":(state)=>{
        state.loading=true
    },
    "deleteTimelineSuccess":(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    "deleteTimelineFailure":(state,action)=>{
        state.loading=false
        state.error=action.payload
    },


    "addYoutubeRequest":(state)=>{
        state.loading=true
    },
    "addYoutubeSuccess":(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    "addYoutubeFailure":(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    "deleteYoutubeRequest":(state)=>{
        state.loading=true
    },
    "deleteYoutubeSuccess":(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    "deleteYoutubeFailure":(state,action)=>{
        state.loading=false
        state.error=action.payload
    },


    "addProjectsRequest":(state)=>{
        state.loading=true
    },
    "addProjectsSuccess":(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    "addProjectsFailure":(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    "deleteProjectsRequest":(state)=>{
        state.loading=true
    },
    "deleteProjectsSuccess":(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    "deleteProjectsFailure":(state,action)=>{
        state.loading=false
        state.error=action.payload
    },


    "contactRequest":(state)=>{
        state.loading=true
    },
    "contactSuccess":(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    "contactFailure":(state,action)=>{
        state.loading=false
        state.error=action.payload
    },


    "clearErrors":(state)=>{
        state.error=null
    },
    "clearMessage":(state)=>{
        state.message=null
    }
})