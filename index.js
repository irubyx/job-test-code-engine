const { default: axios } = require("axios")

const main = async () => {
    const { data: response } = await axios.get(process.env.URL)
    console.log(response)
}

main()