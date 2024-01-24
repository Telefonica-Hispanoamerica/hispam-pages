import {
  BlocksProvider,
  LayersProvider,
  PagesProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
} from "@grapesjs/react";
import { useState } from "react";
import CustomBlockManager from "../CustomBlockManager";
import CustomPageManager from "../CustomPageManager";
import CustomLayerManager from "../CustomLayerManager";
import CustomSelectorManager from "../CustomSelectorManager";
import CustomStyleManager from "../CustomStyleManager";
import CustomTraitManager from "../CustomTraitManager";
// import { Tabs } from "antd";
import "./RigthSidebar.scss";
import { HighlightOutlined, ToolOutlined } from '@ant-design/icons';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import PhoneIcon from '@mui/icons-material/Phone';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import PersonPinIcon from '@mui/icons-material/PersonPin';
//
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

// const { TabPane } = Tabs;
function RightSidebar() {

	// const [selectedTab, setSelectedTab] = useState("0");
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
		
    // 	<div className="right-sidebar-column">
	// 		<Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
	// 			<Tab icon={<HighlightOutlined className="icon" style={{color: '#111827'}}/>} label="Estilos" />
	// 			<Tab icon={<ToolOutlined className="icon" style={{color: '#111827'}}/>} label="Propiedades" />
	// 		</Tabs>
	// 	<Tabs
	// 		activeKey={selectedTab}
	// 		onChange={(activeKey) => setSelectedTab(activeKey)}
	// 		centered
	// 	>
	// 		<TabPane tab={ <span><HighlightOutlined className="icon" style={{color: '#111827'}}/>Estilos</span>} key="1" />
	// 		<TabPane tab={ <span><ToolOutlined className="icon" style={{color: '#111827'}}/>Propiedades</span> } key="2" />
	// 		{/* <TabPane tab={ <AppstoreOutlined style={{color: '#fff'}}/> } key="3">
	// 		</TabPane>
	// 		<TabPane tab={ <SettingOutlined style={{color: '#fff'}}/>} key="4">
	// 		</TabPane>
	// 		<TabPane tab={ <FileTextOutlined style={{color: '#fff'}}/> } key="5">
	// 		</TabPane> */}
	// 	</Tabs>
	// 	<div className="content-tabs">
	// 		{selectedTab === '1' && (
	// 			<>
	// 				<SelectorsProvider>
	// 					{(props) => <CustomSelectorManager {...props} />}
	// 				</SelectorsProvider>
	// 				<StylesProvider>
	// 					{(props) => <CustomStyleManager {...props} />}
	// 				</StylesProvider>
	// 			</>
	// 		)}
	// 		{selectedTab === '2' && (
	// 			<TraitsProvider>
	// 				{(props) => <CustomTraitManager {...props} />}
	// 			</TraitsProvider>
	// 		)}
	// 	</div>
    // </div>
  );
}

export default RightSidebar;
