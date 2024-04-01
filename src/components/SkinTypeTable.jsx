import React from "react";
import "../css/skinTypeTable.css"; // Import CSS file for table styling

function SkinTypeTable() {
  return (
    <table className="skin-type-table">
      <thead>
        <tr>
          <th>UV Индекс</th>
          <th>Тип Кожа</th>
          <th>Съвет за слънчево излагане.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan="4">0-2</td>
          <td>Много светла</td>
          <td>Можете спокойно да сте навън.</td>
        </tr>
        <tr>
          <td>Светла</td>
          <td></td>
        </tr>
        <tr>
          <td>Маслинен тон</td>
          <td></td>
        </tr>
        <tr>
          <td>Тъмна</td>
          <td></td>
        </tr>
        <tr>
          <td rowSpan="4">3-5</td>
          <td>Много светла</td>
          <td>Потърсете сянка през обедните часове.</td>
        </tr>
        <tr>
          <td>Светла</td>
          <td></td>
        </tr>
        <tr>
          <td>Маслинен тон</td>
          <td></td>
        </tr>
        <tr>
          <td>Тъмна</td>
          <td></td>
        </tr>
        <tr>
          <td rowSpan="4">6-7</td>
          <td>Много светла</td>
          <td>Избягвайте да сте навън през обедните часове.</td>
        </tr>
        <tr>
          <td>Светла</td>
          <td></td>
        </tr>
        <tr>
          <td>Маслинен тон</td>
          <td></td>
        </tr>
        <tr>
          <td>Тъмна</td>
          <td></td>
        </tr>
        <tr>
          <td rowSpan="4">8+</td>
          <td>Много светла</td>
          <td>Избягвайте да сте навън през обедните часове.</td>
        </tr>
        <tr>
          <td>Светла</td>
          <td></td>
        </tr>
        <tr>
          <td>Маслинен тон</td>
          <td></td>
        </tr>
        <tr>
          <td>Тъмна</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default SkinTypeTable;
