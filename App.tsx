import * as React from 'react';
import './style.css';

export default function App() {
  function multiply(x) {
    ans.push(k * x);
    k = k + 1;
    if (k <= 10) {
      multiply(3);
    }
    return ans;
  }

  var k = 1;
  var ans = [];
  console.log(multiply(3));
}
