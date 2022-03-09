import React, { useState } from 'react';

const TSubAssinmentItem = (props) => {
    const {title, gradePoint,comment, email, _id} = props.item;
    const [edit, setEdit] = useState(false);
    const hendleEdit = () =>{
        setEdit(true)
    }
    const [update, setUpdate] = useState({
        gradePoint:'',
        comment: ''
    });
    const hendleChange = (e) =>{
        const oldValue = {...update}
        oldValue[e.target.name] = e.target.value
        setUpdate(oldValue)
    };
    const hendleEditAssinment = (id) =>{
        console.log(id);
        fetch(`http://localhost:5000/submitassinment/${id}`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <tbody>
        <tr>
            <td>{title}</td>
            <td>{email}</td>
            { edit === false?
                <td>{gradePoint}</td>
            : 
            <td><input name='gradePoint' onChange={hendleChange} type="text" /></td>
            }
            { edit === false?
                <td>{comment}</td>
            : 
            <td><input name='comment' onChange={hendleChange} type="text" /></td>
            }
           
            <div>
            <td onClick={ hendleEdit} className='btn btn-danger text-info'> Edit</td>
            {
                edit === true?
                <td onClick={ (id)=> hendleEditAssinment(_id)} className='btn btn-danger text-info'> Update</td>:
                null

            }
            {
                edit === true?
                <td onClick={ ()=> setEdit(false)} className='btn btn-danger text-info'> Back</td>: null
            }
            
            </div>
           
        </tr>
    </tbody>
    );
};

export default TSubAssinmentItem;