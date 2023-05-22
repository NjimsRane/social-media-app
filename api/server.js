import express from 'express';
import cors from 'cors';

import { db } from './connect.js';

db.connect(err => {
    if (err) throw err;
    else {
        console.log('Connected');
    }
});
