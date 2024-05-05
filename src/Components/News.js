import React, { Component } from "react";
import Newscards from "./Newscards";
import Spinner from "./Spinner"
export default class News extends Component {
  // articles = [
  //   {
  //     source: { id: null, name: "The Indian Express" },
  //     author: "The Indian Express",
  //     title:
  //       "India T20 World Cup Squad LIVE Press Conference: Ajit Agarkar says Rinku Singh and Shubman Gill have done ‘nothing wrong’ - The Indian Express",
  //     description: null,
  //     url: "https://indianexpress.com/article/sports/t20-world-cup/india-t20-world-cup-squad-announcement-live-updates-rohit-sharma-ajit-agarkar-9303268/",
  //     urlToImage: null,
  //     publishedAt: "2024-05-02T12:28:45Z",
  //     content: null,
  //   },
  //   {
  //     source: { id: null, name: "NDTV News" },
  //     author: null,
  //     title:
  //       "High Blood Pressure: Lower Your Number With These Vegetables - NDTV",
  //     description:
  //       "Hypertension: Here we have a list of vegetables that can help control blood pressure numbers.",
  //     url: "https://www.ndtv.com/health/high-blood-pressure-lower-your-number-with-these-vegetables-5572926",
  //     urlToImage:
  //       "https://c.ndtvimg.com/2021-09/5u6ubo3g_blood-pressure_625x300_01_September_21.jpg",
  //     publishedAt: "2024-05-02T12:16:31Z",
  //     content:
  //       "Vegetables are highly nutritious and you must add them to your daily diet\r\nHigh blood pressure is more harmful than you think. Uncontrolled blood pressure affects the arteries and increases an indivi… [+2455 chars]",
  //   },
  //   {
  //     source: { id: null, name: "Hindustan Times" },
  //     author: "HT News Desk",
  //     title:
  //       "Latest Entertainment News, Live Updates Today May 2, 2024: One Piece Episode 1103: Exact release date, time, where to watch and more - Hindustan Times",
  //     description:
  //       "Welcome to the live updates platform for Hindustan Times. Follow the major news updates, headlines and breaking news stories from the world of entertainment right here. See the latest developments in Bollywood, Hollywood and track the big news stories of the …",
  //     url: "https://www.hindustantimes.com/entertainment/latest-entertainment-today-live-updates-may-2-2024-101714613401560.html",
  //     urlToImage:
  //       "https://www.hindustantimes.com/ht-img/img/2024/05/02/550x309/Anna_Sawai_1714651499383_1714651499586.jpeg",
  //     publishedAt: "2024-05-02T12:14:37Z",
  //     content:
  //       "Get the latest news updates and breaking news stories from the world of entertainment. Track all the latest developments in Bollywood, Hollywood and more right here. Disclaimer: This is an AI-generat… [+7970 chars]",
  //   },
  //   {
  //     source: { id: null, name: "NDTV News" },
  //     author: null,
  //     title:
  //       "BJP Drops Brij Bhushan Amid Sexual Harassment Charge, Fields His Son - NDTV",
  //     description:
  //       "Sexual harassment allegations and street protests by the country's top wrestlers may cost BJP heavyweight and six-time MP Brij Bhushan Sharan Singh an opportunity to contest the upcoming Lok Sabha polls.",
  //     url: "https://www.ndtv.com/india-news/bjps-brij-bhushan-accused-of-sex-harassment-by-wrestlers-may-not-contest-polls-sources-5569687",
  //     urlToImage:
  //       "https://c.ndtvimg.com/2023-12/egai82ps_brij-bhushan-ani_625x300_24_December_23.jpeg",
  //     publishedAt: "2024-05-02T11:36:00Z",
  //     content:
  //       "Brij Bhushan Sharan Singh is a six-time MP\r\nNew Delhi: The BJP's heavyweight MP and former wrestling boss Brij Bhushan Sharan Singh won't be contesting the Lok Sabha polls this time. The BJP has inst… [+2013 chars]",
  //   },
  //   {
  //     source: { id: null, name: "NDTV News" },
  //     author: null,
  //     title:
  //       "10 Reasons Why Eggs Should Be A Staple In Your Summer Diet - NDTV",
  //     description:
  //       "Below we share various reasons why eggs are a great staple for your diet.",
  //     url: "https://www.ndtv.com/health/10-reasons-why-eggs-should-be-a-staple-in-your-summer-diet-5572566",
  //     urlToImage:
  //       "https://c.ndtvimg.com/2023-09/oba5ek38_viral-feta-eggs_625x300_07_September_23.jpg",
  //     publishedAt: "2024-05-02T11:34:12Z",
  //     content:
  //       "Eggs are a good source of vitamin D, which is essential for calcium absorption and bone health\r\nEating eggs daily can be a healthy part of a balanced diet for most people. Eggs are an excellent sourc… [+3422 chars]",
  //   },
  // ];
  constructor() {
    super();
    this.state = {
      articles: [],
      page:1,
      loading :false,
    };
  }
   clicknext= async ()=>{
    // console.log("fbejbej");
    if((this.state.page+1)<=Math.ceil(this.state.totalResults/this.props.pagesize)){
    let endpoint=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b5ab939ac4324201815a188807a43a83&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(endpoint);
    let d= await data.json();
    // console.log(d.articles.length);
    // console.log(d.articles);
    this.setState({
      articles: d.articles,
      page:this.state.page+1,
      loading:false,
    });
    }
  }
  clickprev=async ()=>{
   if(this.state.page>1){
    let endpoint=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b5ab939ac4324201815a188807a43a83&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(endpoint);
    let d= await data.json();
    // console.log(d.articles.length);
    // console.log(d.articles);
    this.setState({
      articles: d.articles,
      page:this.state.page-1,
      loading:false,
   });
  }
  }
  async componentDidMount(){
    let endpoint=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b5ab939ac4324201815a188807a43a83&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(endpoint);
    let d= await data.json();
    // console.log(d.totalResults);  
    // console.log(d.articles.length);
    // console.log(d.articles);
    this.setState({
      articles: d.articles,
      loading:false,
      totalResults:d.totalResults,

    });
    // console.log();

  }
  render() {
    let {pagesize}=this.props;
    return (
      
        <div className="container my-3">
       { this.state.loading==false?
        <div className="row">
        {this.state.articles.map((ele)=>{
        if(ele.description!=="[Removed]")
          return (
          <div className="col-md-4" key={ele.description}>
            <Newscards title={ele.title} 
            urlToImage={ele.urlToImage ?ele.urlToImage:"https://img.freepik.com/free-photo/beautiful-aerial-shot-forest-enveloped-creepy-mist-fog_181624-2659.jpg?size=626&ext=jpg&ga=GA1.1.1730265882.1714756339&semt=sph"} description={ele.description} 
            srcurl={ele.url}/>
          </div>) 
        }) } 
        </div> : <Spinner></Spinner>}
        
        <div className="justify-content-between d-flex">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.clickprev}>Previous</button>
        <button disabled={(this.state.page+1)>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-primary" onClick={this.clicknext}>Next</button>
        </div>
      </div>
    );
  }
}
