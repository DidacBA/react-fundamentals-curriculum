var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
        <form className='column' action="">
          <label htmlFor='city' className='header'>
            Enter a City and State
          </label>
          <input 
            id='city'
            placeholder='Barcelona, Catalunya'
            type='text'
            autoComplete='off'
          />
          <button
            className='button'
            type='submit'>
            Get Weather
          </button>
        </form>
      </div>
    )
  }
}

module.exports = Home;