import axios from 'axios';

export const LoginAPI = async (body, loginAs) => {
    try {
        // console.log(loginAs);
        const url = `/api/${loginAs}/login`;
        const response = await axios.post(url, {
            email: body.email,
            password: body.password
        });
        const data = response.data;
        return data;
    }
    catch (err) {
        console.log({... err.response});
        console.log("Error is: " + err.response);
    }
}