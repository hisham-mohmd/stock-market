import React, { Component } from 'react';
import axios from "../../axios";
import './index.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class preferences extends Component {
    state = {
        data: ['IBM', 'INFOSYS', ''],
        setSelected: '',
        options: [],
        selected: ''
    }
    componentDidMount() {
        this.getCities();
    }
    getCities = async () => {
        await axios.get('/report/cities').then(response => {
            if (response.status === 200) {
                console.log(response);
                // this.setState({ loading: false, cities: response.data });
            } else {
                // this.setState({ loading: false, cities: [] });
            }
        });
    }
    render() {
        const { data, setSelected, options, selected } = this.state
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <Typeahead
                        id="basic-example"
                        onChange={setSelected}
                        options={options}
                        placeholder="Choose a state..."
                        selected={selected}
                    />
                </div>
            </div>
        );
    }
}
export default preferences;