import React, {Fragment} from 'react';

import classes from 'Layout.scss';

const Layout = (props) => {
  return (
    <Fragment>
      <div>Toolbar , SideBar , Backdrop</div>
      <main className={classes.content}>
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;