import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentsInfo from './ResidentsInfo';
import img from '../public/img'

const Main = ({ name, type, dimension, residents, character }) => {
    const [input, setInput] = useState("")
    const [nuevo, setNuev] = useState(character)
    const [info, setInfo] = useState(true)


    const click = () => {
        setInfo(false)
        axios.get(`https://rickandmortyapi.com/api/location/?name=${input}`).then(res => setNuev(res.data.results))
    }

    console.log(nuevo)
    return (
        <>
            <div className='container-img'>
                <img className='img-main' src={img.ryck} alt="" />

            </div>

            <div className='container'>
                <section className='main-ul'>
                    <article className='arti-dos'>
                        <h2 className='main-name'>{info ? name : nuevo[0]?.name}</h2>
                        <div>
                            <span> Type:{info ? type : nuevo[0]?.type}</span>
                            <span>Dim:{info ? dimension : nuevo[0]?.dimension}</span>
                            <span> Res:{info ? residents?.length : nuevo[0]?.residents?.length}</span>
                        </div>
                    </article>

                </section>


                <div className='container-input'>
                    <input type="text" value={input} placeholder="   Location" onChange={e => setInput(e.target.value)} />
                    <button onClick={click}><i className='bx bx-right-arrow-alt'></i></button>
                </div>
                <div className='container-ul'>
                    <ul className='ul-card' key={Math.random*nuevo.id}>
                        {(info ? character.residents : nuevo[0]?.residents)?.map((e) => (
                            <ResidentsInfo url={e}  ></ResidentsInfo>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Main;