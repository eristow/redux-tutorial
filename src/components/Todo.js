import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
    <div className='row mt-3'>
        <div className='col'>
            <li
                className='float-left'
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {text}
            </li>
        </div>
        <div className='col'>
            <button
                className='float-right'
                onClick={onClick}
            >
                {!completed
                    ? 'Check'
                    : 'Un-Check'}
            </button>
        </div>
    </div>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo