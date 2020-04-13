import React, { useEffect, useContext } from "react";
import DataContext from "../../Context/DataContext";
import axios from "axios";
import _ from "lodash";

const DataWrapper = ({ children }) => {
  const { setData, data, setDataMap } = useContext(DataContext);
  useEffect(() => {
    const getData = async () => {
      const { data: news } = await axios(
        `https://newsapi.org/v2/everything?q=canada&language=en&pageSize=30&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_KEY}`
      );
      const { data: picData } = await axios(
        `https://api.unsplash.com/photos/?per_page=30&order_by=latest&client_id=${process.env.REACT_APP_PIC_KEY}`
      );
      const n = news.articles.filter((nn) => nn.urlToImage);
      setData({
        news: n,
        picture: picData,
      });
    };

    getData();
  }, [setData, setDataMap]);
  useEffect(() => {
    if (data && data.news && data.news.length > 0) {
      const tempMap = data.news.reduce((result, news) => {
        const randomPic = _.sample(data.picture);
        return result.set(news.title, randomPic);
      }, new Map());

      setDataMap(tempMap);
    }
  }, [data, setDataMap]);

  return <>{children}</>;
};

export default DataWrapper;
