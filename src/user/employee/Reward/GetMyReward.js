import { useState, useEffect } from "react";
import { getByCustomerId } from "./Reward";

const GetMyRewards = () => {
    const [ rewards, setRewards ] = useState( [] );
    const userID = localStorage.getItem( "id" );

    useEffect( () => {
        getByCustomerId( userID ).then( (res) => { setRewards( res.data ); });
    }, [] );

    const headers = [
        {
            text: "신청 날짜",
            value: "appli_date"
        },
        {
            text: "상태",
            value: "appli_result"
        },
        {
            text: "내용",
            value: "content"
        },
        {
            text: "보상 금액",
            value: "reward_amount"
        }
    ];
    const tableData = useMemo( () => rewards, [rewards] );
    const headerKey = header.map( (header) => header.value );

    return (
        <table>
          <thead>
            <tr>
            {
                headers.map((header) => 
                <th key={header.text}>
                    {header.text}
                </th> 
                )
            }
            </tr>
          </thead>
          <tbody>
            {
              tableData.map((item, index) => (
                <tr key={index}>
                  { 
                    headerKey.map((key) => 
                      <td key={key + index}>
                        {item[key]}
                      </td>
                    )
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
    );
};
export default GetMyRewards;