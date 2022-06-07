
import styles from "../styles/Home.module.scss"
import type { AppProps } from "next/app"
import { StaticQueryContext } from "@silverstripe/nextjs-toolkit"
import cache from "cache"
import Head from 'next/head'
import Image from 'next/image'
import React, { useState} from 'react';
import ProductCard from '../src/components/productcard'
import Header from '../src/components/header'
import Footer from '../src/components/footer'

import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '../products.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return {
    props: objectData
  }
}
 //could not import from file
var props = JSON.parse(JSON.stringify({
  "productList": [
      {
          "productName": "Radiance Cream",
          "productID": 0,
          "dateAdded": "2021-01-03",
          "description": {
              "main": "A powerful Superblend of wheat-based Hyaluronic Acid to plump and Vitamin C to help firm, tighten, smooth and improve skin appearance."
          },
          "images": [
              {
                  "path": "image-5.jpg"
              }
          ],
          "price": [
              {
                  "currency": "€",
                  "amount": 89.00
              }
          ]
      },
      {
          "productName": "Radiance Serum",
          "productID": 1,
          "dateAdded": "2024-01-06",
          "description": {
              "main": "A powerful Superblend of wheat-based Hyaluronic Acid to plump and Vitamin C to help firm, tighten, smooth and improve skin appearance."
          },
          "images": [
              {
                  "path": "image-4.jpg"
              }
          ],
          "price": [
              {
                  "currency": "€",
                  "amount": 99.00
              }
          ]
      },
      {
          "productName": "Radiance Serum",
          "productID": 2,
          "dateAdded": "2021-01-04",
          "description": {
              "main": "A powerful Superblend of wheat-based Hyaluronic Acid to plump and Vitamin C to help firm, tighten, smooth and improve skin appearance.",
              "second":"A plumping 2% Hyaluronic Acid complex with Vitamin C to help hydrate and brighten tired-looking skin."
            },
          "images": [
              {
                  "path": "image-1.jpg"
              }
          ],
          "price": [
              {
                  "currency": "€",
                  "amount": 149.00
              }
          ]
      },
      {
          "productName": "Radiance Serum",
          "productID": 3,
          "dateAdded": "2020-01-07",
          "description": {
              "main": "A powerful Superblend of wheat-based Hyaluronic Acid to plump and Vitamin C to help firm, tighten, smooth and improve skin appearance."
          },
          "images": [
              {
                  "path": "image-3.jpg"
              }
          ],
          "price": [
              {
                  "currency": "€",
                  "amount": 149.00
              }
          ]
      },
      {
          "productName": "Radiance Serum",
          "productID": 4,
          "dateAdded": "2020-08-07",
          "description": {
              "main": "A powerful Superblend of wheat-based Hyaluronic Acid to plump and Vitamin C to help firm, tighten, smooth and improve skin appearance."
          },
          "images": [
              {
                  "path": "image-3.jpg"
              }
          ],
          "price": [
              {
                  "currency": "€",
                  "amount": 169.00
              }
          ]
      },
      {
          "productName": "Radiance Serum",
          "productID": 5,
          "dateAdded": "2020-05-07",
          "description": {
              "main": "A powerful Superblend of wheat-based Hyaluronic Acid to plump and Vitamin C to help firm, tighten, smooth and improve skin appearance."
          },
          "images": [
              {
                  "path": "image-3.jpg"
              }
          ],
          "price": [
              {
                  "currency": "€",
                  "amount": 149.00
              }
          ]
      }
  ]
}));

// Products should be queried as the main menu built into silverstripe
// The data for these producs is what is updated from the admin side if they want to add a product
// Generating grid with products from JSON data
const ProductGrid = ({visible }: any) => {
  let productList = props.productList

  console.log("running grid", productList)
  return (
    <div className={styles.grid}>
      {productList.slice(0, visible).map((product: any) => (<ProductCard product={product} key={product.productID} />))}
    </div>
  )
}

function MyApp({ Component, pageProps}: AppProps) {
  const [list, setData] = useState(props.productList);
  //state management
  const [visible, setVisible] = useState(4);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  //sort by lowest price (ascending)

  function sortByPrice() {
      const sorted = list.slice().sort((b, a) => {
        return b.price[0].amount - a.price[0].amount;
      });
      console.log('this', sorted)
      console.log('rerender',list)
      setData(sorted)
  }

  //sort products by newest first (descending)
  function sortByDate() {
      const sorted = list.slice().sort((a, b) => {
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      });
      console.log('this', sorted)
      console.log('rerender',list)
      setData(sorted)
  }
  return (
    <StaticQueryContext.Provider value={cache.staticQueries}>
      <div className={styles.container}>
        <Head>
          <title>VACA App</title>
          <meta name="description" content="An example for Kreationsbyran"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
        </Head>
        <Header/>
        <main className={styles.main}>
          <h1>View products</h1>
          <div className={styles.buttons}>
            <button
              onClick={() => sortByPrice()}
              type="button"
            >
              Price
            </button>
            <button
              onClick={() => sortByDate()
              }
              type="button"
            >
              Date
            </button>
            </div>
          <ProductGrid visible={visible}/>
          <div className="load-more">
            <button
              onClick={showMoreItems}
              type="button"
            >
              Load more
            </button>
          </div>
        </main>
        <Footer/>
      </div>
      <Component {...pageProps} />
    </StaticQueryContext.Provider>
  )
}
export default MyApp
