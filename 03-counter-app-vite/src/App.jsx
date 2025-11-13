import PropTypes from 'prop-types';

export const App = ({title}) => {

  // if (!title) throw new Error('El titulo es requerido');

  return (
    <>
    <h1 data-testid='test-title'>{title}</h1>
    </>
)
}

App.propTypes = {
  title: PropTypes.string.isRequired
}

App.defaultProps = {
  title: 'Sin titulo'
}