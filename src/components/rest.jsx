import React, {Component} from 'react';
import axios from 'axios';

class rest extends Component{
    state={
        data: {},
        loader: false
    }


    componentDidMount() {

        this.setState({loader: true})

        // axios.get('https://reqres.in/api/users').then(response=>{console.log(response)})
        axios.get('https://reqres.in/api/users')
        .then((response)=>{
            // data=JSON.parse(response)
            // console.log(response)
            this.setState({
                data:  response.data.data,
                loader: false
            })
            // console.log(this.state.data)
        })
    }


    render(){

        const {data,loader} = this.state
        console.log(data)


        return(
            <>

                {loader ? "Loading": ''}
                {loader ? "": 

                    <>

                        <table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Avatar</th>
                            </tr>
                        </thead>


                        <tbody>

                        {data && data.length>0 && data.map((records,index)=>(
                            <tr>
                            <td>{records.id}</td>
                            <td>{records.email}</td>
                            <td>{records.first_name}</td>
                            <td>{records.last_name}</td>
                            <td><img src={records.avatar} alt="No Image"></img></td>
                            </tr>
                        ))}

                        </tbody>
                        </table>

                    </>


                }

                {/* <table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Avatar</th>
                    </tr>
                </thead>


                <tbody>

                {data && data.length>0 && data.map((records,index)=>(
                    <tr>
                    <td>{records.id}</td>
                    <td>{records.email}</td>
                    <td>{records.first_name}</td>
                    <td>{records.last_name}</td>
                    <td><img src={records.avatar} alt="No Image"></img></td>
                    </tr>
                ))}

                </tbody>
                </table> */}




                {/* {data.id}
                {loader ? 'loading' :''}
                {loader ? '':

                    <>

                    </>



                } */}

            {/* {this.state.id} */}
            {/* {this.state.data} */}

                {/* <table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Avatar</th>
                    </tr>
                </thead>


                <tbody>
                    {data && data.length > 0 && data.map((records,index)=>(

                        <tr>
                        <td>{records.id}</td>
                        <td>{reocords.email}</td>
                        <td>{records.first_name}</td>
                        <td>{records.last_name}</td>
                        <td>{records.avatar}</td>
                        </tr>

                    ))}
                </tbody>
                </table> */}

            </>
        )
    }
}

export default rest;