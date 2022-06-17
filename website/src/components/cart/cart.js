import {React, useEffect, useState} from "react";
import {MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol , MDBContainer} from "mdb-react-ui-kit";
import Navbar from '../Navbar/Header';


export function Cart() {

    const [data , setdata] = useState([]);

    const rankingJson = async () => {                                         //when you submit the form

        try {
            const response = await fetch("http://localhost:3000/M06/ranking", { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body:  JSON.stringify(),
                
            });
            if (!response.ok) {
                throw new Error('Request Failed');
            }
            setdata(data);
            console.log(response);
            
    } catch (error) {                                                      //if there is an error
        console.error('Error:', error.message);
    }
        
}
    useEffect(() => {
        rankingJson();
    }, []);

  return (
      <>
      <Navbar />
    <MDBContainer>
        <div>
            <h1>
                Ranking Table
            </h1>
        </div>
    <MDBRow>
        <MDBCol>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Position</th>
                    </tr>
                </MDBTableHead>
                {data.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                    <tr>
                        <td colSpan={8}>
                            No Data Found:
                        </td>
                    </tr>
                    </MDBTableBody> 
                    ) : (
                    data.map((item, index) => (
                        console.log(item.name),
                        <MDBTableBody key={index}>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.points}</td>
                                <td>{item.position}</td>
                            </tr>
                        </MDBTableBody>
                    ))
                )}
            </MDBTable>
        </MDBCol>
    </MDBRow>
    </MDBContainer>
    </>

    
  );
}

export default Cart;

