import React from 'react'

export default function Tailwind({name,role}) {
  return (
         <>
                  <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                  <img class="w-30 h-30 rounded-full mx-auto" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="not show" width="384" height="512" />
                  <div class="pt-6 space-y-4">
                  <blockquote>
                  <p class="text-lg font-medium">
                  “Tailwind CSS is the only framework that I've seen scale
                  on large teams. It’s easy to customize, adapts to any design,
                  and the build size is tiny.”
                  </p>
                  </blockquote>
                  <figcaption class="font-medium">
                  <div>
                  {name}
                  </div>
                  <div>
                  {role}
                  </div>
                  </figcaption>
                  </div>
         </figure>
       </>
  )
}
