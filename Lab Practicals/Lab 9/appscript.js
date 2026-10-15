const searchURL = "https://search.brave.com/search?q="

const City = {
    Paris: {
        name: "Paris 🗼",
        bgimageurl: "https://imgs.search.brave.com/oZnull3xn5K1D8ATxziZ_LSdq_h6L3oGtziQiz1gmPM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTU5/MTE4OTU2L3Bob3Rv/L3dvbWFuLWhhdmlu/Zy1sdW5jaC1pbi1o/b3RlbC1pbi1wYXJp/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9MjdTZ3hZVjV4/a1pXWnFRZUFEd2pD/N3hnVDFUajcxckNm/ZlBuQU5neWpiQT0",
        information: 
        `
            Paris, known as the City of Light, is a global hub of culture, fashion, and history, celebrated for its elegant architecture, vibrant intellectual life, and enduring influence on art and diplomacy. Nestled along the Seine, the city has evolved over centuries into a living canvas of urban design, where medieval roots blend seamlessly with grand 19th-century boulevards and modern innovation.
        `,
        more_info: searchURL+"paris"
    },
    Pune: {
        name: "Pune ⛪",
        bgimageurl: "https://imgs.search.brave.com/AAcxOJxiTtAnYUD5ykBvrc7G1TLaU-OSmONjZwDn_3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2LzA0LzMxLzM4/LzM2MF9GXzE2MDQz/MTM4NTFfbFdFMUx6/ZW83YTgwUVN5ZjZ0/WDVDbHh0QlYwd2F1/ancuanBn",
        information: 
        `
            Pune, once known as Poona, is a major city in western India and the cultural heart of Maharashtra. Nestled in the Deccan Plateau at the confluence of the Mula and Mutha rivers, it has long been celebrated as the 'Oxford of the East' for its prestigious educational institutions and intellectual heritage.
        `,
        more_info: searchURL+"Pune"  
    },
    Mumbai: {
        name: "Mumbai 💰",
        bgimageurl: "https://imgs.search.brave.com/4yXRvNeRf2prjXxyneht1DPlZiHPsmXcXgkW66BgA9I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDUu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3Av/QUYxUWlwUFJiai0w/cjZsd0piNzRxLXpj/VjZqekxfckVDN2hz/OHdCb0t2RmU9dzQ4/MC1oMzAwLWstbi1y/dw.jpeg",
        information:
        `
            Mumbai, formerly known as Bombay, is a major metropolis on the west coast of India and the capital of Maharashtra state. It is a vibrant, densely populated city with a rich colonial history and deep cultural roots, named after the local goddess Mumba.
        `        ,
        more_info: searchURL+"Mumbai"
    },
}

window.onload = function()
{
    const MainContent_Holder = document.getElementById('Content-container')

    let count = 0;

    for(X in City) { 
        count++ 
        MainContent_Holder.innerHTML +=

        `
        <div class="card" style="background-image: url('${City[X].bgimageurl}')">
                <div class="overlay">
                    <div class="information">
                        <h2>
                            ${City[X].name}
                        </h2>
                        <p>
                            ${City[X].information}
                        </p>
                        <button class="LearnMoreButton" onclick="window.location.href = '${City[X].more_info}'"> 
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
        `
    }

}