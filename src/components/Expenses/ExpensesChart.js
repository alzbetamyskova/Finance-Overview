import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Led', value: 0 },
    { label: 'Úno', value: 0 },
    { label: 'Bře', value: 0 },
    { label: 'Dub', value: 0 },
    { label: 'Kvě', value: 0 },
    { label: 'Čvn', value: 0 },
    { label: 'Čvc', value: 0 },
    { label: 'Srp', value: 0 },
    { label: 'Zář', value: 0 },
    { label: 'Říj', value: 0 },
    { label: 'Lis', value: 0 },
    { label: 'Pro', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return (
    <Chart dataPoints={chartDataPoints} />
  );
};

export default ExpensesChart;