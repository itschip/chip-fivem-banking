import { Typography } from '@material-ui/core';
import React from 'react'
import { headerStyles } from './header.styles';
import { BiHomeAlt, BiTransfer } from 'react-icons/bi';
import { GiPiggyBank } from 'react-icons/gi';

function Header() {
  const classes = headerStyles()

  return (
    <div>
      <aside className={classes.root}>
        <section className={classes.details}>
          <div style={{ marginLeft: '12px' }}>
            <Typography 
              style={{ 
                fontWeight: 600, 
                color: '#fff',
                fontSize: '20px' 
              }}
            >
              Christopher Gjelten
            </Typography>
          </div>
        </section>
        <section>
          <ul>
            <li className={classes.items}>
              <span>{<BiHomeAlt size={25}/>}</span>
              <Typography className={classes.itemText}>Home</Typography>
            </li>
            <li className={classes.items}>
              <span>{<GiPiggyBank size={25}/>}</span>
              <Typography className={classes.itemText}>Accounts</Typography>
            </li>
            <li className={classes.items}>
              <span>{<BiTransfer size={25}/>}</span>
              <Typography className={classes.itemText}>Transfer</Typography>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  )
}

export default Header;