import React, { useState } from 'react';
import History from './History';

export default function Front() {
    const [tran, setTran] = useState({
        text : '',
        amount : '',
        key : ''
    });

    const [trans, setTrans] = useState([]);

    const [inco, setInco] = useState([0]);
    const [expe, setExpe] = useState([0]);

    const addText = e => {
        setTran({
            text : e.target.value,
            amount : tran.amount,
            key : Date()
        });
    }

    const addAmount = e => {
        setTran({
            text : tran.text,
            amount : e.target.value,
            key : Date()
        });
    }

    const showInc = () => {
        const i_amount = tran.amount;
        let num = Number(i_amount);
        inco.push(num);
        setInco(inco);
        trans.push(tran);
        setTrans(trans);
        setTran({
        text : '',
        amount : '',
        key : ''
        });
        console.log(trans);
        };
        
        const showExp = () => {
        const e_amount = tran.amount;
        let num = Number(e_amount);
        expe.push(num);
        setExpe(expe);    
        trans.push(tran);
        // console.log(expe);
        setTrans(trans);
        setTran({
        text : '',
        amount : '',
        key : ''
        });
        console.log(trans);
        };


    // const incom = inco.map(inc => {
        var income = 0;
        income = inco.reduce((income, num) => income + num);
        // income = inco.map(inc => income + inc); 
    // return ( income )} );
    // console.log(incom);
    
    var expence = 0;
    expence = expe.reduce((expence, exp1) => expence + exp1);

    var bal = income - expence;

    return (
        <div className='container' >
        <div className='row'>
        <div className='col-sm-6'>
        <div className='row' >
            <h1 className='text'> Your Current Balance: <br /> PKR: {bal} </h1>
            <div className='col-sm-6'>
                <h3 className='text'>Income <br /> PKR: {income} </h3>
            </div>
            <div className='col-sm-6'>
                <h3 className='text'> Expence <br /> PKR: {expence} </h3>
            </div>
            <h1 className='text-center'> Create Transactions </h1>
            <div>
            <input type='text' className='text inp' placeholder='Description' name='text' onChange={addText} value={tran.text} />
            </div>
            <br />
            <input type='text' className='text inp' placeholder='Amount' onChange={addAmount} value={tran.amount} />
            <br />
            <br />
            <input type='button' className='bt text' value='ADD INCOME' onClick={showInc} />
            <input type='button' className='bt text' value='ADD EXPENCE' onClick={showExp} />
            </div>
            </div>
            <div className='col-sm-6'>
        <History name={trans} />
      </div>
      </div>
         </div>
    )
}
