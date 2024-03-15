import {useRef, useState, useEffect} from 'react';
import { SelectorsResultProps } from '@grapesjs/react';
import { mdiClose, mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { MAIN_BORDER_COLOR, cx } from '../common';
import './CustomSelectorManager.scss'

export default function CustomSelectorManager({
    selectors,
    selectedState,
    states,
    targets,
    setState,
    addSelector,
    removeSelector,
}: Omit<SelectorsResultProps, 'Container'>) {
    const addNewSelector = () => {
        const next = selectors.length + 1;
        addSelector({ name: `new-${next}`, label: `New ${next}` });
    };

    const targetStr = targets.join(', ');    

    return (
        <div className="gjs-custom-selector-manager">
            <div className="items">
                <h5>Selectors</h5>
                <FormControl size="small">
                    <Select
                        value={selectedState}
                        onChange={(ev) => setState(ev.target.value)}
                        displayEmpty
                    >
                        <MenuItem value="">- State -</MenuItem>
                        {states.map((state) => (
                            <MenuItem value={state.id} key={state.id}>
                                {state.getName()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className='input-class'>
                {targetStr ? (
                    <button
                        type="button"
                        onClick={addNewSelector}
                        className='btn-add'
                    >
                        <Icon size={0.7} path={mdiPlus} />
                    </button>
                ) : (
                <div className="select-to-component">Select a component</div>
                )}
                    {selectors.map((selector) => (
                        <div
                            key={selector.toString()}
                            className="tag-box"
                        >
                            <div>{selector.getLabel()}</div>
                            <button type="button" onClick={() => removeSelector(selector)}>
                                <Icon size={0.7} path={mdiClose} />
                            </button>
                        </div>
                    ))}
                </div>
            <div className='selected'>
                <p>Selected: <span className="opacity-70">{targetStr || 'None'}</span></p>
            </div>
        </div>
  );
}