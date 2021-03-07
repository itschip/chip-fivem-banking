import './sv_main';
import { Server } from 'esx.js';

// gg any other framework :man_shrugging:
export let ESX: Server = null;

emit('esx:getSharedObject', (obj: Server) => (ESX = obj));
