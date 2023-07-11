const cheerio = require('cheerio');

const choonsik_and_friends = require('./source/choonsik-and-friends');
const sweet_rabbit_9 = require('./source/sweet-rabbit-tosimi-ver-9');
const eunuchs_summer_day_2 = require('./source/eunuchs-summer-day-2');
const maltese_daily_life_as_a_dog = require('./source/maltese-daily-life-as-a-dog');


function parseUrl(type) {
    try {
        let dom = "";
        switch (type) {
            case "choonsik-and-friends":
                dom = choonsik_and_friends;
                break;
            case "sweet-rabbit-tosimi-ver-9":
                dom = sweet_rabbit_9;
                break;
            case "eunuchs-summer-day-2":
                dom = eunuchs_summer_day_2;
                break;
            case "maltese_daily_life_as_a_dog":
                dom = maltese_daily_life_as_a_dog;
                break;
        }

        const $ = cheerio.load(dom);
        const imgSrcs = [];

        $('img').each(function(i, elem) {
            imgSrcs[i] = $(this).attr('src');
        });

        return imgSrcs;
    } catch (error) {
        console.error(error);
    }
}

module.exports = parseUrl;