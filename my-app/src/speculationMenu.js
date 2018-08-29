import React, { Component } from 'react';
import './App.css';
import 'element-theme-default';
import {Button} from 'element-react'
class speculationMenu extends Component {
    one(){
        this.props.history.push("/TriangleNum12");
    }
    two(){
        this.props.history.push("/Speculation1");
    }
    two1(){
        this.props.history.push("/Speculation1");
    }
    two2(){
        this.props.history.push("/Speculation2");
    }
    two3(){
        this.props.history.push("/Speculation3");
    }
    two4(){
        this.props.history.push("/Speculation4");
    }
    three(){
        this.props.history.push("/ThreeVariation1");
    }
    render() {
        return (
            <div className="App">
                <Button type="primary" onClick={this.one.bind(this)}>推断表一</Button>
                <Button type="primary" onClick={this.two.bind(this)}>推断表二</Button>
                <Button type="primary" onClick={this.three.bind(this)}>三个数字</Button>
                <br/>
                <br/>
                <Button type="primary" onClick={this.two1.bind(this)}>一列</Button>
                <Button type="primary" onClick={this.two2.bind(this)}>二列</Button>
                <Button type="primary" onClick={this.two3.bind(this)}>三列</Button>
                <Button type="primary" onClick={this.two4.bind(this)}>四列</Button>

            </div>
        );
    }
}

export default speculationMenu;