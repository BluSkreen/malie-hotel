import { DateRangePicker } from 'react-date-range';

class MyComponent extends Component {
    handleSelect(ranges){
      console.log(ranges);
      // {
      //   selection: {
      //     startDate: [native Date Object],
      //     endDate: [native Date Object],
      //   }
      // }
    }
    render(){
      const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }
      return (
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={this.handleSelect}
        />
      )
    }
  }

const DateRange = () => {
  return (
    <div>DateRange</div>
  )
}

export default DateRange