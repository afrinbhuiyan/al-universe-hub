const APIPhone = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    // console.log(data)
    const hubs = data.data.tools;
    // console.log(hubs)
    displayAPI(hubs)
}

const displayAPI = (hubs) =>{
    const hubContainer = document.getElementById("hub-container");
    // console.log(hubs)
    hubs.forEach(hub => {
        console.log(hub);
        const hubCard = document.createElement('div');
        hubCard.classList = `card bg-base-100  border`;
        hubCard.innerHTML = `
        <figure class="px-10 pt-10">
              <img
                src="${hub.image}"
                alt=""
                class="rounded-xl" />
            </figure>
            <div class="card-body ">
              <h2 class="text-2xl font-bold">Features</h2>
              <p>1. ${hub?.features[0] || 'no available'}</p>
              <p>2. ${hub?.features[2] || 'no available'}</p>
              <p class="border-b pb-5">3. ${hub?.features[3] || 'no available'}</p>
              <div class="flex justify-between mt-3"><div><h2 class="text-2xl font-bold">${hub.name}</h2>
              <p class="flex mt-2"><img src="image/Frame.png" alt=""> ${hub.published_in}</p></div>
               <div class="">
               <button class="btn rounded-full" onclick="handleShowDetails('${hub.id}')"><img src="image/Vector.svg" alt=""></button>
              </div>
            </div></div>
        `;    
        hubContainer.appendChild(hubCard)
    });
}

const handleShowDetails = async (id) => {
       console.log('click show detailes', id)
    // load single hub data
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json();
    const hub = data.data;

    showPhoneDetails(hub);
}

const showPhoneDetails = (hub) => {
        //  display the modal
        const hubDescription = document.getElementById('hub-description');
        hubDescription.innerText = `${hub.description}
        `; 
        const hubFeatures = document.getElementById('hub-features');
        hubFeatures.innerText = `${hub.pricing[0].price}
        ${hub.pricing[0].plan}`;
        const hubFeatures1 = document.getElementById('hub-features1');
        hubFeatures1.innerText = `${hub.pricing[1].price}
        ${hub.pricing[1].plan}`;
        const hubFeatures2 = document.getElementById('hub-features2');
        hubFeatures2.innerText = `${hub.pricing[2].price}
        ${hub.pricing[2].plan}`;
        const hubs = document.getElementById('hubs');
        hubs.innerHTML = `<span class="text-lg font-bold">Features :</span>${hub.features.features_name}`
        const hubsIntegrations = document.getElementById('hub-Integrations');
        hubsIntegrations.innerHTML = `<span class="text-lg font-bold">Integrations </span>
        <p><span class="font-bold text-center"> . </span>${hub.integrations[0]}</p>
        <p><span class="font-bold text-center"> . </span>${hub.integrations[1]}</p>
        <p><span class="font-bold text-center"> . </span>${hub.integrations[2]}</p>
        `;
        const hubContect = document.getElementById("hub-content");
        hubContect.innerHTML = `
        <img src="${hub.image_link}" alt="">
        <p class="text-xl font-bold mt-6">${hub.input_output_examples[0].input}</p>
        <p class="">${hub.input_output_examples[0].output}</p>
        `
        console.log(hub)
        show_details_modal.showModal()
};
APIPhone()



