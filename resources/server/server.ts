import './sv_main';
import { Server } from 'esx.js';

export let ESX: Server = null;

emit('esx:getSharedObject', (obj: Server) => (ESX = obj));
