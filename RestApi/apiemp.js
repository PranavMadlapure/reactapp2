import React from "react";

export default class GetEmps extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            emps: []
        }
    }

    componentDidMount=()=>{
        //real url developed using express
        fetch("http://localhost:8081/emps")
        .then(r => r.json())
        .then(d => this.setState({emps: d}))
    }

    render(){
        return (
            <div className="container">
                <h3> Emp Information </h3>
                <table className="table">
                    <tr>
                        <th> Emp ID  </th>
                        <th> Emp Name  </th>
                        <th> Salary  </th>
                        <th> Dept  </th>
                    </tr>
                    {
                        this.state.emps.map((v)=>{
                            return(
                                <tr>
                                   <td>{v.EMPNO}</td> 
                                   <td>{v.ENAME}</td> 
                                   <td>{v.SAL}</td> 
                                   <td>{v.DEPTNO}</td> 
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }

}