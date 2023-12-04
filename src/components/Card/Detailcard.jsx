/* eslint-disable react/prop-types */
import { useState } from "react"
import style from "../Card/Details.module.css"

export default function Detailcard({drink}) {
  const [expand , setExpand] = useState(false)
  return (
    <div className={style.card}>
      <div className={style.content}>
        <h2>{drink.name}</h2>
        <p>{drink.tagline}</p>
        <p className={style.description} style={{WebkitLineClamp:expand ? 'unset':2}}>{drink.description}</p>
        <button onClick={()=> setExpand(!expand)}>show more</button>
      </div>
      <div className={style.img}>
        <img src={drink.image_url} alt={drink.name} />
      </div>
    </div>
  )
}
