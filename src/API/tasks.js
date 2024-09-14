export const SetTasks = async (item) => {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch('http://127.0.0.1:8000/api/todos' , {

            method:'POST',
            headers: {
                "Content-type":"application/json",
                 "Authorization": `Bearer ${token}`
            },
            body:JSON.stringify({item}),
            credentials: "include",
        })
    
        const result = await response.json()
        if(response.ok){
            console.log(result);
            return result;
        } else {
            console.log('failed to Set tasks', result);
            return null;
        }
        
    } catch (error) {
      console.log(error.message)
    }
}


export const GetTasks = async () => {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch('http://127.0.0.1:8000/api/todos' , {

            method:'GET',
            headers: {
                "Content-type":"application/json",
                 "Authorization": `Bearer ${token}`
            },
            credentials: "include",
        })
    
        const result = await response.json()
        console.log('tasks', result);

        if(response.ok){
            console.log('tasks', result);
            return result;
        } else {
            console.log('failed to fetch tasks', result);
            return null;
        }
          

    } catch (error) {
      console.log(error.message)
    }
}


export const UpdateTask = async (id, checked) => {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://127.0.0.1:8000/api/todos/${id}` , {

            method:'PUT',
            headers: {
                "Content-type":"application/json",
                 "Authorization": `Bearer ${token}`
            },
            body:JSON.stringify({isCompleted:checked})  ,
            credentials: "include",
        })
    
        const result = await response.json()

        if(response.ok){
            console.log('tasks', result);
            return result;
        } else {
            console.log('failed to delete task', result);
            return null;
        }

    } catch (error) {
      console.log(error.message)
    }
}


export const DeleteTask = async (id) => {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://127.0.0.1:8000/api/todos/${id}` , {

            method:'DELETE',
            headers: {
                "Content-type":"application/json",
                 "Authorization": `Bearer ${token}`
            },
            credentials: "include",
        })
    
        const result = await response.json()

        if(response.ok){
            console.log('tasks', result);
            return result;
        } else {
            console.log('failed to delete task', result);
            return null;
        }
          

    } catch (error) {
      console.log(error.message)
    }
}