import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'

class TypeFormContact extends React.Component {
  constructor(props) {
    super(props)
    this.openForm = this.openForm.bind(this)
  }

  openForm() {
    this.typeformEmbed.typeform.open()
  }

  render() {
    return (
      <>
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://eudald2.typeform.com/to/dK2OPI"
          hideHeaders
          hideFooter
          buttonText="Go!"
          ref={tf => {
            this.typeformEmbed = tf
          }}
        />
        <button onClick={this.openForm} style={{ cursor: 'pointer' }}>
          Contact Us
        </button>
      </>
    )
  }
}

export default TypeFormContact
