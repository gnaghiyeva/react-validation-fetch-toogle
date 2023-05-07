import { CircularProgress } from '@mui/material';
import { Card, Col, Divider, Row } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import Search from './Search';



const Cards = () => {
   
    // const [loading, setLoading] = useState(false);
    const[posts,setPosts] = useState([])
    const storage = useRef([])
    
    useEffect(()=>{
       
    //   setLoading(true)
        fetch(' https://jsonplaceholder.typicode.com/photos')
        .then(res=>res.json())
        .then(data=>{
            setPosts(data)
            storage.current=data
            // setLoading(false)
        })
    },[])

    return (
        <>
            <Divider></Divider>
           
        
<Search storage={storage} setPosts={setPosts}/>

<Row   style={{width:'80%', margin:'0 auto'}} gutter={[20, 30]}>

{posts.map((post)=>( 
 <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
<Card
    hoverable
    cover={<img alt="example" src={post.url} />}
    style={{ height:'450px' }}
>
    <h3>{post.title}</h3>
    {/* <p><b>ID:</b>{post.id}</p> */}
</Card>
</Col> 

 ))}

</Row>

           
         
        </>
    )
}

export default Cards



{/* <Col className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
<Card
    hoverable
    
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
>
    <Meta title="Europe Street beat" description="www.instagram.com" />
</Card>
</Col> */}