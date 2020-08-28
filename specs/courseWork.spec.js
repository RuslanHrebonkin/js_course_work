const superagent = require('superagent');
require('superagent-retry-delay')(superagent);
const agent = superagent.agent();
let numberOfRolls = 1000 ;
let dices = 1;
let deviation = 5;


describe.only('Test', async function () {
    it('Get all rolls', async function (numberOfRolls=1000, dices=1, deviation=5) {
        let res = await agent
            .get(`https://www.random.org/integers/?num=${numberOfRolls}&min=${dices}&max=${dices*6}&col=1&base=10&format=plain&rnd=new`)
            .then((res) => {
                return res;
            });
        let allRolls = await res.text.split("\n");// we have artifact element
        allRolls.pop(); //remove last array element
        // console.log("Result array", allRolls);
        let scoreOffRolls = new Map();
        allRolls.forEach(function (a) {
            if (scoreOffRolls[a] !== undefined)
                ++scoreOffRolls[a];
            else
                scoreOffRolls[a] = 1;
        });
        console.log('Map', scoreOffRolls);
        // Get of the ideal %
       let ideal = 100/(dices*5+1);
       //Get
        let percentMap  = new Map();
        percentMap = 100*scoreOffRolls[1]/numberOfRolls;
        console.log("result %:", percentMap );

    });
});