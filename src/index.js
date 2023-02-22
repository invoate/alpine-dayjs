import dayjs from 'dayjs';

var options = {
  dayjs: dayjs,
  defaultFormat: 'DD/MM/YYYY'
}

const updateElement = function (el, date) {
  const format = el.getAttribute('x-dayjs-format') || options.defaultFormat;
  const formattedDate = date.format(format);
  el.setAttribute('datetime', date.toISOString());
  el.textContent = formattedDate;
}

const dayjsDirective = (el, { modifiers, expression }, { evaluateLater, effect }) => {
  const isBound = modifiers.includes('bind')
  if (isBound) {
      let getUpdatedValue = evaluateLater(expression)
      effect(() => {
        getUpdatedValue(value => {
          updateElement(el, options.dayjs(value))
        })
      })
  } else {
    updateElement(el, options.dayjs(expression))
  }
}

const dayjsPlugin = function (supplied = {}) {
  options = { ...options, ...supplied }
  return function (Alpine) {
    Alpine.directive('dayjs', dayjsDirective);
  }
}

export default dayjsPlugin
