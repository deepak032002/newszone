import React, { useState } from 'react'
import { ethers } from 'ethers'

const EthereaumConnect = () => {

  const [data, setData] = useState({})

  const btnHandler = async () => {

    if (window.ethereum) {

      let id = await window.ethereum.request({ method: "eth_requestAccounts" })
      let balance = await window.ethereum.request({ method: "eth_getBalance", params: [id[0], "latest"] })

      console.log(id, balance);
      setData({
        id: id[0],
        balance: ethers.utils.formatEther(balance)
      })

    } else {
      alert('Please Install Metamask!')
    }
  }


  return (
    <>
      <div className="w-full h-screen bg-violet-700 pt-4">
        <div className='flex items-center justify-center flex-col'>
          <p className='text-white'>Id: {data.id}</p>
          <p className='text-white'>Balance: {data.balance}</p>
        </div>
        <button onClick={btnHandler} className='bg-yellow-300  p-4 uppercase mx-auto block rounded-sm hover:text-white hover:bg-red-500'>Connect To Wallet</button>
      </div>
    </>
  )
}

export default EthereaumConnect