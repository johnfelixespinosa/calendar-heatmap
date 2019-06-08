import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import './App.css'

function App() {

  return (
    <div className="App">

      <CalendarHeatmap
        startDate={new Date('2015-02-01')}
        endDate={new Date('2016-02-01')}
        values={[
          { date: '2016-01-01', count: 1 },
          { date: '2016-01-22', count: 3 },
          { date: '2016-01-11', count: 4 },
          { date: '2016-01-12', count: 1 },
          { date: '2016-01-14', count: 4 },
          { date: '2016-01-19', count: 4 },
          { date: '2016-01-25', count: 2 },
          { date: '2016-01-21', count: 4 },
          { date: '2016-01-13', count: 1 },
          { date: '2016-01-09', count: 2 },
        ]}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
      />
    </div>
  );
}

export default App;
