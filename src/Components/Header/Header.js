import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import country from '../../country.json'
import { useDispatch } from 'react-redux'
import { setCountry, getNews } from '../../Redux/action'

const Header = () => {

    const dispatch = useDispatch()

    const [select, setSelect] = useState({ flag: '/flags/1x1/in.svg', code: 'in' })

    const handleSelect = (id, flag) => {
        setSelect({ flag, code: id })
        const promptOption = document.querySelectorAll('.promptOption')
        const countryMenuTrigger = document.getElementById('countryMenuTrigger')

        promptOption.forEach((item) => {
            if (item.id === id) {
                item.classList.add('bg-red-500')
                item.classList.add('text-white')
            } else {
                item.classList.remove('bg-red-500')
            }

            countryMenuTrigger.checked = false
        })
    }


    useEffect(() => {
        dispatch(setCountry(select.code))
        getNews()
    }, [select, dispatch])

    return (
        <div className='header w-full flex justify-between items-center px-4 py-4 text-gray-600'>
            <div className="logo font-[Orbitron] font-bold">
                <i className="fa-solid fa-newspaper"></i> News Zone
            </div>

            <div className="menu">
                <ul className='flex gap-6'>
                    <li>
                        <Link to="/" className="text-blue-500">Home</Link>
                    </li>
                    <li>
                        <Link to="/tech">Tech</Link>
                    </li>
                </ul>
            </div>

            <div className="btns relative">
                <input type="checkbox" hidden id="countryMenuTrigger" />
                <label htmlFor='countryMenuTrigger' className="prompt flex justify-center items-center gap-2"><img src={select.flag} alt="" /> <i className='fa fa-angle-down'></i></label>
                <div className="promptOptionWrapper top-full absolute p-4 right-0">
                    <ul className='promptOptions w-[17rem] shadow flex overflow-y-scroll flex-col h-[15rem] gap-2'>
                        {
                            country.map((item, index) => {
                                return <li id={item.code} onClick={() => handleSelect(item.code, item.flag_1x1)} className='promptOption flex text-[12px] justify-between items-center gap-2 py-4 px-2 hover:bg-slate-200' key={index} ><img src={item.flag_1x1} alt={item.name} />{item.name}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header