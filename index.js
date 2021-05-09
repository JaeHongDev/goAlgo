const axios = require("axios").default;

const cheerio = require("cheerio");


const url = "https://www.acmicpc.net/problem/1054"


axios
    .get(url)
    .then(html => {
        const $ = cheerio.load(html.data);
        const problem = {
            input: $("#problem_description"),
            output: $('#problem_output')
        }
        const list = $(".sampledata");
        const setList = [];
        list.each(function (i, elem) {
            const data = $(this).html();
            const nowListPosition = Math.ceil(setList.length / 2); // 0~1 [1] 2~3[2] 
            console.log(nowListPosition)
            const checkedInput = setList.length % 2;

            if (!checkedInput) {
                setList.push({ "input": data });
            } else {
                setList[nowListPosition - 1]["output"] = data;
            }
        })
        console.log(setList)
    })

// 백준 알고리즘 문제 혹은

// 프로그래머스 문제 스크랩