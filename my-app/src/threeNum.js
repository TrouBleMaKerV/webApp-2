import React, { Component } from 'react';
import './App.css';
import 'element-theme-default';
import axios from 'axios'
import {Table,Button,Tag,Form,Input,Dialog} from 'element-react'
class threeNum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                one: null,
                two: null,
                three: null,
                four: null
            },
            columns: [
                {
                    prop: "one",
                    width: 100,
                    render: (row, column,index)=> {
                        if (
                            this.state.one.indexOf(index) != -1
                        )  {
                            return <span><Tag type="primary">{this.state.data[index].one}</Tag></span>
                        }else if(
                            this.state.three.indexOf(index) != -1
                        ){
                            return <span><Tag type="warning">{this.state.data[index].one}</Tag></span>
                        }else if(
                            this.state.four.indexOf(index) != -1
                        ){
                            return <span><Tag type="danger">{this.state.data[index].one}</Tag></span>
                        }
                        else{
                            return <span>{this.state.data[index].one}</span>
                        }
                    }
                },
                {
                    prop: "two",
                    width: 100,
                    render: (row, column,index)=>{
                        if(
                            this.state.one.indexOf(index) != -1){
                            return <span><Tag type="primary">{this.state.data[index].two}</Tag></span>
                        }else if(
                            this.state.two.indexOf(index) != -1
                        ){
                            return <span><Tag type="success">{this.state.data[index].two}</Tag></span>
                        }else if(
                            this.state.four.indexOf(index) != -1
                        ){
                            return <span><Tag type="danger">{this.state.data[index].two}</Tag></span>
                        }
                        else{
                            return <span>{this.state.data[index].two}</span>
                        }
                    }
                },
                {
                    prop: "three",
                    width: 100,
                    render: (row, column,index)=>{
                        if(
                            this.state.one.indexOf(index) != -1
                        ){
                            return <span><Tag type="primary">{this.state.data[index].three}</Tag></span>
                        }else if(
                            this.state.two.indexOf(index) != -1
                        ){
                            return <span><Tag type="success">{this.state.data[index].three}</Tag></span>
                        }else if(
                            this.state.three.indexOf(index) != -1
                        ){
                            return <span><Tag type="warning">{this.state.data[index].three}</Tag></span>
                        }
                        else{
                            return <span>{this.state.data[index].three}</span>
                        }
                    }
                },
                {
                    prop: "four",
                    width:100,
                    render: (row, column,index)=>{
                        if(
                            this.state.two.indexOf(index) != -1
                        ) {
                            return <span><Tag type="success">{this.state.data[index].four}</Tag></span>
                        }else if(
                            this.state.three.indexOf(index) != -1
                        ){
                            return <span><Tag type="warning">{this.state.data[index].four}</Tag></span>
                        }
                        else if(
                            this.state.four.indexOf(index) != -1
                        ){
                            return <span><Tag type="danger">{this.state.data[index].four}</Tag></span>
                        }
                        else{
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
            one:[],
            two:[],
            three:[],
            four:[],
            dialogVisible: false
        }
    }
    componentWillMount(){
        axios.get(`http://47.98.61.110//get`)
            .then(res => {
                const data = res.data;
                this.setState({data: data});
                var maxInOne = 1;
                var maxInTwo = 1;
                var maxInThree = 1;
                var maxInFour = 1;
                for(var i = 0;i < data.length ; i++){
                    var tempMaxOne = 1;
                    var tempMaxTwo = 1;
                    var tempMaxThree = 1;
                    var tempMaxFour = 1;
                    var tempOne = [i];
                    var tempTwo = [i];
                    var tempThree = [i];
                    var tempFour = [i];
                    var i1 = [this.state.data[i].one,this.state.data[i].two,this.state.data[i].three];
                    var i2 = [this.state.data[i].two,this.state.data[i].three,this.state.data[i].four];
                    var i3 = [this.state.data[i].one,this.state.data[i].three,this.state.data[i].four];
                    var i4 = [this.state.data[i].one,this.state.data[i].two,this.state.data[i].four];
                    for(var j = ( i + 1 );j < data.length ; j++){
                        var j1 = [this.state.data[j].one,this.state.data[j].two,this.state.data[j].three];
                        var j2 = [this.state.data[j].two,this.state.data[j].three,this.state.data[j].four];
                        var j3 = [this.state.data[j].one,this.state.data[j].three,this.state.data[j].four];
                        var j4 = [this.state.data[j].one,this.state.data[j].two,this.state.data[j].four];
                        if(
                            this.isSame(i1,j1)
                        ){
                            tempMaxOne +=1;
                            tempOne.push(j);
                        }
                        if(
                            this.isSame(i2,j2)
                        ){
                            tempTwo.push(j);
                            tempMaxTwo +=1;
                        }
                        if(
                            this.isSame(i3,j3)
                        ){
                            tempThree.push(j);
                            tempMaxThree += 1;
                        }
                        if(
                            this.isSame(i4,j4)
                        ){
                            tempFour.push(j);
                            tempMaxFour += 1;
                        }
                    }
                    if(maxInOne < tempMaxOne){
                        this.state.one = tempOne;
                        maxInOne = tempMaxOne;
                    }
                    if(maxInTwo < tempMaxTwo){
                        this.state.two = tempTwo;
                        maxInTwo = tempMaxTwo;
                    }
                    if(maxInThree < tempMaxThree){
                        this.state.three = tempThree;
                        maxInThree = tempMaxThree;
                    }
                    if(maxInFour < tempMaxFour){
                        this.state.four = tempFour;
                        maxInFour = tempMaxFour;
                    }
                }
            })
            .catch(function (response) {
                console.log(response);
            })
    }
    isSame(a,b){
        a.sort(this.compareFunction);
        b.sort(this.compareFunction);
        for(var i=0; i < a.length ;i++){
            if(
                a[i] != b[i]
             ){
                return false;
            }
        }
        return true;
    }
    compareFunction (a, b) {
        if (a < b) {
            return -1; // a排在b的前面
        }
        else if (a > b) {
            return 1; // a排在b的后面
        }
        else {
            return 0; // a和b的位置保持不变
        }
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

export default threeNum;