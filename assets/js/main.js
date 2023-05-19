for (let i = 1; i < 6; i++) {

    $.ajax({
        method: "GET",
        url: 'https://api.tvmaze.com/shows/' + i,
        success: function (res) {
            console.log(res);
            $('.row').append(`<div>
                 <div class="col-3">
         <img src="${res.image.medium}" class="card-img-top" alt="...">
         <div class="card-body">
             <span class="text-secondary">${res.name}</span>
          <p class="ucuz mt-2">${res.averageRuntime}</p>
           <div class="mt-2 star">
           <i class="las la-star"></i>
           <i class="las la-star"></i>
           <i class="las la-star"></i>
           <i class="las la-star"></i>
           <i class="las la-star"></i>
           </div>
           <p class="mt-2 faizsiz">${res.genres}</p>
            <h5 class="card-title">${res.id}</h5>
            <button onclick="onClck()">Detail</button>
          </div>
       </div>
             </div>`
            )
        },
        error: function (err) {
            console.log(err);
        }
    })
}