import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ActionMenu from './ActionMenu';

const MobileChecker = ({ row, actions }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
            setIsMobile(isMobileDevice);
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Initialize the value on the first render
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? (
                <ActionMenu row={row} actions={actions} />
            ) : (
                <StyledSpeedDial
                    ariaLabel="SpeedDial playground example"
                    icon={<SpeedDialIcon />}
                    direction="right"
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={action.action}
                        />
                    ))}
                </StyledSpeedDial>
            )}
        </>
    );
};

const StyledSpeedDial = styled(SpeedDial)`
  .MuiSpeedDial-fab {
    background-color: #240439;
    &:hover {
      background-color: #440080;
    }
  }
`;

export default MobileChecker;