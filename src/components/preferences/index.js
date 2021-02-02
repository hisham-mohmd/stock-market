import React, { Component } from 'react';
import axios from "../../axios";
import './index.css';
import TableData from '../common/result-table'
import { data } from './data'
class preferences extends Component {
    state = {
        selected: null,
        name: null,
        tableData: null,
        loading: false
    }
    getSymbol = async () => {
        this.setState({ loading: true, tableData: null })
        await axios.get('/report/symbol/' + this.state.selected).then(response => {
            if (response.status === 200) {
                this.setData(response.data);
            } else {
                this.setState({ loading: false, tableData: null });
            }
        });
    }
    setData(data) {
        let keys = [];
        Object.keys(data).forEach(function (key) {
            keys.push(key);
        });
        let tableData = {
            headers: keys,
            contents: data
        }
        this.setState({ loading: false, tableData: tableData });
    }
    setSelected = (symbol, name) => {
        this.setState({ selected: symbol, name: name }, () => {
            this.getSymbol();
        })
    }
    render() {
        const { loading, tableData } = this.state
        return (
            <div className="container border">
                <h2>National Stock Exchange</h2>
                <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex flex-column">
                        <label>Select a Company</label>
                        <div className="dropdown">
                            <button className="btn border dropdown-toggle form-control" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.name ? this.state.name : '-Select a Company-'}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {data.map((dropData, i) => {
                                    return (
                                        < a className="dropdown-item" key={i} href="#" onClick={() => this.setSelected(dropData.symbol, dropData.name)}>{dropData.name}</a>
                                    );
                                })
                                }
                            </div>
                        </div >
                    </div>
                    {
                        loading ? <div className="loader"></div> : null
                    }
                    {
                        !loading && tableData ?
                            <TableData data={tableData} /> : <div className="no-data">-No data Available-</div>
                    }
                </div>
            </div>
        );
    }
}
export default preferences;