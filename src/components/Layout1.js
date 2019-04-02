import React from 'react';
import Nav from './Nav';

const Layout1 = (props) => {

    const gridContainer = {
        display: 'grid',
        gridGap: '5px',
        gridAutoRows: 'minmax(50px, auto)',
        gridAutoColumns: 'minmax(50px, 250px)',
        gridTemplateAreas:`
        "header header header header header"
        "nav main main main main"
        "footer footer footer footer footer"
        `
    }
    
    const headerArea = {
        gridArea: 'header',
        textAlign: 'center',
        padding: '5px 0',
        backgroundColor: '#e5e5e5'
    }

    const footerArea = {
        gridArea: 'footer',
        textAlign: 'center',
        padding: '5px 0',
        backgroundColor: '#e5e5e5'
    }

    const navArea = {
        gridArea: 'nav',
        backgroundColor: '#e5e5e5'
    }

    const mainArea = {
        gridArea: 'main'
    }

    return (
        <div style={gridContainer}>
            <div style={headerArea}>HEADER</div>
            <div style={navArea}><Nav notes={props.notes} /></div>
            <div style={mainArea}>MAIN</div>
            <div style={footerArea}>FOOTER</div>
        </div>
    );
}

export default Layout1;