import React, { Component } from 'react';
import './App.css';
import 'element-theme-default';
import {Button} from 'element-react'
class triangleMenu extends Component {
    one(){
        this.props.history.push("/TriangleNum12");
    }
    two(){
        this.props.history.push("/Speculation1");
    }
    two1(){
        this.props.history.push("/TriangleNum12");
    }
    two2(){
        this.props.history.push("/TriangleNum13");
    }
    two3(){
        this.props.history.push("/TriangleNum14");
    }
    two4(){
        this.props.history.push("/TriangleNum23");
    }
    two5(){
        this.props.history.push("/TriangleNum24");
    }
    two6(){
        this.props.history.push("/TriangleNum34");
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

export default triangleMenu;