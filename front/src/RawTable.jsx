import React from 'react';

function RawTable({ item }) {
  return (
    <tr>
      <td>{item.property1}</td>
      <td>{item.property2}</td>
      {/* Add more cells for other properties */}
    </tr>
  );
}

export default RawTable;
