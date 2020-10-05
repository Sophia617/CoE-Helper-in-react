import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const ICON = styled.div`
  :hover {
    opacity: .5;
    cursor: pointer;
    }  
   display: inline-block;
`;

const CopyIcon = ({text}) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    //copy to clipboard
  const clickHandler = () =>{
      let tempInput =  document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = text;
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      setShow(!show);
      setTimeout(removeTooltip, 2000)
  };

  const removeTooltip = () => {
      setShow(false);
  };

  return(
      <>
          <OverlayTrigger placement="top"
                          delay={{ show: 250, hide: 200 }}
                          overlay={<Tooltip id="button-tooltip" >
                              Copy me!
                          </Tooltip>}>
              <ICON onClick={clickHandler} ref={target}>
                  <i className="far fa-clipboard"></i>
              </ICON>
          </OverlayTrigger>

          <Overlay
              target={target.current}
              show={show}
              placement="top">
              {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                      &nbsp;Copied! &nbsp;
                  </Tooltip>
              )}
          </Overlay>
      </>
  );

};

export default CopyIcon;