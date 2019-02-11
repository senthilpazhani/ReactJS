import React from 'react';

export default App.Loading = React.createClass({
    render: function () {
      if(!this.props.loading) {
        return <span></span>;
      }
      return <span className='fa-spinner fa-spin'></span>
    }
  });

  