import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context' 


const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '20px',
        marginBottom: '.5rem',
        background: '#ccc',
    },
    input: {
        marginRight: '1rem',
    },
    strong: {
        marginRight: '.5rem',
        borderRadius: '50%',
        border: '1px solid #ccc',
        padding: '.1rem .4rem'
    }
}

function TodoItem({ todo, index, onChange}) {
    const { removeTodo } = useContext(Context)
    const classes =[]

    if (todo.completed) {
        classes.push('done')
    }
    return (
    <li style ={styles.li}>
        <span className={classes.join(' ')}>
            <input
                type='checkbox'
                checked={todo.completed}
                style = {styles.input} 
                onChange={() => onChange(todo.id)}
            />
            <strong style={styles.strong}>
                {index + 1}
            </strong>
            {todo.title}
        </span>
        <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
    )
} 


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default TodoItem