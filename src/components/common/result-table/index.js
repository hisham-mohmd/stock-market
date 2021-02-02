import React from 'react';
import './result.css'

function TableData(props) {
    return (
        <table id="customers">
            <tr>
                {
                    props.data && props.data.headers.map((header, i) => {
                        if (header !== 'Description' && i < 6) {
                            return (<th key={i}>{header}</th>)
                        }
                    })
                }
            </tr>
            <tr>
                {
                    props.data && props.data.headers.map((header, i) => {
                        if (header !== 'Description' && i < 6) {
                            return (<td key={i}>{props.data.contents[header]}</td>)
                        }
                    })
                }
            </tr>
        </table>
    );
}
export default TableData;