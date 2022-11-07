import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ResidentsInfo = ({ url }) => {
    

    const [characterinfo, setCharacterinfo] = useState({})
    const [color,setColor]=useState("green")
    useEffect(() => {
        axios.get(url).then(res => setCharacterinfo(res.data))
        if (characterinfo.status === "Dead") {
            setColor("red")
        } else if (characterinfo.status === "Alive") {
            setColor("greenyellow")

        } else if (characterinfo.status === "unknown") {
            setColor("grey")
        }
    
    }, [url,characterinfo.status])
   
   
    
    

    return (
        <li className='Card'>
            <img src={characterinfo.image} alt="" />
            <div className='status'>
                <h3 >{characterinfo.status}</h3>
                <div style={{ backgroundColor:color}}></div>
            </div>
            <h3>Name: {characterinfo.name}</h3>
            <h3>Origin: {characterinfo.origin?.name}</h3>
            <h3>Episodes where appear: {characterinfo.episode?.length}</h3>
        </li>
    );
};

export default ResidentsInfo;