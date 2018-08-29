import React, { Component } from 'react';
import './App.css';
import 'element-theme-default';
import {Button} from 'element-react'
class threeNumMenu extends Component {
    one(){
        this.props.history.push("/TriangleNum12");
    }
    two(){
        this.props.history.push("/Speculation1");
    }
    threeVariation1(){
        this.props.history.push("/ThreeVariation1");
    }
    threeVariation2(){
        this.props.history.push("/ThreeVariation2");
    }
    threeVariation3(){
        this.props.history.push("/ThreeVariation3");
    }
    threeVariation4(){
        this.props.history.push("/ThreeVariation4");
    }
    three(){
        this.props.history.push("/ThreeVariation1");
    }
    /*<header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">彩票</h1>
 </header>*/
    render() {
        return (
            <div className="App">
                <Button type="primary" onClick={this.one.bind(this)}>推断表一</Button>
                <Button type="primary" onClick={this.two.bind(this)}>推断表二</Button>
                <Button type="primary" onClick={this.three.bind(this)}>三个数字</Button>
                <br/>
                <br/>
                <Button type="primary" onClick={this.threeVariation1.bind(this)}>一二三列变异</Button>
                <Button type="primary" onClick={this.threeVariation2.bind(this)}>一二四列变异</Button>
                <Button type="primary" onClick={this.threeVariation3.bind(this)}>一三四列变异</Button>
                <Button type="primary" onClick={this.threeVariation4.bind(this)}>二三四列变异</Button>
            </div>
        );
    }
}

export default threeNumMenu;