export default {
    name: 'VKMusic', // уникальное имя спецпроекта. Оно же — название главного класса. Используется на странице, куда интегрируется спецпроект
    analyticsCategory: '',
    sendPageView: true, // отключаем, если спецпроект не на отдельной странице
    listenedEvents: ['click', 'input'] // слушаем события (click, input, change, etc.). Обычно нужен только click
};