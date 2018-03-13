import React from 'react';

const ViewMore = ({ txHash = '0x6eb6cbaa2b577a5364ed7baef27a889a1fb6d6886c0c8cae1eee7a17d651a593 ', to = '0xb672df1ae59855a5a3456ae46eca1b34b6c65956', from = '0x4c599c10b85fc343788b6cc9245e63355ad1ba96' }) => {
    return (
        <div>
            <div>TxHash: {txHash}</div>
            <div>To: {to}</div>
            <div>From {from}</div>
        </div>
    )
}

export default ViewMore;