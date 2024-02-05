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
                overflow: 'hidden', // Ensure the image doesn't overflow
            }}
        >
            <div
                style={{
                    height: '90%',
                    width: '100%',
                }}
            >
                <img
                    style={{ width: '100%', height: '100%'}}
                    src={`${image}`}
                    alt={name} // Set a meaningful alt text
                />
            </div>
            <span
                style={{
                    height: "10%",
                    color: '#955935',
                    fontWeight: 'bold',
                    // border: "1px solid",
                    display: "flex",
                    alignItems: "center",
                    // textAlign: "center",
                    fontFamily: `'Julius Sans One', sans-serif`,
                }}
            >
                {name}
            </span>
        </div>
    );
};

export default Frame;
