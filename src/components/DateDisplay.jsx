function DateDisplay() {
    const today = new Date();
  
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    const formattedDate = today.toLocaleDateString('en-NZ', options);
  
    return <p className="date-display"> {formattedDate}</p>;
  }
  
  export default DateDisplay;
  