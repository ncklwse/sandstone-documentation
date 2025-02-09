import React from 'react'
import path from 'path'

export const FileTab = ({ name, style }: { name: string, style?: React.StyleHTMLAttributes<HTMLDivElement> }) => {
  const ext = path.parse(name).ext.slice(1)

  return <div style={{
    padding: '2px 10px 2px 8px',
    width: name.length * 10 + 15,
    backgroundColor: '#1e1e1e',
    height: 30,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    ...(style ?? {}),
  }}>
    {ext ? <img src={`/img/icons/file_type_${path.parse(name).ext.slice(1)}.svg`} height={25} /> : <></>}
    <span>{name}</span>
  </div>
}