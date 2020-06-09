import Head from 'next/head';
import Navbar from './Navbar';
import colors from '../css-variables/colors';


const Layout = (props) => (
  <div>
    <Head>
      <title>CodeTunes</title>
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Head>
    <Navbar/>
    {props.children}
    

    <style global jsx>{`
    
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: 'Baloo Thambi 2', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.8em;
        /* background-color: purple; */
        /* background-color: #dd00ff; */
        background-color: #fff;
      }

      .container {
        max-width: 1100px;
        margin: auto;
        overflow: hidden;
      }

      a {
        text-decoration: none;
        color: black;
      }

      button {
        color: white;
        padding: 0.5rem 1rem ;
        border-radius: 5px;
        font-size: 1rem;
        background-color: ${colors.primary};
        border: none;
        cursor: pointer;
      }

      button:hover {
        background-color: #42af44;
      }
    
    `} 
    </style> 
  </div>
)

export default Layout;
