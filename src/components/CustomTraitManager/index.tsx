// function CustomTraitManager() {
//     return (
//         <></>
//     )
// }

// export default CustomTraitManager

import { TraitsResultProps } from '@grapesjs/react';
import TraitPropertyField from '../TraitPropertyField';

export default function CustomTraitManager({ traits }: Omit<TraitsResultProps, 'Container'>) {
    return (
        <div className="gjs-custom-style-manager">
            {
            !traits.length ?
                <div>No properties available</div>
            :
            traits.map(trait => (
                <TraitPropertyField key={trait.getId()} trait={trait}/>
            ))}
        </div>
    );
}