import { useState } from 'react'

import { Label, Select } from "../assets/styles/FormStyles"

const useSelectCurrency = (label, options) => {
    const [state, setState] = useState('')    

    const SelectCurrency = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={ e => setState(e.target.value)  }
            >
                <option value="">Seleccione una Opción</option>
                {options.map(option => (
                    <option 
                        key={option.id}
                        value={option.id}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>
        </>
    )
 

    return [ state, SelectCurrency ]
}

export { useSelectCurrency }