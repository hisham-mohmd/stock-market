import React from 'react';
import './result.css'

function TableData(props) {
    return (
        <div className="tables">
            <table id="customers">
                <tr>
                    {
                        props.data && props.data.headers.map((header, i) => {
                            if (header !== 'Description') {
                                return (<th key={i}>{header}</th>)
                            }
                        })
                    }
                </tr>
                <tr>
                    {
                        props.data && props.data.headers.map((header, i) => {
                            if (header !== 'Description') {
                                return (<td key={i}>{props.data.contents[header]}</td>)
                            }
                        })
                    }
                </tr>
            </table>
        </div>
    );
}
export default TableData;