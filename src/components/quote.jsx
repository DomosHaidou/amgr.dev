import React from "react"
import remark from 'remark';
import remarkHtml from 'remark-html';

class Quote extends React.Component{
    render(){
        let content = remark()
            .use(remarkHtml)
            .processSync(this.props.children).toString();
        return (
          <div class="quote-details">
              <blockquote>
                  <div class="row">
                      <div class="col-11" dangerouslySetInnerHTML={{__html: content }} />
                  </div>
                  <div class="row">
                      <div class="col-12">
                          <a href={this.props.reference}>{this.props.author}</a>
                      </div>
                  </div>
              </blockquote>
          </div> 
        )
    }
}

export default Quote
