import { SelectorsResultProps } from '@grapesjs/react';
import { Select } from 'antd';

function CustomSelectorManager({
    selectors,
    selectedState,
    states,
    targets,
    setState,
    addSelector,
    removeSelector,
}: SelectorsResultProps) {

    const addNewSelector = () => {
        const next = selectors.length + 1;
        addSelector({ name: `new-${next}`, label: `New ${next}` });
      };
      const targetStr = targets.join(', ');
    
    return (
        <div>
            <Select
                value={selectedState}
                onChange={(value) => setState(value)}
            >
                {states.map((state) => (
                    <Select.Option value={state.id} key={state.id}>
                        {state.getName()}
                    </Select.Option>
                ))}
            </Select>
        </div>
    )
}

export default CustomSelectorManager