import React from 'react';
import { Component } from 'react';
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
        title: "XL",
        dataIndex: "xl",

    },
    {
        title: "XR",
        dataIndex: "xr",

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
class Bi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fx: " ",
            xl: 0,
            xr: 0,
            dataTables: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.bisection = this.bisection.bind(this);
    }
    bisection(xl, xr) {
        fx = this.state.fx;
        var increaseFunction = false;
        var xm = 0;
        var sum = parseFloat(0.000000);
        var n = 0;
        var data = []
        data['xl'] = []
        data['xr'] = []
        data['x'] = []
        data['error'] = []
        if (this.func(xl) < this.func(xr)) {
            increaseFunction = true;
        }

        do {
            xm = (xl + xr) / 2;
            if (this.func(xm) * this.func(xr) < 0) {
                sum = this.error(xm, xr);
                if (increaseFunction) {
                    xl = xm;
                }
                else {
                    xr = xm;
                }

            }
            else {
                sum = this.error(xm, xl);
                if (increaseFunction) {
                    xr = xm;
                }
                else {
                    xl = xm;
                }
            }
            data['xl'][n] = xl;
            data['xr'][n] = xr;
            data['x'][n] = xm.toFixed(8);
            data['error'][n] = Math.abs(sum).toFixed(8);
            n++;
        } while (Math.abs(sum) > 0.000001);
        this.createTable(data['xl'], data['xr'], data['x'], data['error']);
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
    createTable(xl, xr, x, error) {
        soruce = []
        for (var i = 0; i < xl.length; i++) {
            soruce.push({
                iteration: i + 1,
                xl: xl[i],
                xr: xr[i],
                x: x[i],
                error: error[i]
            });
        }

    }
    render() {
        return (
            <div align="left" className="bg-Npage1" >
                <div align="left">
                <p2>Bisection</p2>
                    <Container>
                        <Row>
                            <Col >
                                <div>
                                    <label><p1> Fx </p1></label><br />
                                    <input
                                        name="fx"
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <label><p1> XL</p1></label><br />
                                    <input
                                        name="xl"
                                        onChange={this.handleChange}
                                    />
                                    <br />
                                    <label><p1> XR </p1></label><br />
                                    <input
                                        name="xr"
                                        onChange={this.handleChange}
                                    />
                                    <br /> <br />
                                    <Button id="submit_button" onClick={
                                        () => this.bisection(parseFloat(this.state.xl), parseFloat(this.state.xr))
                                    }
                                        style={{ background: "#ffffff", color: "red", fontSize: "20px", textAlign: "center" }}>Submit</Button>
                                </div>
                            </Col>

                            <Col xs="auto">
                                <div>
                                    <Table columns={columns} dataSource={soruce} />
                                </div >

                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3">
                                <div>
                                    <LineChart width={500} height={250} data={soruce}>
                                        <Line type="monotone" dataKey="error" stroke="#ffffff" />
                                        <CartesianGrid stroke="#ccc" />
                                        <XAxis dataKey="error" />
                                        <YAxis />
                                    </LineChart>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
export default Bi;