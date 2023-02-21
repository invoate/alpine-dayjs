import dayjs from 'dayjs';

var options = {
  dayjs: dayjs,
  defaultFormat: 'DD/MM/YYYY'
}

const dayjsDirective = (el, { expression }) => {
  const date = expression ? options.dayjs(expression) : options.dayjs();
  const format = el.getAttribute('x-dayjs-format') || options.defaultFormat;
  const formattedDate = date.format(format);
  el.setAttribute('datetime', date.toISOString());
  el.textContent = formattedDate;
};

const dayjsPlugin = function (supplied = {}) {
  options = { ...options, ...supplied }
  return function (Alpine) {
    Alpine.directive('dayjs', dayjsDirective);
  }
}

export default dayjsPlugin
