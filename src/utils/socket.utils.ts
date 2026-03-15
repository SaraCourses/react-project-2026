import { io } from 'socket.io-client';

export const socket = io('http://localhost:8000/some-id', {
  autoConnect: false,
  transports: ['websocket'],
});
