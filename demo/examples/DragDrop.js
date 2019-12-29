import React, { useState } from 'react'
import { DragDrop, Code, Gutter, Grid, Shape, Badge } from '../../src'

const DragDropExample = () => {

  const [ dragStart, setDragStart ] = useState(0)
  const [ dragOver, setDragOver ] = useState(0)
  const [ drop, setDrop ] = useState(0)
  const [ dragLeave, setDragLeave ] = useState(0)
  const [ drag, setDrag ] = useState(0)

  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <DragDrop draggable={true}>Draggable Item</DragDrop>
        <DragDrop draggable={false}>DropZone</DragDrop>
      `}/>

      <h2>Demo</h2><Gutter/>

      Events:<Gutter half/>


      <Grid col={4} gap>
        <Grid gap>
          <div>Drags: {drag}</div>
          <div>Drag Starts: {dragStart}</div>
          <div>Drag Leaves: {dragLeave}</div>
        </Grid>

        <DragDrop
          onDragStart={() => {setDragStart(dragStart+1)}}
          onDrag={() => {setDragOver(drag+1)}}
          onDragLeave={() => {setDragLeave(dragLeave+1)}}
          ><Shape maxWidth='100px' circle background='orange'/></DragDrop>

        <DragDrop
          draggable={false}
          onDragOver={()=>{setDragOver(dragOver + 1)}}
          onDrop={()=>{setDrop(drop + 1)}}>
          <Shape rectangle background='silver'>Drop Zone</Shape></DragDrop>

        <Grid gap>
          <div>Drops: {drop}</div>
          <div>Drag Over: {dragOver}</div>
        </Grid>

      </Grid>

    </div>
  )
}

export default DragDropExample
