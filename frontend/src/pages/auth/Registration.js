import React, { Component } from 'react';
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registration :{
            name :'',
            email: '',
            password: '',
            password_confirmation :'',
            reference:""
            },
            formValue: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            registration :{
            ...this.state.registration,
            [name] : value
        }
    },()=>{
      if(this.state.registration.name.length > 0 && this.state.registration.email.length > 0 && this.state.registration.password.length > 0  && this.state.registration.password_confirmation.length > 0){
          this.setState({
              formValue : !this.state.formValue
          })
      }  
    })
    }

    componentDidMount(){
        var url_string = window.location.href; //
        var url = new URL(url_string);
        var c = url.searchParams.get("reference");
        this.setState({
            reference:c
        })
        console.log(c);
    }

    handleSubmit(event){
        event.preventDefault();
        const inputData ={
            name: this.state.name,
            email: this.state.email,
            password : this.state.password,
            password_confirmation : this.state.password_confirmation,
            reference :this.state.reference

       }
        axios.post('/register', inputData)
        .then(response=> {
            this.setState({
                success : true
            });

            if (response.status == '201') {
                window.location.href = "/home";
            }
        }).catch(error=>{ return []; });
    }

    render(){
        return(<>
            <div className="skills-body">
                <header>Sign Up</header>
                <div className="skill-type-list justify-content-between pt-3">
                <form onSubmit={this.handleSubmit} data-no-ajax encType="multipart/form-data">
                    <div className="row">
                        <div className="col-md-8 col-lg-8">
                            <div className="skill-type-list">
                            <div className="form-group type-list-link form-floating">
                                <input type="text" name="name" id="floatingInput" onChange={this.inputChange} className="form-control forms "placeholder="Full name"/>
                                <label htmlFor="floatingInput">Full name</label>
                            </div>
                            <div className="form-group type-list-link form-floating">
                                    <input type="text" name="email" id="floatingInput" onChange={this.inputChange} className="form-control forms" placeholder="Email"/>
                                    <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="form-group type-list-link form-floating">
                                <input type="password" name="password" id="floatingInput" onChange={this.inputChange} className="form-control forms "placeholder="Password"/>
                                <label htmlFor="floatingInput">Password</label>
                            </div>
                            <div className="form-group type-list-link form-floating">
                                    <input type="password" name="password_confirmation" id="floatingInput" onChange={this.inputChange} className="form-control forms" placeholder="Confirm Password"/>
                                    <label htmlFor="floatingInput">Confirm Password</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                                <label className="form-check-label" htmlFor="exampleCheck1">I agree to the Terms of Service and I have read the Privacy and Cookie Statemen</label>
                            </div>
                            
                            <div className="form-group">
                                <button type="submit"className={this.state.formValue ?"btn btn-blue btn-lg ml-2": "btn btn-grey btn-lg empty mt-2"}>Lets go</button> 
                            </div>

                        </div>

                        </div>

                    </div>
        
                    


                    </form>
                
                </div>
            </div>
        </>)
        }
    }
    
    export default Registration;
