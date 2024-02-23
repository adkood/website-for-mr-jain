import React from 'react';

const Frame = ({ name, image }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'whitesmoke',
                padding: '5px',
                borderRadius: '8px',
                boxShadow: '1px 2px 5px #4F2F1C',
                overflow: 'hidden',
                fontFamily: "Public Sans, sans-serif",
            }}
        >
            <div
                style={{
                    height: '90%',
                    width: '100%',
                }}
            >
                <img
                    style={{ width: '100%', height: '100%' }}
                    src={`${image}`}
                    alt={name}
                />
            </div>
            <span
                style={{
                    height: "10%",
                    color: '#955935',
                    fontWeight: 'bold',
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "2px"
                }}
            >
                {name}
            </span>
        </div>
    );
};

export default Frame;
