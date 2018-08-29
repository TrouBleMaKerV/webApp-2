import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import 'element-theme-default';
import {Table,Tag} from 'element-react'
class speculation1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    prop: "one",
                    width: 100,
                    render: (row, column,index)=>{
                        if (
                            this.state.result[0] != null && this.state.result[0].one.indexOf(index) != -1
                        )  {
                            return <span><Tag type="primary">{this.state.data[index].one}</Tag></span>
                        }else if(this.state.result[1] != null && this.state.result[1].one.indexOf(index) != -1){
                            return <span><Tag type="success">{this.state.data[index].one}</Tag></span>
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
                            this.state.result[0] != null && this.state.result[0].two.indexOf(index) != -1
                        )  {
                            return <span><Tag type="primary">{this.state.data[index].two}</Tag></span>
                        }else if(this.state.result[1] != null && this.state.result[1].two.indexOf(index) != -1){
                            return <span><Tag type="success">{this.state.data[index].two}</Tag></span>
                        }
                        else  {
                            return <span>{this.state.data[index].two}</span>
                        }
                    }
                },
                {
                    prop: "three",
                    width: 100,
                    render: (row, column,index)=>{
                        if (
                            this.state.result[0] != null && this.state.result[0].three.indexOf(index) != -1
                        )  {
                            return <span><Tag type="primary">{this.state.data[index].three}</Tag></span>
                        }else if(this.state.result[1] != null && this.state.result[1].three.indexOf(index) != -1){
                            return <span><Tag type="success">{this.state.data[index].three}</Tag></span>
                        }
                        else  {
                            return <span>{this.state.data[index].three}</span>
                        }
                    }
                },
                {
                    prop: "four",
                    width:100,
                    render: (row, column,index)=>{
                        if (
                            this.state.result[0] != null && this.state.result[0].four.indexOf(index) != -1
                        )  {
                            return <span><Tag type="primary">{this.state.data[index].four}</Tag></span>
                        }else if(this.state.result[1] != null && this.state.result[1].four.indexOf(index) != -1){
                            return <span><Tag type="success">{this.state.data[index].four}</Tag></span>
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
            result: [],
        }
    }
    componentWillMount(){
        axios.get(`http://39.108.158.246//get`)
            .then(res => {
                const data = res.data;
                this.setState({data: data});
            })
            .catch(function (response) {
                console.log(response);
            })
        axios.get(`http://39.108.158.246//getSpeculation`,{
            params: {
                a: "one"
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
    add(){
        axios.post(`http://39.108.158.246//add`,{
            one:this.state.form.one,
            two:this.state.form.two,
            three:this.state.form.three,
            four:this.state.form.four
        })
            .then(res => {
                this.setState({dialogVisible: false});
                if(res.data = true){
                    alert("添加成功")
                    this.componentWillMount();
                }
            })
            .catch(function (response) {
                console.log(response);
            })
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

export default speculation1;