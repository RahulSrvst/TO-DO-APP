import React, { useEffect, useState } from 'react'
import Timer2 from './Components/Timer2'

function App() {
  const [loader, setLoader]  = useState(false);
  // const [data, setData] = useState([]);

  // const fetchProduct = async() => { 
  //   const {data} = await baseAxios.get(URL.product);
  //   console.log(data);
  //   setData(data);
  //   baseAxios.get(URL.product)
  //   .then(({data}) => {
  //     setData(data);
  //     console.log(data)
  //     })

  //     console.log(typeof ([1,2,3,4]));
  //     console.log(
  //               {
  //                   title: 'test product',
  //                   price: 13.5,
  //                   description: 'lorem ipsum set',
  //                   image: 'https://i.pravatar.cc',
  //                   category: 'electronic'
  //               });

  //   try {
  //     setLoader(true)
  //     const response = await fetch(`${baseURL}${URL.product}`,{
  //       method: "GET",
  //       headers:{
  //         "Content-Type": "application/json"
  //       }
  //     });
  //   const data = await response.json();
  //   setData(data);
  //   setLoader(false)
  //   } catch (error) {
  //       console.error(error);
  //       setLoader(false);
  //   }
  //   setLoader(true);
  //   fetch('https://fakestoreapi.com/products',{
  //     method:"POST",
  //     body:JSON.stringify(
  //         {
  //             title: 'test product 1',
  //             price: 13.5,
  //             description: 'lorem ipsum set',
  //             image: 'https://i.pravatar.cc',
  //             category: 'electronic'
  //         }
  //     )
  // })
  //     .then(res=>res.json())
  //     .then(json=>console.log(json))

  //   fetch(`${baseURL}${URL.product}`)
  //   .then(async(response) => {
  //     // const data = await response.json();
  //     // console.log(data);
  //     // setLoader(false)
  //     return response.json();
  //   })
  //   .then((json) => console.log("hello",json))
  //   .catch((eror) => {
  //     console.error(eror);
  //   })
  //   .finally(() => {
  //     setLoader(false)
  //     console.log("finally")
  //   })
  // };

  // console.log(data)

  // useEffect(() => { 
  //   fetchProduct();
  // }, [])

  // if(loader){
  //   return <div>Loading...</div>
  // }

  return (
    <div className='flex flex-col gap-2'>
      {/* {data.map(item => (
        <div key={item.id}>
          <h1>{item?.title}</h1>
          <p>{item?.description}</p>
        </div>
      ))} */}
      <Timer2/>
      {/* <Apis /> */}
    </div>
  )
}

export default App