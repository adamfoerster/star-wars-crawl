import React from 'react';
import './Crawl.css';

class Crawl extends React.Component<{ content: string, padding?: number}> {
  render() {
    const { content, padding } = this.props;
    const formated = textToHtml(content);
    const style = {
      margin: `${padding ? padding : 200}px 0 ${padding === 200 ? 1000 : 1111}px`
    };
    return (
      <div className="crawl-container">
        <section>
          <span className="star"></span>
          <article><p style={style}>{formated}</p></article>
        </section>
      </div>
    );
  }
}

const textToHtml = (content: string) => {
  return content.split(/\cJ/).join(' ');
}

export default Crawl;