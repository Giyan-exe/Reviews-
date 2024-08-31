const reviews = [
    {
        id: 1,
        name: "John",
        job: "Programmer",
        img: 
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Ex malesuada sem ligula vel eget id. Ac nostra neque cras aliquam elit. Efficitur egestas quis ultrices ad porttitor et suspendisse. Pretium efficitur est massa maximus turpis est aliquam nisi. Mattis conubia bibendum ex faucibus sodales scelerisque amet. Praesent mollis pharetra conubia, curae elementum parturient integer nascetur. Hendrerit mi tortor curae tristique sollicitudin, semper vivamus dolor.",   
    },

    {
        id: 2,
        name: "Hannah",
        job: "Scientist",
        img: 
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinyasrgb&w=1260&h=750&dpr=1",
        text: "Imperdiet suspendisse ridiculus tortor consectetur id montes suspendisse? Donec praesent taciti nascetur metus praesent iaculis. Proin lobortis adipiscing integer quisque primis. Rutrum elit sodales orci mi pharetra erat donec. Fringilla consectetur fusce dictum turpis netus facilisi parturient volutpat. In tortor rhoncus nascetur purus velit porttitor non. Cras sodales tortor gravida vel magna sollicitudin. Eget vestibulum eget amet hac faucibus. Pharetra in himenaeos id interdum lacinia non. Imperdiet massa nibh venenatis ut parturient fringilla enim.",
    },

    {
        id: 3,
        name: "James",
        job: "Entrepreneur",
        img: 
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Diam viverra facilisis suscipit egestas amet quis cras. Tincidunt urna sagittis neque sollicitudin facilisis venenatis auctor rutrum. Aenean curabitur magnis phasellus vitae aptent fermentum natoque. Penatibus lacus penatibus aliquet, sociosqu vitae integer. Pretium penatibus auctor magna sem fames eleifend eget. Consequat dapibus molestie nibh vitae per platea. Suspendisse elementum nascetur ex curabitur neque nascetur. Eu massa potenti ex vehicula fusce et."
    },

    {
        id: 4,
        name: "Joshua",
        job: "Journalist",
        img: 
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Primis nam nulla class facilisis nullam vel taciti viverra. Tempor tempor platea nostra tortor, donec ullamcorper. Dignissim ante nisl ultricies orci convallis iaculis sem. In cubilia a odio vivamus tempor lobortis torquent odio consectetur. Netus fermentum scelerisque duis ultrices habitant. Cras parturient per himenaeos cras curabitur tellus. In et ornare nisl nunc, nisl conubia habitant blandit."        
    },

    {
        id: 5,
        name: "Anne",
        job: "Scientist",
        img: 
        "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, delectus non? Placeat voluptatum eum officia in voluptates quaerat hic maxime, maiores iure, fuga dolore ipsum vel fugiat? Rerum, perspiciatis provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facere modi officia atque, fugiat sed aperiam, similique nam autem doloribus facilis at minima repellendus perspiciatis ut unde non! Omnis, veniam."
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const comment = document.getElementById("comment");

const prevBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
   showPerson[currentItem];
});

function showPerson() {
   const item = reviews[currentItem];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   comment.textContent = item.text;
}

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length -1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor (Math.random() *reviews.length);
    console.log(currentItem);
    showPerson();
})