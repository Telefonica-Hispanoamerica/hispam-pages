import {
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
} from "@grapesjs/react";
import { useState } from "react";
import CustomSelectorManager from "../CustomSelectorManager";
import CustomStyleManager from "../CustomStyleManager";
import CustomTraitManager from "../CustomTraitManager";
import "./RigthSidebar.scss";
import { HighlightOutlined, ToolOutlined } from '@ant-design/icons';
//
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

function RightSidebar() {

	const [value, setValue] = useState('1');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

  	return (
		<div className="right-column">
			<Box sx={{ width: '100%', typography: 'body1' }}>
				<TabContext value={value}>
					<div className="tabs-buttons">
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
								<Tab 
									icon={<HighlightOutlined className="icon" style={{color: '#111827'}}/>} 
									label="Estilos"
									value="1"
								/>
								<Tab 
									icon={<ToolOutlined className="icon" style={{color: '#111827'}}/>} 
									label="Propiedades" 
									value="2"
								/>
							</Tabs>
						</Box>
					</div>
					<div className="tabs-content">
						<TabPanel value="1">
							{value === '1' && (
								<>
									<SelectorsProvider>
										{(props) => <CustomSelectorManager {...props} />}
									</SelectorsProvider>
									<StylesProvider>
										{(props) => <CustomStyleManager {...props} />}
									</StylesProvider>
								</>
							)}
						</TabPanel>
						<TabPanel value="2">
							{value === '2' && (
								<TraitsProvider>
									{(props) => <CustomTraitManager {...props} />}
								</TraitsProvider>
							)}
						</TabPanel>
					</div>					
				</TabContext>
			</Box>
		</div>
  );
}

export default RightSidebar;
