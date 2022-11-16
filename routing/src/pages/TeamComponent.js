import React from 'react'
import {useParams} from 'react-router-dom'
export default function TeamComponent() {
    let {teamId} = useParams();
  return (
    <div>Hello {teamId}</div>
  )
}
