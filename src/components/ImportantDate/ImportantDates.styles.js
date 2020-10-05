import styled from 'styled-components';

// CSS for Important Date component using styled
 const Wrapper= styled.section`
  // global
  padding: 1em;
  padding-top: 4em;
  padding-bottom: 4em;
  background: #bb9f99;
  
  // navigation tab
  nav.nav-tabs {
    color: #8c8c8c;
    background: gainsboro;
  }
  a.nav-link {
   color: #8c8c8c;
  }

  //card - course List CalB, CalC, CalD
  .card {
   background: #484950; 
  }
  
  button.btn-link {
   color: gainsboro;
   :hover {
     text-decoration: none;
     color: #c5b7b0;
   }
  }
  
  .card-body {
   background: #bb9f99;
   border-color: transparent;
   color:#484950;
  }
  
  // Alert message with link (going to external page)
  a.alert-link {
  background: transparent;
  text-decoration-line: underline;
  }
`;

export default Wrapper;
