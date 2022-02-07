const LANGUAGES = {
    ru: [
        "Получить демонстрационное приложение",
        "Получите наше демотнстрационное приложение и оцените все возможности, которые вы можете получить благодаря сотрудничеству с нами",
        "Чистый код",
        "Наше приложение имеет самый чистый код на рынке без ошибок и недоработок",
        "Веб-дизайн",
        "Наши опытные фронтенд-разработчики постарались для ВАС",
        "Разработка",
        "Наши разработчики создавали такие сложные проекты, как 'Google', 'Yandex' и т.д",
        "Брендинг",
        "Бренд 'ABC' соответствует всем современным трендам и тенденциям, и вы можете лично это проверить!"
    ],
    en: [
        "Get a demo application",
        "Get our demo application and check out all the opportunities that you can get through working with us",
        "Clean Code",
        "Our application has the cleanest code on the market with no bugs or flaws",
        "Web design",
        "Our experienced front-end developers have done their best for YOU",
        "Development",
        "Our developers have created such complex projects as 'Google', 'Yandex', etc.",
        "Branding",
        "The 'ABC' brand is in line with all current trends and tendencies, and you can check it out for yourself!"
    ]
}

function changeLanguage(lang) {
    let text = document.querySelectorAll('h3, p');

    text.forEach((item, index) => {
        item.innerHTML = LANGUAGES[lang][index];
    });
}

document.querySelectorAll('.lang-button').forEach(item => {
    item.addEventListener("click", () => {
        changeLanguage(item.dataset.lang);
    });
});