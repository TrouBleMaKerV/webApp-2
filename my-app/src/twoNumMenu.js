import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import 'element-theme-default';
import {Table,Button,Tag,Form,Input,Dialog} from 'element-react'
class twoNumMenu extends Component {
    one(){
        this.props.history.push("/OneNum");
    }
    two(){
        this.props.history.push("/TwoNum1");
    }
    two1(){
        this.props.history.push("/TwoNum1");
    }
    two2(){
        this.props.history.push("/TwoNum2");
    }
    two3(){
        this.props.history.push("/TwoNum3");
    }
    two4(){
        this.props.history.push("/TwoNum4");
    }
    two5(){
        this.props.history.push("/TwoNum5");
    }
    two6(){
        this.props.history.push("/TwoNum6");
    }
    three(){
        this.props.history.push("/ThreeNum");
    }
    render() {
        return (
            <div className="App">
                <Button type="primary" onClick={this.one.bind(this)}>一个数字</Button>
                <Button type="primary" onClick={this.two.bind(this)}>两个数字</Button>
                <Button type="primary" onClick={this.three.bind(this)}>三个数字</Button>
                <br/>
                <br/>
                <Button type="primary" onClick={this.two1.bind(this)}>一二列</Button>
                <Button type="primary" onClick={this.two2.bind(this)}>一三列</Button>
                <Button type="primary" onClick={this.two3.bind(this)}>一四列</Button>
                <Button type="primary" onClick={this.two4.bind(this)}>二三列</Button>
                <Button type="primary" onClick={this.two5.bind(this)}>二四列</Button>
                <Button type="primary" onClick={this.two6.bind(this)}>三四列</Button>
            </div>
        );
    }
}

export default twoNumMenu;