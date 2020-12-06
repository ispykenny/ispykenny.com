import moment from 'moment';

const dateCleaner = (olddate) => {
  return moment(olddate).format('MMMM Do YYYY')
}

export default dateCleaner;