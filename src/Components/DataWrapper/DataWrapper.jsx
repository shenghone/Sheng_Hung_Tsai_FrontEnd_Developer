import React, { useEffect, useContext } from "react";
import DataContext from "../../Context/DataContext";
import axios from "axios";
import _ from "lodash";

const DataWrapper = ({ children }) => {
  const { setData, data, setDataMap } = useContext(DataContext);
  useEffect(() => {
    const getData = async () => {
      const { data: news } = await axios(
        `https://newsapi.org/v2/everything?q=canada&language=en&pageSize=30&sortBy=publishedAt&apiKey=c593132c2e4c43799c7767555ad39b31`
      );
      const { data: picData } = await axios(
        `https://api.unsplash.com/photos/?per_page=30&order_by=latest&client_id=b8fc902b735b64caf1b5bc98cc70eea86b111e904e2f100f80a5023444c41242`
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
