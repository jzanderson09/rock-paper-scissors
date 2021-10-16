import React, { useState } from "react";

const Computer = props => {
    const [loadingMsg, setLoadingMsg] = useState('');
    let loadingHandle;
    // Loading message with dots:
    const loadingMessage = () => {
        switch (loadingMsg) {
            case 'Loading':
                setLoadingMsg('Loading.');
                break;
            case 'Loading.':
                setLoadingMsg('Loading..');
                break;
            case 'Loading..':
                setLoadingMsg('Loading...');
                break;
            default:
                setLoadingMsg('Loading');
        }
    };

    if (!props.play && props.matchOver) {
        return (
            <div className="player">
                <h3 className="banner">Computer!</h3>
            </div>
        );
    }
    else if (!props.play && !props.matchOver) {
        loadingHandle = setTimeout(loadingMessage, 200);
        return (
            <div className="player">
                <h3 className="banner">Computer!</h3>
                <h4 id="loading">{loadingMsg}</h4>
            </div>
        );
    }
    else {
        clearTimeout(loadingHandle);
        return (
            <div className="player">
                <h3 className="banner">Computer!</h3>
                <img
                    className="choice-img"
                    src={props.choice.src} 
                    alt="computer choice" />
            </div>
        );
    }
};

export default Computer;