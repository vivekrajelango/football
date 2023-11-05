import React, { useContext, useState, useEffect } from "react";
import {DataContext} from '../data/DataProvider';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LiveScore=()=>{
    const value = useContext(DataContext);
    const [navData] = value.metaValue[0];
    const allowedCountries = navData?.allowedCountries;
    const [filterCountries, setFilteredCountries] = useState([])

    const [countries, setCountries] = useState(allowedCountries);
    const [country, setCountry] = useState('England');
    const [league, setLeague] = useState([]);
    const [teamId, setTeamId] = useState(19);
    const [logo, setLogo] = useState(null);
    const [cards, setCards] = useState([]);
    const [season, setSeason] = useState(false);


    const searchHandler=(e)=>{
        let textValue = e.target.value;
        if(textValue !==''){
            setFilteredCountries(countries?.filter((item)=>
                item.name.toLowerCase().indexOf(textValue.toLowerCase()) >-1
            ))
        } else {
            setFilteredCountries(countries);
        }
    }
    
    const selectedCountry=(name, id)=>{
        setCountry(name);
        setTeamId(id);
    }

    const selectLeague=(id)=>{
        const filt = league.filter((item)=>item.id === id)
        console.log('filt', filt);
        setCards(league.filter((item)=>item.id === id));
    }

    // useEffect(()=>{
    //     if(allowedCountries){
    //         fetch("https://api.football-data-api.com/country-list?key=test85g57")
    //             .then(res=>res.json())
    //             .then(resp=>{
    //                 setCountries(resp.data.filter((item)=>allowedCountries && allowedCountries.includes(item.country)));
    //             });
    //     }
    // },[allowedCountries])
    useEffect(()=>{ 
        if(allowedCountries){
            fetch("https://livescore-api.com/api-client/countries/list.json?&key=n02wwRHuy7UxvTbE&secret=cPJ3DbgZhS5fUsahscOZ4vtDDoa8hmMu")
            .then(res=>res.json())
            .then(resp=>{
                setCountries(resp.data.country.filter((item)=>allowedCountries && allowedCountries.includes(item.name)));
            }); 
        }
    },[allowedCountries])



    // useEffect(()=>{
    //     fetch("https://api.football-data-api.com/league-list?key=test85g57")
    //         .then(res=>res.json())
    //         .then(resp=>setLeague(resp.data.filter(item=>item.country === country)))
    //         // .then(ress=>console.log('leag', ress.data))
    // },[country])

    useEffect(()=>{
        fetch("https://livescore-api.com/api-client/scores/live.json?&key=n02wwRHuy7UxvTbE&secret=cPJ3DbgZhS5fUsahscOZ4vtDDoa8hmMu")
        .then(res=>res.json())
        .then(resp=>setLeague(resp.data.match.filter((item)=>item.country.name===country)))
    },[country])

    useEffect(()=>{
        fetch(`https://livescore-api.com/api-client/countries/flag.json?country_id=${teamId}&key=n02wwRHuy7UxvTbE&secret=cPJ3DbgZhS5fUsahscOZ4vtDDoa8hmMu`)
        .then(resp=>{
            setLogo(resp.url)
        })
    },[teamId])

    useEffect(()=>{
        fetch('https://livescore-api.com/api-client/fixtures/matches.json?&key=n02wwRHuy7UxvTbE&secret=cPJ3DbgZhS5fUsahscOZ4vtDDoa8hmMu&team=19')
        .then(resp=>console.log('fix', resp.url));
    },[])

    return(
        <div className="score ">
            <div className="left-nav">
            <input  
                className="searchInput"
                type="text"
                placeholder="Search country"
                onChange={searchHandler}
            />
            {filterCountries.length ? 
                filterCountries?.map((item) => (
                    <Accordion key={item.id} onClick={()=>selectedCountry(item.name, item.id)}>
                        <Accordion.Header>{item.name}</Accordion.Header>
                        {league?.map((item) => (
                            <Accordion.Body key={item.id} onClick={()=>selectLeague(item.competition_name)}>
                                {item.competition_name}
                            </Accordion.Body>
                        ))}
                    </Accordion>
                )) : 
                countries?.map((item) => (
                    <Accordion key={item.id} onClick={()=>selectedCountry(item.name, item.id)}>
                        <Accordion.Header>{item.name}</Accordion.Header>
                        {league?.map((item) => (
                            <Accordion.Body key={item.id} onClick={()=>selectLeague(item.id)}>
                                {item.competition_name}
                            </Accordion.Body>
                        ))}
                    </Accordion>
                ))
                }
            </div>

            <div className="right-content">
                <Table hover>
                    {league?.map((item)=>(
                        <>
                        <thead>
                            <tr>
                                <th>
                                    <img src={logo} width={30}/>
                                </th>
                                <th>{item.competition_name}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={2}>{item.status}</td>
                                <td>{item.home_name}</td>
                                <td>{item.score.split('-')[0]}</td>
                            </tr>
                            <tr>
                                <td>{item.away_name}</td>
                                <td>{item.score.split('-')[1]}</td>
                            </tr>
                            {/* <tr>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr> */}
                        </tbody>
                        </>
                    ))}
                    
                    
                </Table>
                {/* {cards.map((item)=>(
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
                ))} */}
            </div>

        </div>
    )
}

export default LiveScore;