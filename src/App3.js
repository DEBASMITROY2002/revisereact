import { Parent } from './Parent.js';
import {ShowUserData} from './Ajx.js';
import { useState } from 'react';
import {UseEfEx} from './UseEfEx.js';
import {AjxList} from './AjxList.js';

export default function App3() {
  let [lyfFlag, setLyfFlag] = useState(false)
  return (
    <>
    {/* <Parent/> */}
    {/* <ShowUserData/> */}
    ShowLifecycle  : <input type="checkbox" id="showlifecycle" onChange={(event)=>{setLyfFlag(event.target.checked)}}/>
    {lyfFlag && <UseEfEx/>}
    <AjxList/>
    </>
  )
}