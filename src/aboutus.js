import React from 'react'
import Card2 from './card2'
export default function aboutus() {
  
  const data = [ 
    "Dynamically Procrastinate", 
    "Efficiently Unleash", 
    "Completely Synergize"
  ]

  return (
    <div class="bg-[#daa520] py-[5%] w-[100%] px-[8%]">
        <div class="flex pt-2 my-3">
            
            {
              data.map((val, index) => {
                 return (<Card2 val={val} />)
              })
            }

        </div>
    </div>
  )
}


































{/* <div class="mr-8 w-[100%] ">
                <h3 class="text-2xl py-1 ">
                    Dynamically Procrastinate
                </h3>
                
                <p class="text-sm pb-2">
                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.
                </p>
                <div class="bg-white w-[32%] py-1 rounded  text-center text-md text-sm">Procrastinate</div>
            </div>
            <div class="mx-4 w-[100%]">
                <h3 class="text-2xl py-1 ">
                    Efficiently Unleash
                </h3>
                
                <p class="text-sm pb-2">
                    Dramatically maintain clicks-and-mortar solutions without functional solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                </p>
                <div class="bg-white w-[20%] py-1 rounded  text-center text-md text-sm">Unleash</div>
            </div>
            <div class="ml-8 w-[100%] ">
                <h3 class="text-2xl py-1 ">
                    Completely Synergize
                </h3>
                
                <p class="text-sm pb-2">
                    Professionally cultivate one-to-one customer service with robust ideas. Completely synergize resource taxing relationships via premier niche markets. Dynamically innovate resource-leveling customer service for state of the art customer service.
                </p>
                <div class="bg-white w-[25%] py-1 rounded  text-center text-md text-sm">Synergize</div>
            </div> */}