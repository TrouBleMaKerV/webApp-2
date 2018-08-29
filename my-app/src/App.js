import React, { Component } from 'react';
import './App.css';
import 'element-theme-default';
import axios from 'axios'
import {Table,Button,Tag,Form,Input,Dialog} from 'element-react'
class App extends Component {
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
                        if (this.state.data[index].one == this.state.one)  {
                            return <span><Tag type="primary">{this.state.data[index].one}</Tag></span>
                        }else{
                            return <span>{this.state.data[index].one}</span>
                        }
                    }
                },
                {
                    prop: "two",
                    width: 100,
                    render: (row, column,index)=>{
                        if(this.state.data[index].two == this.state.two){
                            return <span><Tag type="success">{this.state.data[index].two}</Tag></span>
                        }else{
                            return <span>{this.state.data[index].two}</span>
                        }
                    }
                },
                {
                    prop: "three",
                    width: 100,
                    render: (row, column,index)=>{
                        if(this.state.data[index].three == this.state.three){
                            return <span><Tag type="warning">{this.state.data[index].three}</Tag></span>
                        }else{
                            return <span>{this.state.data[index].three}</span>
                        }
                    }
                },
                {
                    prop: "four",
                    width:100,
                    render: (row, column,index)=>{
                        if(this.state.data[index].four == this.state.four) {
                            return <span><Tag type="danger">{this.state.data[index].four}</Tag></span>
                        }else{
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
            one:0,
            two:0,
            three:0,
            four:0,
            dialogVisible: false
        }
    }
    onChange(key, value) {
        this.setState({
            form: Object.assign(this.state.form, { [key]: value })
        });
    }
    one(){
        this.props.history.push("/TriangleNum12");
    }
    two(){
        this.props.history.push("/TriangleNum12");
    }
    three(){
        this.props.history.push("/ThreeVariation1");
    }
    componentWillMount() {
        axios.get(`http://47.98.61.110//get`)
            .then(res => {
                const data = res.data;
                this.setState({data: data});

                var maxInOne = 1;
                var maxInTwo = 1;
                var maxInThree = 1;
                var maxInFour = 1;
                for(var j = 0; j <10;j++){
                    var tempMaxOne = 0;
                    var tempMaxTwo = 0;
                    var tempMaxThree = 0;
                    var tempMaxFour = 0;
                    for(var i = 0;i < data.length ; i++){
                        if(data[i].one == j){
                            tempMaxOne += 1;
                        }else if(data[i].two == j){
                            tempMaxTwo += 1;
                        }else if(data[i].three == j){
                            tempMaxThree += 1;
                        }else if(data[i].four == j){
                            tempMaxFour += 1;
                        }
                    }
                    if(maxInOne < tempMaxOne){
                        this.state.one = j;
                        maxInOne = tempMaxOne;
                    }else if(maxInTwo < tempMaxTwo){
                        this.state.two = j;
                        maxInTwo = tempMaxTwo;
                    }else if(maxInThree < tempMaxThree){
                        this.state.three = j;
                        maxInThree = tempMaxThree;
                    }else if(maxInFour < tempMaxFour){
                        this.state.four = j;
                        maxInFour = tempMaxFour;
                    }
                }
            })
            .catch(function (response) {
                console.log(response);
            })
    }
    add(){
        axios.post(`http://47.98.61.110//add`,{
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
    rowClassName(row, index) {
        if (row === 1) {
            return 'info-row';
        } else if (index === 3) {
            return 'positive-row';
        }

        return '';
    }
    render() {
        return (
            <div className="App">
                <Button type="primary" onClick={this.one.bind(this)}>推断表一</Button>
                <Button type="primary" onClick={this.two.bind(this)}>推断表二</Button>
                <Button type="primary" onClick={this.three.bind(this)}>三个数字</Button>
                <br/>
                <br/>
                <Form inline={true} model={this.state.form} rules={this.state.rules} className="demo-form-inline">
                    <Form.Item className="item" prop="one">
                        <Input value={this.state.form.one}  onChange={this.onChange.bind(this, 'one')}></Input>
                    </Form.Item>
                    <Form.Item className="item" prop="two">
                        <Input value={this.state.form.two}  onChange={this.onChange.bind(this, 'two')}></Input>
                    </Form.Item>
                    <Form.Item className="item" prop="three">
                        <Input value={this.state.form.three}  onChange={this.onChange.bind(this, 'three')}></Input>
                    </Form.Item>
                    <Form.Item className="item" prop="four">
                        <Input value={this.state.form.four}  onChange={this.onChange.bind(this, 'four')}></Input>
                    </Form.Item>
                    <Form.Item >
                        <Button  type="primary" onClick={ () => this.setState({ dialogVisible: true }) }>添加</Button>
                    </Form.Item>
                </Form>
                <Dialog
                    title="确认添加"
                    size="tiny"
                    visible={ this.state.dialogVisible }
                    onCancel={ () => this.setState({ dialogVisible: false }) }
                    lockScroll={ false }
                >
                    <Dialog.Body>
                        <span>{this.state.form.one} {this.state.form.two} {this.state.form.three} {this.state.form.four}</span>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={ () => this.setState({ dialogVisible: false}) }>取消</Button>
                        <Button type="primary" onClick={ this.add.bind(this)}>确定</Button>
                    </Dialog.Footer>
                </Dialog>
                <br/>
                <div className="Table">
                    <Table
                        style={{width: '100%'}}
                        rowClassName={this.rowClassName.bind(this)}
                        columns={this.state.columns}
                        data={this.state.data}
                        border={true}
                    />
                </div>
            </div>
        );
    }
}

export default App;
