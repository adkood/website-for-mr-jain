import React from 'react';

const Frame = ({width, height, name, image}) => {
    return (
        <div style={{ width: `${width}`, height: `${height}`, display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column", backgroundColor: "whitesmoke",padding: "5px", borderRadius: "8px", boxShadow: "1px 2px 5px #4F2F1C"}}>
            <img style={{height: `${height}`, width: `${width}` }} src={image} alt={name} />
            <span style={{ margin: "10px", color: '#955935', fontWeight: "bold", fontFamily: `'Julius Sans One', sans-serif`}}>{name}</span>
        </div>
    );
}

export default Frame;
