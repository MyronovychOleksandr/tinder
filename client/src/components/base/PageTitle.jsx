import React from 'react';

const PageTitle = ({children}) => {
    return (
        <h1 className={"text-5xl flex justify-center font-bold"}>
            {children}
        </h1>
    );
};

export default PageTitle;