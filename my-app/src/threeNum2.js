import React, { Component } from 'react';
import './App.css';
import 'element-theme-default';
import axios from 'axios'
import {Table,Button,Tag,Form,Input,Dialog} from 'element-react'
class threeNum2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    prop: "one",
                    width: 100,
                    render: (row, column,index)=> {
                        if (
                            this.state.result[0] != null && this.state.result[0].result.indexOf(index) != -1
                        )  {
                            return <span><Tag type="primary">{this.state.data[index].one}</Tag></span>
                        }else if(
                            this.state.result[1] != null && this.state.result[1].result.indexOf(index) != -1
                        ){
                            return <span><Tag type="warning">{this.state.data[index].one}</Tag></span>
                        }else if(
                            this.state.result[2] != null && this.state.result[2].result.indexOf(index) != -1
                        ){
                            return <span><Tag type="success">{this.state.data[index].one}</Tag></span>
                        }else if(
                            this.state.result[3] != null && this.state.result[3].result.indexOf(index) != -1
                        ){
                            return <span><Tag type="danger">{this.state.data[index].one}</Tag></span>
                        }
                        else if(
                            this.state.result[4] != null && this.state.result[4].result.indexOf(index) != -1
                        ){
                            return <span><Tag type="gray">{this.state.data[index].one}</Tag></span>
                        }
                        else if(
                            this.state.result[5] != null && this.state.result[5].result.indexOf(index) != -1
                        ){
                            return <span><Tag >{this.state.data[index].one}</Tag></span>
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
                            this.state.result[0] != null && this.state.result[0].result.indexOf(index) != -1
                        )  {
                            return <span><Tag type="primary">{this.state.data[index].two}</Tag></span>
                        }else if(
                            this.state.result[1] != null && this.state.result[1].result.indexOf(index) != -1
                        ){
                            return <span><Tag type="warning">{this.state.data[index].two}</Tag></span>
                        }else if(
                            this.state.result[2] != null && this.state.result[2].result.indexOf(index) != -1
                        ){
                            return <span><Tag type="success">{this.state.data[index].two}</Tag></span>
                        }else if(
                            this.state.result[3] != null && this.state.result[3].result.indexOf(index) != -1
                        ){
                            return <span><Tag type="danger">{this.state.data[index].two}</Tag></span>
                        }
                        else if(
                            this.state.result[4] != null && this.state.result[4].result.indexOf(index) != -1
                        ){
                            return <span><Tag type="gray">{this.state.data[index].two}</Tag></span>
                        }
                        else if(
                            this.state.result[5] != null && this.state.result[5].result.indexOf(index) != -1
                        ){
                            return <span><Tag >{this.state.data[index].two}</Tag></span>
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
                    render: (row, column,index)=>{
                        if (
                            this.state.result[0] != null && this.state.result[0].result.indexOf(index) != -1
                        )  {
                            return <span><Tag type="primary">{this.state.data[index].four}</Tag></span>
                        }else if(
                            this.state.result[1] != null && this.state.result[1].result.indexOf(index) != -1
                        ){
                            return <span><Tag type="warning">{this.state.data[index].four}</Tag></span>
                        }else if(
                            this.state.result[2] != null && this.state.result[2].result.indexOf(index) != -1
                        ){
                            return <span><Tag type="success">{this.state.data[index].four}</Tag></span>
                        }else if(
                            this.state.result[3] != null && this.state.result[3].result.indexOf(index) != -1
                        ){
                            return <span><Tag type="danger">{this.state.data[index].four}</Tag></span>
                        }
                        else if(
                            this.state.result[4] != null && this.state.result[4].result.indexOf(index) != -1
                        ){
                            return <span><Tag type="gray">{this.state.data[index].four}</Tag></span>
                        }
                        else if(
                            this.state.result[5] != null && this.state.result[5].result.indexOf(index) != -1
                        ){
                            return <span><Tag >{this.state.data[index].four}</Tag></span>
                        }
                        else  {
                            return <span>{this.state.data[index].four}</span>
                        }
                    }
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
            result:[],
            dialogVisible: false
        }
    }
    componentWillMount(){
        axios.get(`http://47.94.86.217//get`)
            .then(res => {
                const data = res.data;
                this.setState({data: data});
            })
            .catch(function (response) {
                console.log(response);
            })
        axios.get(`http://47.94.86.217//getThreeNum`,{
            params:{
                a: "one",
                b: "two",
                c: "four"
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
        if (index % 4 === 3) {
            return 'info-row';
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
                    />
                </div>
            </div>
        );
    }
}

export default threeNum2;