import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import axios from "axios";
import Loading from "../components/Loading";

const Ligue = () => {
  const [rank, setRank] = useState([]);
  const [scorer, setScorer] = useState([]);
  const [assist, setAssist] = useState([]);
  const [topRank, setTopRank] = useState(true);
  const [loading, setLoading] = useState(true);

  const season = new Date();
  const year = season.getFullYear();

  const dataAPI = async () => {
    setLoading(true);
    try {
      const ranking = await axios.get(
        "https://api-football-v1.p.rapidapi.com/v3/standings",
        {
          params: { season: "2022", league: "61" },
          headers: {
            "X-RapidAPI-Key":
              "cead0b265cmshc5af2c360488200p1aee41jsn793cfb87dadb",
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          },
        }
      );
      setRank(ranking.data.response[0].league.standings[0]);
      const goals = await axios.get(
        "https://api-football-v1.p.rapidapi.com/v3/players/topscorers",
        {
          params: { league: "61", season: "2022" },
          headers: {
            "X-RapidAPI-Key":
              "cead0b265cmshc5af2c360488200p1aee41jsn793cfb87dadb",
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          },
        }
      );
      setScorer(goals.data.response);
      const assists = await axios.get(
        "https://api-football-v1.p.rapidapi.com/v3/players/topassists",
        {
          params: { league: "61", season: "2022" },
          headers: {
            "X-RapidAPI-Key":
              "cead0b265cmshc5af2c360488200p1aee41jsn793cfb87dadb",
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          },
        }
      );
      setAssist(assists.data.response);
      setLoading(false);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    dataAPI();
  }, []);

  return (
    <Layout>
      <div className="flex">
        <Menu />
        {loading ? (
          <Loading />
        ) : (
          <div className="w-[85%] h-full ml-[30px] grid-cols-1 lg:flex lg:w-full">
            <table className="standings-table">
              <caption className="text-[20px] font-bold mb-[10px]">
                {year - 1}-{year} 시즌 구단순위
              </caption>
              <thead>
                <tr className="text-center bg-[#ccc]">
                  <th>순위</th>
                  <th className="text-start">팀명</th>
                  <th>경기</th>
                  <th>승</th>
                  <th>무</th>
                  <th>패</th>
                  <th>승점</th>
                </tr>
              </thead>
              <tbody>
                {rank.map((el) => (
                  <tr key={el.rank} className="text-center border-b-2">
                    <td>{el.rank}</td>
                    <td className="flex items-center">
                      <img
                        src={el.team.logo}
                        alt=""
                        className="w-[25px] h-[25px] mt-[5px]"
                      />
                      &nbsp;{el.team.name}
                    </td>
                    <td>{el.all.played}</td>
                    <td>{el.all.win}</td>
                    <td>{el.all.draw}</td>
                    <td>{el.all.lose}</td>
                    <td>{el.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {topRank === true ? (
              <table className="top-table">
                <caption className="text-[20px] font-bold mb-[10px]">
                  <span
                    className="mr-[30px] text-red-500 cursor-pointer"
                    onClick={() => setTopRank(true)}
                  >
                    · 득점순위
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => setTopRank(false)}
                  >
                    · 도움순위
                  </span>
                </caption>
                <thead>
                  <tr className="text-center bg-[#ccc]">
                    <th>순위</th>
                    <th>선수명</th>
                    <th className="text-start">팀명</th>
                    <th>경기</th>
                    <th>득점</th>
                  </tr>
                </thead>
                <tbody>
                  {scorer.map((el, idx) => (
                    <tr key={idx} className="text-center border-b-2">
                      <td>{idx + 1}</td>
                      <td>{el.player.name}</td>
                      <td className="flex items-center">
                        <img
                          src={el.statistics[0].team.logo}
                          alt=""
                          className="w-[25px] h-[25px] mt-[5px]"
                        />
                        &nbsp;{el.statistics[0].team.name}
                      </td>
                      <td>{el.statistics[0].games.appearences}</td>
                      <td>{el.statistics[0].goals.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="top-table">
                <caption className="text-[20px] font-bold mb-[10px]">
                  <span
                    className="mr-[30px] cursor-pointer"
                    onClick={() => setTopRank(true)}
                  >
                    · 득점순위
                  </span>
                  <span
                    className="text-red-500 cursor-pointer"
                    onClick={() => setTopRank(false)}
                  >
                    · 도움순위
                  </span>
                </caption>
                <thead>
                  <tr className="text-center bg-[#ccc]">
                    <th>순위</th>
                    <th>선수명</th>
                    <th className="text-start">팀명</th>
                    <th>경기</th>
                    <th>도움</th>
                  </tr>
                </thead>
                <tbody>
                  {assist.map((el, idx) => (
                    <tr key={idx} className="text-center border-b-2">
                      <td>{idx + 1}</td>
                      <td>{el.player.name}</td>
                      <td className="flex items-center">
                        <img
                          src={el.statistics[0].team.logo}
                          alt=""
                          className="w-[25px] h-[25px] mt-[5px]"
                        />
                        &nbsp;{el.statistics[0].team.name}
                      </td>
                      <td>{el.statistics[0].games.appearences}</td>
                      <td>{el.statistics[0].goals.assists}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Ligue;
