import React from 'react';

const Frame = ({ width = '200px', height = '200px', name, image }) => {
    return (
        <div
            style={{
                width: width,
                height: height,
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'whitesmoke',
                padding: '5px',
                borderRadius: '8px',
                boxShadow: '1px 2px 5px #4F2F1C',
            }}
        >
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    background: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <span
                style={{
                    margin: '10px',
                    color: '#955935',
                    fontWeight: 'bold',
                    fontFamily: `'Julius Sans One', sans-serif`,
                }}
            >
                {name}
            </span>
        </div>
    );
};

export default Frame;
