import React from 'react';
// import { useHistory } from 'react-router-dom';
// import AuthServices from '../../api/AuthServices';
// import { useAuth } from '../../context/auth';
import useInputValue from '../../components/input-value';


function Login () {

    // let {setCurrentUser, setToken} = useAuth();
    // let history = useHistory();
    let email = useInputValue('email');
    let password = useInputValue('password');
    
   

    const handleSubmit = async(event) => {
        event.preventDefault();
        // const res = await AuthServices.login({email: email.value, password: password.value});
        // if (res.success) {
        //     setToken(res.data.token);
        //     // let {setCurrentUser, setToken} = useAuth();
        //     setCurrentUser(res.data.user);
        //     history.push(getIntendedUrl());
            
        // }
    }

    return(<>
    <div className="bg-dark-blue h-100">
        <div className="container h-100">
            <div className=" row h-100 justify-content-center align-items-center">
                <div className="col-md-8 col-lg-6 text-white">
                <h2 className="">User Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="  pr-0 mb-3">
                        <div className="form-floating">
                            <label htmlFor="floatingInput">Email</label>
                            <input type="text" name="email" id="floatingInput" className="form-control forms" placeholder="Email" {...email.bind} required/>   
                        </div>                              
                    </div>
                    <div className="   pr-0 mb-3">
                        <div className="form-floating">
                            <label htmlFor="floatingInput">Password</label>
                            <input type="password" name="password" id="floatingInput" className="form-control forms" placeholder="Password"  {...password.bind} required/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className=" pl-4 d-inline-block">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                        </div>
                        <div className=" pl-5 d-inline-block">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Forget Password</label>
                        </div>
                    </div>
                    <div className=" ">
                        <button type="submit" className="btn btn-success btn-lg" >Submit</button> 
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    </>)
    
}

export default Login;
