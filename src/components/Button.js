import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => {

    return (
        <button 
          onClick = {onClick}
          style={{backgroundColor: color}} 
          className= 'btn'
        >
           {text}
        </button> 
    )
}

Button.Defaults = {
 color: 'black',
 text:'New Registration'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}
export default Button