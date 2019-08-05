import React from 'react'
import { connect } from 'react-redux'

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if(!input.value.trim()) {
                        return
                    }
                    dispatch({ 
                        type: 'ADD_TODO',
                        id: nextTodoId++,
                        text: input.value
                    })
                    input.value = ''
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)