

export const Register = async (name, email, password)  => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/register' , {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({name, email, password}),
            credentials: "include", 
          })

        const result = await response.json()
        if (!response.ok) {
            throw new Error(result.message || 'Registration failed');
        }
        window.location.replace('/login');
        return { success: true, result };


    } catch (error) {
        return { success: false, error: error.message };
    }
}

export const Authentication = async (email, password) => {  
    try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
            credentials: "include",
        });

        const result = await response.json();
        console.log('auth', result);

        if (response.ok) {
            localStorage.setItem('token', result.token);
            window.location.replace('/todos');
            return result;
        } else {
            // console.log('failed login', result);
            return null;
        }

    } catch (error) {
        console.log(error.message);
    }
};



export const Logout = async () => {
  await localStorage.removeItem('token')
  await window.location.replace('/login');
  console.log('you are loged out !')
}