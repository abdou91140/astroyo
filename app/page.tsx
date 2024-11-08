"use client";
import React, {useState, Fragment, ChangeEvent, useEffect} from 'react';
import SearchBar from '../components/forms/searchBar';
import SignList from '../components/signs/signList';

const Home: React.FC = () => {
    const [search, setSearch] = useState<string>('');

    const handleSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
            <div className="container is-fluid home-page">
                <section className="hero is-default is-large">
                    <div className="container-sm">
                        <div className="control flex justify-center">
                            <SearchBar
                                handleChange={handleSearchValue}
                                value={search}
                            />
                        </div>
                    </div>
                </section>
                <div className="container">
                    <SignList search={search} />
                </div>
            </div>
    );
};

export default Home;
