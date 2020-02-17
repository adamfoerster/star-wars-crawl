import React from 'react';
import './Crawl.css';

class Crawl extends React.Component<{ content: string }> {
  render() {
    const { content } = this.props;
    const formated = textToHtml(content);
    return (
      <div className="crawl-container">
        <section>
          <span className="star"></span>
          <article><p>{formated}</p></article>
        </section>
      </div>
    );
  }
}

const textToHtml = (content: string) => {
  return content.split(/\cJ/).join(' ');
}

export default Crawl;