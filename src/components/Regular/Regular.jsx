import React from 'react'

export default function Regular(props) {
  return (
    <div>
        {
          props.mem.filter(el => 5 >= el.upvotes - el.downvotes).map((el, index) => {
            return (
              <div>{el.title}</div>
            )
          })
        }
    </div>
  )
}
