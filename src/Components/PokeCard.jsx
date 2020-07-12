import React, { useState, useEffect } from "react";
import Progress from "./Progress";

const PokeCard = ({ url }) => {
  console.log(url);
  const [name, setName] = useState("");
  const [stats, setStats] = useState([]);
  const [picture, setPicture] = useState("");
  const [types, setTypes] = useState([]);
  useEffect(() => {
    async function pokemon() {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    }
    pokemon().then(({ name, sprites: { front_default }, stats, types }) => {
      setName(name);
      setStats(stats);
      setPicture(front_default);
      setTypes(types);
    });
  }, []);
  return (
    <div className="card text-white bg-primary mb-3">
      <div className="card-header ">{name}</div>
      <div className="card-body bg-white">
        <div className="row">
          <div className="col-md-4">
            <img src={picture} alt="" />
          </div>
          <div className="col-md-6">
            {stats.map((item, index) => (
              <div className="row">
                <div className="col-md-4 alig-end">
                  <span class="badge badge-dark">{item.stat.name}</span>
                </div>
                <div className="col-md-6">
                  <Progress width={item.base_stat} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
