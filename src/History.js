import React from 'react';
// import Front from './Front';

export default function History(props) {
    const his = props.name;
    const dtl = his.map(pro => { return(
       <div> <span className='lft'> {pro.text} : </span> <span className='rit'> PKR:{pro.amount} </span> </div>
    )});
    return (
        <div>
            <h1 className='text'> History </h1>
            <h3> {dtl} </h3>
        </div>
    )
}
