import React, { useContext, useState, useEffect } from "react";
import {DataContext} from '../data/DataProvider';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LiveScore=()=>{
    const value = useContext(DataContext);
    const [navData] = value.metaValue[0];
    const allowedCountries = navData?.allowedCountries;

    const [countries, setCountries] = useState(allowedCountries);
    const [country, setCountry] = useState('USA');
    const [league, setLeague] = useState([]);
    const [cards, setCards] = useState([]);
    const [season, setSeason] = useState(false);

    const selectedCountry=(name)=>{
        setCountry(name);
    }

    const selectLeague=(leagueName)=>{
        const filt = league.filter((item)=>item.league_name === leagueName)
        console.log('filt', filt);
        setCards(league.filter((item)=>item.league_name === leagueName));
    }

    useEffect(()=>{
        if(allowedCountries){
            fetch("https://api.football-data-api.com/country-list?key=test85g57")
                .then(res=>res.json())
                .then(resp=>{
                    setCountries(resp.data.filter((item)=>allowedCountries && allowedCountries.includes(item.country)));
                    // console.log('sss', resp.data);
                });
        }
    },[allowedCountries])

    useEffect(()=>{
        fetch("https://api.football-data-api.com/league-list?key=test85g57")
            .then(res=>res.json())
            .then(resp=>setLeague(resp.data.filter(item=>item.country === country)))
            // .then(ress=>console.log('leag', ress.data))
    },[country])

    // useEffect(()=>{
    //     fetch("https://api.football-data-api.com/league-season?key=test85g57&season_id=1625")
    //     .then(res=>res.json())
    //     .then(resp=>console.log('resp', resp))
        
    // },[])

    return(
        <div className="score ">
            <div className="left-nav">
            {countries && countries?.map((item) => (
                    <Accordion key={item.id} onClick={()=>selectedCountry(item.country)}>
                        <Accordion.Header>{item.country}</Accordion.Header>
                        {league?.map((item) => (
                            <Accordion.Body key={item.id} onClick={()=>selectLeague(item.league_name)}>
                                {item.league_name}
                            </Accordion.Body>
                        ))}
                    </Accordion>
                ))}
                {/* {countries && countries?.map((item) => (
                    <div key={item.id} onClick={()=>selectedCountry(item.country)}>
                        {item.country}
                    </div>
                ))} */}
            </div>
            <div className="right-content">
                {cards.map((item)=>(
                    <>
                    <Card style={{ width: '18rem' }}  key={item.country} >
                        <Card.Img variant="top" src={item.image} height={200}/>
                        <Card.Body>
                            <Card.Title>{item.country}</Card.Title>
                            <Card.Text>
                            League: {item.name}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>setSeason(!season)}>Seasons</Button>
                        </Card.Body>
                    </Card>
                    { season && 
                        item.season.map((item)=>(
                            <Button variant="outline-primary" className="m-1">{item.year}</Button>
                        ))
                    }
                    </>
                ))}
                
                {/* {league?.map((item) => (
                    <div key={item.id}>
                        {item.league_name}
                    </div>
                ))} */}
            </div>

        </div>
    )
}

export default LiveScore;