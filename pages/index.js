import * as React from 'react';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';



const markdown = `

## Documentation

### Material UI

Visit [https://mui.com/material-ui/](https://mui.com/material-ui/) to view the full documentation.


### Joy UI

Visit [https://mui.com/joy-ui/getting-started/](https://mui.com/joy-ui/getting-started/) to view the full documentation.

**Note**: Joy UI is still in beta.
We are adding new components regularly and you're welcome to contribute!

### Base UI

Visit [https://mui.com/base-ui/](https://mui.com/base-ui/) to view the full documentation.

**Note**: Base UI is still in beta.
We are adding new components regularly and you're welcome to contribute!

### MUI System

Visit [https://mui.com/system/getting-started/](https://mui.com/system/getting-started/) to view the full documentation.

## Sponsors

### Diamond 💎
`;
  


const Index = () => {
    

    const Accordion = styled((props) => (
      <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&::before': {
        display: 'none',
      },
    }));
    
    const AccordionSummary = styled((props) => (
      <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
      />
    ))(({ theme }) => ({
      
      flexDirection: 'row-reverse',
      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
      },
      '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
      },
    }));
    
    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
      padding: theme.spacing(2),
    }));

    return <div>
      <header className='header'>
        <Grid container spacing={2}>
            <Grid item md={10}>
              <div className='logo'>
                <div className='img'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 36 32" fill="none" className="css-1170n61"><path fillRule="evenodd" clipRule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg></div>
                <h1 className='title'>Material UI</h1>
              </div>
            </Grid>
            
            <Grid item md={2}>
              <div className="tool-bar">
                <div className='search-button'>
                  <SearchIcon />
                  Search...
                  <div className="search-sign">⌘K</div>
                </div>
                <a className='btn-login'><AccountCircleIcon /></a>
              </div>
              
            </Grid>
          
        </Grid>
      </header>
      
      <article className='content'>
        <Grid className='left-nav' container spacing={0}>
              <Grid item md={3}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowForwardIosSharpIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 6 }}>
                        <ListItemText primary="Starred" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 6 }}>
                        <ListItemText primary="Starred" />
                      </ListItemButton>
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowForwardIosSharpIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>Accordion 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 6 }}>
                        <ListItemText primary="Starred" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 6 }}>
                        <ListItemText primary="Starred" />
                      </ListItemButton>
                    </List>
                  </AccordionDetails>
                </Accordion>
                
              </Grid>
              <Grid item md={9}>
                <div className="area">
                  <ReactMarkdown children={markdown} />
                </div>
              </Grid>
        </Grid>
        
      </article>
      <footer className='footer'>
      版权所有  | ©2008-2024
      </footer>
    
    
      <style jsx>{`
      .header {
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }
      .logo {
        display: flex;
        align-items: center;
        .img {
          display: flex;
          align-items: center;
          padding-right: 10px;
          border-right: 1px solid #ddd;
        }
        .title {
          padding-left: 10px;
          font-size: 18px;
        }
      }
      .tool-bar {
        display: flex;
        justify-content: flex-end;
      }
      .search-button {
        min-height: 34px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0px;
        padding-left: 4.8px;
        padding-right: 4.8px;
        font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        position: relative;
        background-color: rgb(243, 246, 249);
        color: rgb(48, 55, 64);
        font-size: 0.875rem;
        border: 1px solid rgb(218, 226, 237);
        border-radius: 12px;
        cursor: pointer;
        transition-property: all;
        transition-duration: 150ms;
        box-shadow: rgb(229, 234, 242) 0px -1px 1px inset, rgba(229, 234, 242, 0.6) 0px 1px 0.5px;
      }
      
      .search-sign {
        font-size: 0.75rem;
        font-weight: bold;
        line-height: 20px;
        margin-left: 4px;
        border: 1px solid rgb(218, 226, 237);
        background-color: rgb(255, 255, 255);
        padding: 0px 4px;
        border-radius: 7px;
      }
      .btn-login {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
        background-color: transparent;
        outline: 0;
        border: 0;
        margin: 0 0 0 15px;
        border-radius: 0;
        padding: 0;
        cursor: pointer;
        user-select: none;
        vertical-align: middle;
        text-decoration: none;
        color: inherit;
        transition: all 100ms ease-in;
        text-align: center;
        flex: 0 0 auto;
        font-size: 12px;
        padding: 8px;
        border-radius: 50%;
        overflow: visible;
        color: rgba(0, 0, 0, 0.54);
        transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        color: #0073E6;
        height: 34px;
        width: 34px;
        border: 1px solid;
        border-color: #DAE2ED;
      }
      .content {
        border-bottom: 1px solid #ddd;

        
        .area {
          min-height: 80vh;
          padding: 20px;
          border-left: 1px solid #ddd;
        }

      }
      .footer {
        
        padding: 20px 0;
        text-align: center;
      }

      
      
    `}</style>
    
    
    </div>
    


}

export default Index

