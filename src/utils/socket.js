import { io } from 'socket.io-client'

const socket = io("http://192.168.1.114:5000/");

console.log('start')
socket.emit('start', "hello");

export default socket