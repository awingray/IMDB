import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Tabs } from 'antd';
import Pagination from '../components/Pagination'
import 'antd/dist/antd.css';


import MovieItem from '../components/MovieItem';
import ActosItem from '../components/ActosItem';
import SearchResult from '../components/SearchResult';

let BASE_URL = "http://localhost:2000"

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const AllMovies = () => {

    const [movie, setmovie] = useState([])
    const [actors, setActors] = useState([])
    const [loading, setLoading] =useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostperPage] =useState(100);
    const [searchKey,setSearchKey] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [seachLoading, setseachLoading] =useState(false);


    useEffect(() =>{


        const initData = async()=>{
            setLoading(true)
            let mov = await axios.get(`${BASE_URL}/movies`)
            let actor = await axios.get(`${BASE_URL}/allActors`)
            setmovie(mov.data.movie)
            setActors(actor.data.actor)
            setLoading(false)        
    }

        initData();
        
    },[])
    
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = actors.slice(indexOfFirstPost, indexOfLastPost);

    const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    const handleSearch= async ()=>{
        console.log(searchKey)
        setseachLoading(true)
        let mov = await axios.get(`${BASE_URL}/getMovieByActor/${searchKey}`)
        setSearchResult(mov.data)
        setseachLoading(false)

    }
    return (
        <div className="container">
        <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                <div>
                    <p>All movies</p>
                    <div className="allmovie">
                    {
                        movie.length > 0 && movie.map((item, index) =>{
                            return <MovieItem data={item} key={index}/>
                        })
                    } 
                </div>
                </div>
                </TabPane>
                <TabPane tab="All Actors" key="2">
                <Pagination postPerPage={postPerPage} totalPost={actors.length} paginate={paginate}/>

                <ActosItem actors={currentPost} loading={loading}/>
                </TabPane>
                <TabPane tab="Fetch by actor" key="3">
                 Fetch All moview by actor name
                 <div className='flex pt-50'>
                     <input className='w-50' placeholder="search key..." onChange={(e)=> setSearchKey(e.target.value)}/>
                     <button className='btn btn-primary ml-20' onClick={handleSearch}> Search</button>
                     <SearchResult movies={searchResult} loading={seachLoading} />
                 </div>
                 
                </TabPane>
        </Tabs>
        </div>
    );
}
 
export default AllMovies;