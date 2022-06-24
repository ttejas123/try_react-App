import React from 'react'

export default function navbar() {
  return (
    <div class="flex justify-between items-center h-[19%] w-[100%] bg-stone-800 px-[7%] py-1">
        <div class="text-gray-400 flex h-full ">
        <div class="p-2 hover:bg-black hover:text-white hover:px-3">Logo</div>
        <div class="p-2 hover:bg-black hover:text-white hover:px-3">Home</div>
        <div class="p-2 hover:bg-black hover:text-white hover:px-3">About</div>
        <div class="p-2 hover:bg-black hover:text-white hover:px-3 ">Products</div>
        <div class="p-2 hover:bg-black hover:text-white hover:px-3">Services</div>
        </div>
        <div class="flex justify-center items-center">
            <input class="bg-white p-1 h-[10%] w-[80%] rounded" />
            <div class="ml-1 p-1 w-[30%] text-center bg-white  rounded">Search</div>
        </div>
    </div>
  )
}
