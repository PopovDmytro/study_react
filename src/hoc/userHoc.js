import React from 'react';

const UserHoc = (WrapperComponent, WrapperComponent2, arg1) => {
    return (props) => (
        <div>
            {/*{console.log(props)}*/}
            {arg1}
            <WrapperComponent {...props} />
            <WrapperComponent2 {...props} />
        </div>
    );
};

export default UserHoc;
