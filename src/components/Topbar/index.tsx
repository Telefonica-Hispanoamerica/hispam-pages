import { DevicesProvider, WithEditor } from '@grapesjs/react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TopbarButtons from '../TopbarButtons'
import LogoUxHispam from '../../assets/logo-uxhispam.svg'
import './topbar.scss'


function Topbar() {

	return (
		<div className="top-sidebar">
			<div>
				<DevicesProvider>
					{({ selected, select, devices }) => (
						<Select 
							value={selected} 
							onChange={(ev) => select(ev.target.value)}
							labelId="demo-select-small-label"
							id="demo-select-small"
							sx={{ m: 1, minWidth: 150 }}
						>
							{devices.map((device) => (
								<MenuItem value={device.id} key={device.id}>
								{device.getName()}
								</MenuItem>
							))}
						</Select>
					)}
				</DevicesProvider>
			</div>
			<div>
				<img src={LogoUxHispam} alt="Logo UX Hispam" className="logo-image"/>
			</div>
			<div>
				<WithEditor>
					<TopbarButtons></TopbarButtons>
				</WithEditor>
			</div>
		</div>
	)
}

export default Topbar