import React from 'react'

const Flex = ({ children, className = "" }) => {
    return (
        <div className={`flex justify-between ${className}`}>
            {children}
        </div>
    );
}

const FlexRow = ({ children, className = "" }) => {
    return (
        <div className={`flex  ${className}`}>
            {children}
        </div>
    );
}
const FlexCenter = ({ children, className = "" }) => {
    return (
        <div className={`flex items-center  ${className}`}>
            {children}
        </div>
    );
}
export { Flex, FlexRow, FlexCenter }