import { DevicesProvider, WithEditor } from '@grapesjs/react'
import { Select } from 'antd'
import TopbarButtons from '../TopbarButtons'
import LogoUxHispam from '../../assets/logo-uxhispam.svg'
import './topbar.css'


function Topbar() {
return (
    <div className="top-sidebar">
         <DevicesProvider>
        {({ selected, select, devices }) => (
          <div className="device-select-topbar">
            <Select value={selected} onChange={(value) => select(value)} style={{ width: 150 }}>
                {devices.map((device) => (
                <Select.Option value={device.id} key={device.id}>
                    {device.getName()}
                </Select.Option>
                ))}
            </Select>
          </div>
        )}
      </DevicesProvider>
      <img src={LogoUxHispam} alt="Logo UX Hispam" className="logo-image"/>
      <WithEditor>
        <TopbarButtons></TopbarButtons>
      </WithEditor>
    </div>    
)
}

export default Topbar