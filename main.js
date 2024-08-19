let localStream; // Local stream object
let remoteStream; // Remote stream object

let init = async () => {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    document.getElementById('user-1').srcObject = localStream
}

init()