import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Navbar from '../components/navbar.js';
import Chat from '../components/Chat.jsx';
import { Container } from '@mui/material';

function DM() {
    return (
    <div className='dmContainer'>
    <Fragment>
      <Chat />
    </Fragment>
    </div>

    );
}

export default DM;