import React from 'react';
import { useState } from 'react';

export default function AddDependent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [relationship, setRelation] = useState('');

    return (
        <>
            <div className="form-container">
                <form action="" className="dependent-information">
                    <h1>Add Dependent</h1>
                    <div className="card dependent">
                        <label>
                            First Name
                            <input 
                                type="text"
                                placeholder='First Name' 
                                name="first" 
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName}
                            />
                        </label>
                        <label>
                            Last Name
                        <input 
                            type="text" 
                            placeholder='Last Name'
                            name="last"
                            onChange={e => setLastName(e.target.value)} 
                            value={lastName}
                            />
                        </label>
                         <label>
                           Birth Date 
                        <input 
                            type="date" 
                            name="last" 
                            value={birthDate}
                            onChange={e => setBirthDate(e.target.value)}
                            />
                        </label>
                          <label>
                            Relationship
                        <select className='user-input'>
                            <option defaultValue="Value"></option>
                            <option value="son">Son</option>
                            <option value="daughter">Daughter</option>
                            <option value="mother">Mother</option>
                            <option value="father">Father</option>
                            <option value="brother">Brother</option>
                            <option value="sister">Sister</option>
                        </select>
                        </label>
                    </div>
                </form>
            </div>
        </>
    )
}