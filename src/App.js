import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import {NewsItemsCard} from "./components/newsitems";
import {newsObj} from "./components/newsSource";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Newsdetails} from "./components/newsdetails";

function App() {
  var _cardProp={
    altText:"news article",
    newsHeading: "Headline of your news",
    readMore:"Read More",
    newsSummary:"Some quick example text to build on the news and make up the bulk of the card's content."
  };
  var _newsExtractor = function(obj){
        var returnNewsObj={
          _title:obj.title,
          _content:obj.content,
          _description:obj.description,
          _publishedAt:obj.publishedAt,
          _imgUrl:obj.urlToImage,
          _url:obj.url

        };
        return returnNewsObj;
  }
  return (
    <>
    
      <Header />
      <div className="container">
        <div className="centered-div">
          <h2>Breaking News: Major Event Happening Now</h2>
        </div>
      </div>
      <div className="items-container row">
        
      
      {newsObj.articles.slice(0, 1).map(element => {
       var currentItem=_newsExtractor(element);
        return(<div key={element.url}  >
          <NewsItemsCard cardProp={_cardProp} newsItem={currentItem} />
                  </div>);
      })}
      </div>
      
      

      <Footer />
    </>
  );
}

export default App;
