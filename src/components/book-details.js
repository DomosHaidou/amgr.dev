import React from "react"
import remark from 'remark';
import remarkHtml from 'remark-html';

class BookDetails extends React.Component{
    render(){
        let content = remark()
          .use(remarkHtml)
          .processSync(this.props.children).toString();
        return (
          <div class="book-details">
              <div class="row">
                  <div class="col-3">
                    <a target="_blank" href={this.props.link}><img src={this.props.image} /></a>
                  </div>
                  <div class="col-9">
                    <h4>{this.props.title}</h4>
                    <div dangerouslySetInnerHTML={{__html: content }} />
                  </div>
              </div>

          </div> 
        )
    }
}

export default BookDetails
