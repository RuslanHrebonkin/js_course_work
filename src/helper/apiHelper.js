module.exports = {

    async getData(agent,num,min,max) {
        return await agent
            .get(`https://www.random.org/integers/?num=${num}&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`)
            .then((res) => {
                let mas = res.text.split("\n");
                return mas;
            })
            .catch((err) => {

            });
    }
};
