const getYOE = () => {
  let currentDate = new Date();
  let dateStartedAsEng = new Date('Nov 1, 2017');

  let months = monthDiff(dateStartedAsEng, currentDate)

  let years = Math.floor(months / 12);
  let remainingMonths = months % 12;
  
  if (remainingMonths >= 9) {
    years++;
  } else if (remainingMonths >= 6) {
    years += .5
  }

  return years;

}

function yearsDiff(d1, d2) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let yearsDiff =  date2.getFullYear() - date1.getFullYear();
  return yearsDiff;
}

function monthDiff(d1, d2) {
  let years = yearsDiff(d1, d2);
  let months = (years * 12) + (d2.getMonth() - d1.getMonth()) ;
  return months
}

export default getYOE;