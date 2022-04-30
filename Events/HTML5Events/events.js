// pageshow : fires whenever a page is displayed
(function(){
  let showCount = 0;

  window.addEventListener("load", () => {
    console.log("load fired");
  })

  window.addEventListener("pageshow", () => {
    showCount++;
    console.log(`Show has been fired ${showCount} times`);
  })
})


// hashchange events
window.addEventListener("hashchange", (event) => {
  console.log(`old URL ${event.oldURL}, New URL: ${event.newURL}`);
});
