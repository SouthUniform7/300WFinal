import React from 'react';
import IndividualTableRow from './IndividualTableRow';

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          {/* Add more headers for other properties */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <RawTable key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
