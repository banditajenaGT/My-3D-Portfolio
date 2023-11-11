import axios from 'axios'

export const getUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "getUserRequest"
        })

        const { data } = await axios.get("/api/v1/get/user")

        dispatch({
            type: "getUserSuccess",
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: "getUserFailure",
            payload: error.response.data.message
        })
    }
}

export const loginUser = (email,password) => async (dispatch) => {
    try {
        dispatch({
            type: "loginRequest"
        })

        const { data } = await axios.post("/api/v1/login",{
            email,password
        },{
            headers:{
                "Contect-Type":"application/json"
            }
        })

        dispatch({
            type: "loginSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "loginFailure",
            payload: error.response.data.message
        })
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "logoutRequest"
        })

        const { data } = await axios.get("/api/v1/logout")

        dispatch({
            type: "logoutSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "logoutFailure",
            payload: error.response.data.message
        })
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "loadUserRequest"
        })

        const { data } = await axios.get("/api/v1/me")

        dispatch({
            type: "loadUserSuccess",
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: "loadUserFailure",
            payload: error.response.data.message
        })
    }
}


export const updateUser = (name,email,password,skills,about) => async (dispatch) => {
    try {
        dispatch({
            type: "updateUserRequest"
        })

        const { data } = await axios.put("/api/v1/admin/update",{
            name,email,password,skills,about
        },{
            headers:{
                "Contect-Type":"application/json"
            }
        })

        dispatch({
            type: "updateUserSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "updateUserFailure",
            payload: error.response.data.message
        })
    }
}


export const addTimeline = (title, description, date) => async (dispatch) => {
    try {
        dispatch({
            type: "addTimelineRequest"
        })

        const { data } = await axios.post("/api/v1/admin/timeline/add",{
            title, description, date
        },{
            headers:{
                "Contect-Type":"application/json"
            }
        })

        dispatch({
            type: "addTimelineSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "addTimelineFailure",
            payload: error.response.data.message
        })
    }
}

export const deleteTimeline = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteTimelineRequest"
        })

        const { data } = await axios.delete(`/api/v1/admin/timeline/delete/${id}`)

        dispatch({
            type: "deleteTimelineSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "deleteTimelineFailure",
            payload: error.response.data.message
        })
    }
}

export const addYoutube = (title, url, image) => async (dispatch) => {
    try {
        dispatch({
            type: "addYoutubeRequest"
        })

        const { data } = await axios.post("/api/v1/admin/youtube/add",{
            title, url, image
        },{
            headers:{
                "Contect-Type":"application/json"
            }
        })

        dispatch({
            type: "addYoutubeSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "addYoutubeFailure",
            payload: error.response.data.message
        })
    }
}

export const deleteYoutube = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteYoutubeRequest"
        })

        const { data } = await axios.delete(`/api/v1/admin/youtube/delete/${id}`)

        dispatch({
            type: "deleteYoutubeSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "deleteYoutubeFailure",
            payload: error.response.data.message
        })
    }
}

export const addProjects = (title, description, techStack, url, image) => async (dispatch) => {
    try {
        dispatch({
            type: "addProjectsRequest"
        })

        const { data } = await axios.post("/api/v1/admin/projects/add",{
            title, description, techStack, url, image
        },{
            headers:{
                "Contect-Type":"application/json"
            }
        })

        dispatch({
            type: "addProjectsSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "addProjectsFailure",
            payload: error.response.data.message
        })
    }
}

export const deleteProjects = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteProjectsRequest"
        })

        const { data } = await axios.delete(`/api/v1/admin/projects/delete/${id}`)

        dispatch({
            type: "deleteProjectsSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "deleteProjectsFailure",
            payload: error.response.data.message
        })
    }
}

export const contact = (name,email,message) => async (dispatch) => {
    try {
        dispatch({
            type: "contactRequest"
        })

        const { data } = await axios.post(`/api/v1/contact`,{
            name, email, message
        },{
            headers:{
                "Contect-Type":"application/json"
            }
        })
        
        dispatch({
            type: "contactSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "contactFailure",
            payload: error.response.data.message
        })
    }
}