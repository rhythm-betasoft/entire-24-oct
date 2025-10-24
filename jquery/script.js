$(document).ready(function () {
    const url1 = "https://jsonplaceholder.typicode.com/posts";

        $.ajax({
            url: url1,
            method: "GET",
            success: function (data) {
                const container = $("#container");
                container.empty(); 

                data.forEach(post => {
                     const card = $(`
                    <div class="col-4 mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">${post.title}</h5>
                                <p class="card-text">${post.body}</p>
                                <button class="btn btn-danger btn-delete">Delete</button>
                                <button class="btn btn-warning btn-edit">Edit</button>
                            </div>
                        </div>
                    </div>
                `);
                card.find(".btn-delete").click(function () {
                    card.remove();
                });

                      card.find(".btn-edit").click(function () {
                    const titleElem = card.find(".card-title");
                    const bodyElem = card.find(".card-text");

                    const newTitle = prompt("Edit Title:", titleElem.text());
                    const newBody = prompt("Edit Body:", bodyElem.text());

                    if (newTitle !== null) titleElem.text(newTitle);
                    if (newBody !== null) bodyElem.text(newBody);
                });

                    container.append(card);
                });
            },

        });
        
});
