import React from 'react';

function DropDown(props) {
    return (
        <div className="dropdown">
            <button className="btn border dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.selectText}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {props.data.map((dropData, i) => {
                    return (
                        < a className="dropdown-item" key={i} href="#">{dropData}</a>
                    );
                })
                }
            </div>
        </div >
    );
}
export default DropDown;