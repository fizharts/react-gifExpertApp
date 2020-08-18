import React, { Fragment } from 'react'
import { useState } from 'react'
import { PropTypes} from 'prop-types'

export const AddCategory = ( { setCategories } ) => {



    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ( e ) => {
        const { value } = e.target
        setInputValue( value )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        inputValue.trim().length > 2 ?
        setCategories(Categories=>[ inputValue ,...Categories]): setInputValue('')  
            
    }
    return (
       <Fragment>
        <form onSubmit={ handleSubmit }>
        <h1>Add category</h1>
            { inputValue }
            <input type="text " value={ inputValue } onChange={e=> handleInputChange(e)}/>
        </form>
       </Fragment>
    )
}

AddCategory.propTypes = {
    setCategories :  PropTypes.func.isRequired
}
