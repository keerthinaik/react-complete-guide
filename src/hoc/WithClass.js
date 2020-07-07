import React from 'react'

// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

// another syntax for creating hoc
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
};

export default withClass;