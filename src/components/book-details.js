import React from "react"

class BookDetails extends React.Component{
    render(){
        return (
          <div class="book-details">
              <div class="row">
                  <div class="col-3">
                    <img src={this.props.image} />
                  </div>
                  <div class="col-9">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                  </div>
              </div>

          </div> 
        )
    }
}

export default BookDetails
