import React from 'react'
import Card from './card'

export default function sections() {
  return (
    <div class="py-[6%] px-[7%] ">
      <div class="text-4xl border-b-2 border-gray-200 pb-3">
          Superior Collaboration <code class="text-gray-600 text-2xl">Visualize Quality</code> 
      </div>
      <div class="pt-4 text-gray-400  text-sm ">
          Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.
      </div>
      <div class="my-3 flex">
          <Card />
          <Card />
          <Card />
      </div>
  </div>
  )
}
