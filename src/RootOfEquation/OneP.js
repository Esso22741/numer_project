import React from 'react';
import { Component } from 'react';
import './../index.css';
import { Row, Col, Container } from 'reactstrap';
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';
import { Button, Table } from 'antd';
import { compile } from 'mathjs';



const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",

    },
    {
        title: "X",
        dataIndex: "x",

    },
    {
        title: "Error",
        dataIndex: "error",

    }
];
var soruce = []
var fx = " ";
class OneP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fx: " ",
            x: 0,
            dataTables: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.Onepoint = this.Onepoint.bind(this);
    }
    Onepoint(x) {
        let sum = parseFloat(0.000000);
        let X = [];
        let Er = [];
        let i = 0;
        do {
            X[i] = x;
            let xnew = this.func(x);
            sum = this.error(xnew, x);
            sum = Math.abs(sum).toFixed(6);
            Er[i] = sum;
            i++;
            x = xnew;

        } while (sum > 0.000001);
        this.createTable(X, Er);
        this.setState({
            dataTables: true
        })
    }
    func(X) {
        var expr = compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    error(xnew, xold) {
        return Math.abs((xnew - xold) / xnew);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    createTable(x, error) {
        soruce = []
        for (var i = 0; i < x.length; i++) {
            soruce.push({
                iteration: i + 1,
                x: x[i],
                error: error[i]
            });
        }

    }
    render() {
        return (
            <div align="left" className="bg-Npage1">
                <div align="left">
                <p2>One-Point Iteration</p2>
                <Container>
                    <Row>
                        <Col>
                            <div align="left">
                                <label><p1> Fx </p1></label><br />
                                <input
                                    name="fx"
                                    onChange={this.handleChange}
                                />
                                <br />
                                <label><p1> X</p1></label><br />
                                <input
                                    name="x"
                                    onChange={this.handleChange}
                                />
                                <br /> <br />
                                <Button id="submit_button" onClick={
                                    () => this.Onepoint(parseFloat(this.state.x))
                                }
                                    style={{ background: "#ffffff", color: "red", fontSize: "20px", textAlign: "center" }}>Submit</Button>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Table columns={columns} dataSource={soruce} />
                            </div >
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div align='left'>
                                <LineChart width={500} height={250} data={soruce}>
                                    <Line type="monotone" dataKey="error" stroke="#ffffff" />
                                    <CartesianGrid stroke="#ccc" />
                                    <XAxis dataKey="error" />
                                    <YAxis />
                                </LineChart>
                            </div>
                        </Col>
                    </Row>>
                </Container>
                </div>
            </div>
        );
    }
}
export default OneP;