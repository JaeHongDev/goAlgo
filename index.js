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
        let setList = [];
        list.each(function (index, elem) {
            const data = $(this).html();
            const checkedInput = index % 2;

            const combineData = (name, data) => {
                const toggleNameInputOrOutput = (toggle) => toggle ? { "input": data } : { "output": data };
                return toggleNameInputOrOutput(name)
            }
            const a = combineData(checkedInput, data)
            console.log(a)
            if (checkedInput) {
                setList = [...setList, combineData(checkedInput, data)]
            } else {
                console.log(setList.pop());
                // setList.push({
                //     "input": setList.pop().input,
                //     "output": data
                // })
            }
        })
        console.log(setList)
    })

// 백준 알고리즘 문제 혹은

// 프로그래머스 문제 스크랩