
const container = document.querySelector('.container');

// Throttling Function
const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
container.addEventListener("mousemove", throttleFunction((e) => {
    
   const urls = [
    "https://images.pexels.com/photos/15578747/pexels-photo-15578747/free-photo-of-sneaking-cat-on-the-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/22806869/pexels-photo-22806869/free-photo-of-a-street-light-with-a-pole-and-a-pole.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/24596101/pexels-photo-24596101/free-photo-of-berlin-tv-tower-from-the-spree-1.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/12103739/pexels-photo-12103739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/23193129/pexels-photo-23193129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6129361/pexels-photo-6129361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   ]

    // creating a div 
    const div = document.createElement("div");
    div.classList.add('popUpDiv')

    // cursor ke sath div create hone ke liye 
    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";

   // generating random urls index number
   const index = Math.floor(Math.random() * urls.length);

    // creating a img tag
    const img = document.createElement("img");
    img.setAttribute("src", urls[index])
    

    div.appendChild(img);
    document.body.appendChild(div)

    gsap.to(img, {
        y:"0",
        ease: Power2,
        duration: .9
    })

    gsap.to(img, {
        y: "100%",
        ease: Power2,
        delay: 1
    })

    setTimeout(function () {
        div.remove();
    }, 2000);

    img.onerror = () => {
        console.error("Failed to load image: ", urls[index]);
    };

}, 400));