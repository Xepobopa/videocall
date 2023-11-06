import { io } from 'socket.io-client'

const socket = io("https://videcall-server.vercel.app/");

export default socket