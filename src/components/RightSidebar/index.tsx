import {
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
} from "@grapesjs/react";
import { useContext, useState } from "react";
import CustomSelectorManager from "../CustomSelectorManager";
import CustomStyleManager from "../CustomStyleManager";
import CustomTraitManager from "../CustomTraitManager";
import CustomBlockManager from '../CustomBlockManager';
import CustomLayerManager from '../CustomLayerManager';
import CustomPageManager from '../CustomPageManager';
import { BlocksProvider, LayersProvider, PagesProvider} from '@grapesjs/react';
import "./RigthSidebar.scss";
// import { HighlightOutlined, ToolOutlined } from '@ant-design/icons';
//
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { PageContext } from '../../hooks/pageSlice';




import PhoneIcon from '@mui/icons-material/Phone';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import QueueIcon from '@mui/icons-material/Queue';
import SettingsIcon from '@mui/icons-material/Settings';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import LayersIcon from '@mui/icons-material/Layers';
import FileCopyIcon from '@mui/icons-material/FileCopy';
// interface Props {
// 	onMetaDescAdded: (tag: string) => void;
// }

const RightSidebar: React.FC = () =>{

	const { addMetaDescription } = useContext(PageContext);
	const [ value, setValue ] = useState('1');
	//Tags keywords
	const [ tags, setTags ] = useState<string[]>([]);
	const [ tagInput, setTagInput ] = useState<string>('');

	//Meta description
	const [ metaDesc, setMetaDesc ] = useState<string>('');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		console.log(event)
		setValue(newValue);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log("E", event)
		setTagInput(event.target.value);
	}

	const handleAddTag = () => {
		if(tagInput.trim() !== '') {
			setTags([...tags, tagInput.trim()]);
			setTagInput('');
		}
	}

	const handleRemoveTag = (index: number) => {
		const newTags = [...tags];
		newTags.splice(index, 1);
		setTags(newTags)
	}

	const handleMetaDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMetaDesc(event.target.value)
	}

	const handleAddMetaDesc = () => {
		console.log("MetaDesc", metaDesc);
		addMetaDescription(metaDesc);
	}

  	return (
		<div className="right-column">
			<Box sx={{ width: '100%', typography: 'body1' }}>
				<TabContext value={value}>
					<div className="tabs-buttons">
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
								<Tab 
									icon={<FileCopyIcon />} 
									aria-label="Páginas"
									value="1"
								/>
								<Tab 
									icon={<QueueIcon />} 
									aria-label="Bloques"
									value="6"
								/>
								<Tab 
									icon={<SettingsIcon />} 
									aria-label="Propiedades"
									value="2"
								/>
								<Tab 
									icon={<SubtitlesIcon />} 
									aria-label="Meta"
									value="3"
								/>
								<Tab 
									icon={<AutoFixHighIcon/>} 
									aria-label="Estilos"
									value="4"
								/>
								<Tab 
									icon={<LayersIcon />} 
									aria-label="Capas"
									value="5"
								/>								
								{/* <Tab 
									
									label="Propiedades" 
									value="2"
								/> */}
								{/* <Tab 
									
									label="Meta" 
									value="3"
								/> */}
							</Tabs>
						</Box>
					</div>
					<div className="tabs-content">
						<TabPanel value="1">
							{value === '1' && (								
								<PagesProvider>
									{(props) => <CustomPageManager {...props} />}
								</PagesProvider>
							)}
						</TabPanel>
						<TabPanel value="2">
							{value === '2' && (
								<TraitsProvider>
									{(props) => <CustomTraitManager {...props} />}
								</TraitsProvider>
							)}
						</TabPanel>
						<TabPanel value="3">
							{value === '3' && (
								<>
									<div className="tags">
										<input 
											type="text"
											value={tagInput}
											onChange={handleInputChange}
											placeholder="Escribe un tag"
										/>
										<a onClick={handleAddTag} >Agregar tag</a>
									</div>
									<div className="tags-container">
										{tags.map((tag: any, index) => (
											<span className="tag" key={index}>
												{tag}
												<button onClick={() => handleRemoveTag(index)}>x</button>
											</span>
										))}
									</div>
									<hr />
									<div className="meta-description-field">
										<textarea 
											value={metaDesc}
											onChange={handleMetaDesc}
											name="textarea" 
											rows={5} 
										>Escribe una meta descripción</textarea>
										<a onClick={handleAddMetaDesc}>Meta descripción</a>
									</div>
								</>								
							)}
						</TabPanel>
						<TabPanel value="4">
							{value === '4' && (
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
						<TabPanel value="5">
							{value === '5' && (
								<LayersProvider>
									{(props) => <CustomLayerManager {...props} />}
								</LayersProvider>
							)}
						</TabPanel>
						<TabPanel value="6">
							{value === '6' && (
								<BlocksProvider>
									{(props) => <CustomBlockManager {...props} />}
								</BlocksProvider>
							)}
						</TabPanel>
					</div>					
				</TabContext>
			</Box>
		</div>
  );
}

export default RightSidebar;
