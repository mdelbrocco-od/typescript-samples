import Contentstack from 'contentstack'
import React, { useEffect, useState } from 'react'
// import '../styles/styles.css'

const apiKey = "blt3d151d94546d0edd";
const accessToken = "csa2aac6a854d2c8379ad50833";
const environment = "local";

// Initialize Contentstack
const Stack = Contentstack.Stack(apiKey, accessToken, environment)

interface MyState {
    loading: boolean;
    result: any;
}

const Home = () => {
    const [state, setState] = useState<MyState>({ loading: true, result: null });

    useEffect(() => {
        Stack.ContentType("page_footer_product_tour_2040") // this was autogenerated.... oof.
            .Query()
            .toJSON()
            .find()
            .then((result) => {
                setState({ loading: false, result: result })
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    return (state.loading) ? <h1>loading...</h1> : <h1>{state.result[0][0].title}</h1>;
};
export default Home;
