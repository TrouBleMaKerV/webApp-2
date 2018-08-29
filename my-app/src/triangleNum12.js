import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import 'element-theme-default';
import {Table,Button,Tag,Form,Input,Dialog} from 'element-react'
class triangleNum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    prop: "one",
                    width: 100,
                    render: (row, column,index)=>{
                        if (
                            this.state.result.one != null && this.state.result.one.indexOf(index) != -1
                        )  {
                            return <span><Tag type="primary">{this.state.data[index].one}</Tag></span>
                        }
                        else  {
                            return <span>{this.state.data[index].one}</span>
                        }
                    }
                },
                {
                    prop: "two",
                    width: 100,
                    render: (row, column,index)=>{
                        if (
                            this.state.result.two != null && this.state.result.two.indexOf(index) != -1
                        )  {
                            return <span><Tag type="primary">{this.state.data[index].two}</Tag></span>
                        }
                        else  {
                            return <span>{this.state.data[index].two}</span>
                        }
                    }
                },
                {
                    prop: "three",
                    width: 100,
                },
                {
                    prop: "four",
                    width:100,
                },
                {
                    prop: "sum",
                    width:100,
                    render: (row, column,index)=>{
                        return <span>{this.state.data[index].one + this.state.data[index].two + this.state.data[index].three+ this.state.data[index].four}</span>
                    }
                },
            ],
            data: [],
            result:''
        }
    }
    componentWillMount(){
        axios.get(`http://localhost:8080//get`)
            .then(res => {
                const data = res.data;
                this.setState({data: data});
            })
            .catch(function (response) {
                console.log(response);
            })
        axios.get(`http://localhost:8080//getTriangleNum`,{
            params: {
                a: "one",
                b: "two"
            }
        })
            .then(res => {
                const result = res.data;
                this.setState({result: result});
            })
            .catch(function (response) {
                console.log(response);
            })
    }
    rowClassName(row, index) {
        if (index === 1) {
            return 'info-row';
        } else if (index === 3) {
            return 'positive-row';
        }

        return '';
    }
    /*<header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">彩票</h1>
 </header>*/
    render() {
        return (
            <div className="App">
                <div className="Table">
                    <Table
                        style={{width: '100%'}}
                        columns={this.state.columns}
                        data={this.state.data}
                        border={true}
                        rowClassName={this.rowClassName.bind(this)}
                        showHeader={false}
                        highlightCurrentRow={false}
                    />
                </div>
            </div>
        );
    }
}

export default triangleNum;