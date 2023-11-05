import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [localStream, setLocalStream] = useState<MediaStream>();
    const iceServersConfig =
        [
            {
                urls: "stun:stun.stunprotocol.org"
            },
            {
                urls: 'stun:stun.l.google.com:19302',
            },
            {
                urls: 'stun:stun1.l.google.com:19302',
            },
            {
                urls: 'stun:stun2.l.google.com:19302',
            },
            {
                urls: 'turn:numb.viagenie.ca',
                credential: 'muazkh',
                username: 'webrtc@live.com'
            },
        ]

    const config = {
        audio: true,
        video: {
            frameRate: 30
        }
    }

    useEffect(() => {
        async function init() {
            setLocalStream(await navigator.mediaDevices.getUserMedia(config));
        }

        init()
    }, []);


    return (
        <div className="App">
            Hello!
        </div>
    );
}

export default App;
